import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');

test('core entry files exist', () => {
  for (const f of ['index.html', 'robots.txt', 'sitemap.xml', 'css/styles.css', 'js/app.js']) {
    assert.ok(existsSync(join(root, f)), `missing ${f}`);
  }
});

test('index.html is a valid document shell', () => {
  const html = read('index.html');
  assert.match(html, /<html[^>]*\slang="[^"]+"/, 'html tag must declare a lang attribute');
  assert.match(html, /<title>[^<]+<\/title>/, 'title is required for SEO');
  assert.match(html, /<meta\s+name="viewport"/, 'viewport meta is required');
});

test('robots.txt points at the sitemap', () => {
  const robots = read('robots.txt');
  assert.match(robots, /Sitemap:\s*\S+\.xml/i, 'robots.txt must reference a sitemap');
});

test('sitemap.xml is well-formed urlset', () => {
  const sitemap = read('sitemap.xml');
  assert.match(sitemap, /<\?xml version="1\.0"/, 'sitemap must declare xml prolog');
  assert.match(sitemap, /<urlset[\s>]/, 'sitemap must be a urlset');
  const urls = sitemap.match(/<loc>/g) || [];
  assert.ok(urls.length >= 1, 'sitemap must contain at least one url');
  const opens = (sitemap.match(/<url>/g) || []).length;
  const closes = (sitemap.match(/<\/url>/g) || []).length;
  assert.equal(opens, closes, 'every <url> must be closed');
});

test('no untracked absolute http:// asset links (mixed content risk)', () => {
  const html = read('index.html');
  const insecure = html.match(/(?:src|href)="http:\/\/[^"]+"/g) || [];
  assert.deepEqual(insecure, [], `found insecure http:// references: ${insecure.join(', ')}`);
});

test('legal pages exist and are linked from the footer and the form area', () => {
  for (const f of ['confidentialite.html', 'mentions-legales.html']) {
    assert.ok(existsSync(join(root, f)), `missing ${f}`);
    const page = read(f);
    assert.match(page, /<html[^>]*\slang="[^"]+"/, `${f} must declare a lang attribute`);
    assert.match(page, /<title>[^<]+<\/title>/, `${f} must have a title`);
    assert.match(page, /<h1>[^<]+<\/h1>/, `${f} must have a single main heading`);
  }

  const html = read('index.html');

  const footerStart = html.indexOf('<footer');
  assert.ok(footerStart !== -1, 'index.html must render a footer');
  const footer = html.slice(footerStart);
  assert.match(footer, /href="\.\/confidentialite\.html"/, 'footer must link the privacy policy');
  assert.match(footer, /href="\.\/mentions-legales\.html"/, 'footer must link the legal notices');

  const formStart = html.indexOf('id="waitlist-form"');
  assert.ok(formStart !== -1, 'waitlist form must exist');
  const formEnd = html.indexOf('</form>', formStart);
  assert.ok(formEnd !== -1, 'waitlist form must be closed');
  const formArea = html.slice(formStart, formEnd);
  assert.match(
    formArea,
    /href="\.\/confidentialite\.html"/,
    'form area must link the privacy notice',
  );

  assert.match(
    read('confidentialite.html'),
    /href="\.\/mentions-legales\.html"/,
    'privacy policy must link the legal notices',
  );
  assert.match(
    read('mentions-legales.html'),
    /href="\.\/confidentialite\.html"/,
    'legal notices must link the privacy policy',
  );
});

test('waitlist form captures explicit consent with a logged timestamp', () => {
  const html = read('index.html');
  assert.match(
    html,
    /<input[^>]*type="checkbox"[^>]*name="consent"[^>]*required/,
    'waitlist form must require an explicit consent checkbox',
  );
  assert.match(html, /name="consent_timestamp"/, 'consent timestamp must be submitted');

  const js = read('js/app.js');
  assert.match(js, /form-consent-timestamp/, 'app.js must write the consent timestamp');
  assert.match(js, /consentBox\.checked/, 'app.js must refuse to submit without consent');
});

