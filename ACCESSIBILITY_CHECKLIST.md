# Accessibility and design checklist (Riles landing)

Sources:
- W3C WCAG 2.2 Level AA: <https://www.w3.org/TR/WCAG22/>
- MDN mobile accessibility checklist: <https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Mobile_accessibility_checklist>
- WebAIM WCAG 2 checklist: <https://webaim.org/standards/wcag/checklist>
- W3C WCAG2Mobile (mobile application of WCAG 2.2): <https://w3c.github.io/matf/>
- WP Accessibility Knowledge Base (design checks): <https://wpaccessibility.org/docs/testing/design/>

## A. Persisting issues to fix (P0)
- [x] Reflow (1.4.10): no horizontal scroll 320px verified by Playwright.
- [ ] Contrast minimum (1.4.3): normal text under 4.5:1, especially `#ffffff` over `#FF5722`, `var(--ink-soft)` on colored surfaces, and hover state.
- [ ] Large text (1.4.3): make secondary `#FF5722` actions non-bold or increase size so 3:1 rule applies.
- [ ] Button text color should be dark or font size increased.
- [x] Removed decorative colored glows and repeating stripe artificial scaffolding.

## B. Design and semantic (P1)
- [ ] Increase image `alt` meaningful (already present; check deck, duplicates).
- [ ] Use semantic heading hierarchy, no skip h2 -> h4.
- [ ] Non-text contrast (1.4.11): icons (`compat-chip emoji`) 3:1.
- [ ] Focus states (keyboard) visible and contrast ≥3:1. Ensure `--primary-border` not too low.
- [ ] `white-space` consistency; avoid nowrap causing mobile overflow.
- [ ] Tap targets >=44px (WCAG 2.5.8 pointer target size). Buttons under 44 currently (angle pills, `brand-logo`, links, `.btn` small).
- [ ] No text in images of text; use markup.
- [ ] Links distinguishable beyond color (underline).
- [ ] Concise uppercase labels (<32 chars); avoid full uppercase body.
- [ ] Tiny functional text to at least 11px; body to 14-16px ideally (16 CSS px recommended).
- [ ] Images eager enough or lazy with reserved aspect (prevent CLS).
- [ ] Color not sole indicator for `adapted/rebalanced` states (icons/text plus color).
- [ ] Consent timestamp and privacy link in modal.
- [ ] Cookie banner controls clearly in order.

## C. Mobile-first QA
- [ ] Test top navigation wrap; no element clipping.
- [ ] Cookie banner fits width <=320px and does not overlap main CTAs? (fixed bottom).
- [ ] Simulator grid and week calendar at 7 columns, no last column overflow.
- [ ] Hero image scales fluidly with aspect ratio.
- [ ] Touch target audit Playwright pass.
- [ ] Screen reader navigation summary.

## D. Detector findings counts (impeccable)
- Original baseline: 56 findings.
- Focus reductions to zero: low-contrast, tiny text, all-caps, dark glow, number scaffolding.

## Next steps
- Fix P0 contrast and tap target issues.
- Run Playwright audit across 320-768 and attach screenshots.
- Re-run `impeccable detect`.
- Ask user for final opinion.