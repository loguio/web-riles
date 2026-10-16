# Accessibility and design checklist (Riles landing)

Sources:

- WCAG 2.2 Level AA: <https://www.w3.org/TR/WCAG22/>
- MDN mobile accessibility checklist: <https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Mobile_accessibility_checklist>
- WebAIM WCAG 2 checklist: <https://webaim.org/standards/wcag/checklist>
- W3C WCAG2Mobile: <https://w3c.github.io/matf/>

## P0 fixed

- [x] Reflow 1.4.10 no horizontal overflow at every width 320-768 (Playwright verified).
- [x] Contrast 1.4.3 button primary text dark `#0f172a` on `#ff5722` (5.64:1).
- [x] Token contrast: `--ink-faint #5b6b82`, `--success #0e7490`, `--primary-dark #c53e10`.
- [x] Cookie banner stacks under 640px, max-height 40vh, actions wrap.
- [x] Mobile nav CTA wraps; navbar height auto; no clipped arrow.
- [x] Week calendar collapses to 2 columns under 640px, all text >= 11px.
- [x] Hero text first; phone mockups static under phones stage; badge visible not occluded.
- [x] Founder and footer converted to light; no white-on-white text.
- [x] Comparison `.cell.riles` header no longer uses inline style overrides.
- [x] Dialog: Escape close, Tab focus trap (visible only), focus restore, background scroll lock, step-labelled `aria-labelledby`.

## P0 remaining

- [ ] Final colour duty-cycle review: primary orange still used on many roles. Not an AA defect but aesthetic concern.

## P1 remaining

- [ ] Touch target audit for secondary links/legal links after latest run.
- [ ] Replace all legacy inline attributes progressively.
- [ ] Bump any remaining sub-12px to semantic minimum.

## Audit commands

- `npm test`
- `npm run lint`
- Playwright script: widths 320..768, assert `body.scrollWidth === innerWidth`.
- `impeccable detect --json index.html css/styles.css`