test('no fabricated statistics or fake scarcity in the landing copy', () => {
  const html = read('index.html');
  const js = read('js/app.js');
  const both = html + js;

  // Unsourced percentage claims flagged in RILES-057
  assert.doesNotMatch(html, /\b7[38]\s?%/, 'index.html must not carry the "73 %"/"78 %" claims');
  assert.doesNotMatch(js, /7[38] %/, 'js/app.js must not carry the "78 %" claim');
  assert.doesNotMatch(both, /\b\d{1,3}\s?%\s+des\s+\w+/, 'no unsourced "X % des …" claims');

  // Fabricated waitlist counters and positions
  assert.doesNotMatch(html, /38\s*\/\s*100/, 'no fabricated "38 / 100" spots counter');
  assert.doesNotMatch(both, /#0?142\b/, 'no fabricated waitlist position (#142)');
  assert.doesNotMatch(html, /places restantes\s*:\s*\d+/i, 'no remaining-spots counter');

  // Fake countdown / urgency timers
  assert.doesNotMatch(both, /countdown|compte à rebours/i, 'no fake countdown markup');
});

test('CSP allows the GA4 loader and collector (RILES-058)', () => {
  const toml = read('netlify.toml');
  const cspMatch = toml.match(/Content-Security-Policy = "([^"]*)"/);
  assert.ok(cspMatch, 'netlify.toml must declare a Content-Security-Policy');
  const csp = cspMatch[1];

  const scriptSrc = (csp.match(/script-src ([^;]+)/) || [])[1] || '';
  const connectSrc = (csp.match(/connect-src ([^;]+)/) || [])[1] || '';

  assert.match(scriptSrc, /googletagmanager\.com/, 'script-src must allow the GA4 loader');
  assert.match(connectSrc, /google-analytics\.com/, 'connect-src must allow GA4 collection');
  assert.match(connectSrc, /analytics\.google\.com/, 'connect-src must allow regional GA4 hosts');

  // Existing analytics must stay allowed
  assert.match(scriptSrc, /clarity\.ms/, 'script-src must keep Clarity');
  assert.match(scriptSrc, /posthog\.com/, 'script-src must keep PostHog');
  assert.match(connectSrc, /posthog\.com/, 'connect-src must keep PostHog');
});

test('analytics trackers only load after cookie consent', () => {
  const html = read('index.html');
  assert.match(html, /id="cookie-consent-banner"/, 'cookie consent banner must exist');
  assert.match(
    html,
    /href="\.\/confidentialite\.html#cookies"/,
    'banner must link the cookie section of the privacy policy',
  );

  const js = read('js/app.js');
  assert.match(js, /riles_cookie_consent/, 'consent choice must be persisted');
  assert.match(js, /storedConsent === 'granted'/, 'trackers must only load on explicit consent');
  assert.match(js, /showCookieConsentBanner\(\)/, 'banner must be shown when no choice is stored');
});

// --- WCAG contrast guard -------------------------------------------------
function tokenMap(css) {
  const root = css.slice(css.indexOf(':root'), css.indexOf('}', css.indexOf(':root')));
  const map = {};
  for (const m of root.matchAll(/--([a-z0-9-]+):\s*(#[0-9a-fA-F]{3,6})\s*;/g)) {
    map[m[1]] = m[2];
  }
  return map;
}

function hexToRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3)
    h = h
      .split('')
      .map((c) => c + c)
      .join('');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
}

function relLum(hex) {
  const [r, g, b] = hexToRgb(hex).map((v) =>
    v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4),
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const la = relLum(a);
  const lb = relLum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

test('design tokens preserve WCAG AA text and component contrast', () => {
  const tokens = tokenMap(read('css/styles.css'));

  // Every pair here is either body text (4.5:1) or a component boundary (3:1).
  const checks = [
    ['ink', 'bg', 4.5],
    ['ink', 'bg-2', 4.5],
    ['ink-soft', 'bg', 4.5],
    ['ink-soft', 'bg-2', 4.5],
    ['ink-faint', 'bg', 4.5],
    ['ink-faint', 'bg-2', 4.5],
    ['ink', 'primary', 4.5],
    ['success', 'bg-2', 4.5],
    ['primary-dark', 'primary-soft', 4.5],
    ['primary-dark', 'bg-2', 4.5],
    ['ink-soft', 'bg', 4.5],
    ['border-strong', 'bg-2', 3],
    ['border-strong', 'bg', 3],
  ];

  for (const [fg, bg, min] of checks) {
    assert.ok(tokens[fg], `missing token --${fg}`);
    assert.ok(tokens[bg], `missing token --${bg}`);
    const ratio = contrast(tokens[fg], tokens[bg]);
    assert.ok(ratio >= min, `--${fg} on --${bg} is ${ratio.toFixed(2)}:1, expected >= ${min}:1`);
  }
});

test('mobile reflow guard: responsive overrides stay in CSS', () => {
  const css = read('css/styles.css');
  assert.match(
    css,
    /@media \(max-width: 640px\)[\s\S]*?\.week-calendar-grid[\s\S]*?repeat\(2, minmax\(0, 1fr\)\)/,
    'week calendar must collapse to 2 columns on small screens',
  );
  assert.match(
    css,
    /\.cookie-banner[\s\S]*?flex-direction: column/,
    'cookie banner must stack on mobile',
  );
  assert.match(
    css,
    /\.readiness-pill[\s\S]*?white-space: normal/,
    'readiness pill must wrap instead of overflow',
  );
  assert.match(css, /--border-strong:/, 'interactive boundary token must exist');
});
