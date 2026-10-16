# AI Slop Critique (LL judge)

Purpose: an independent LL critique that scores a surface only on how much it reads as generic AI-generated output ("slop"), not on functionality or WCAG conformance. Accessibility is judged separately; passing WCAG does not lower the slop score.

Pass threshold: **20 / 20 required to ship.** A single unresolved tell caps the score below 20. Judges must cite the exact selector, line, or copy string for every deduction.

## What "slop" means here

A tell is any choice a competent human designer would not have made for this specific brief, or a pattern whose only reason to exist is that language models default to it.

## Rubric (score 0-20)

### 1. Layout and composition (0-4)

- Centered hero over a gradient or mesh background.
- Three equal feature cards as a section's whole idea.
- Rounded card grids used for every section regardless of content.
- Perfectly symmetric, interchangeable section order.
- Full-width bands stacked with no editorial rhythm or asymmetry.
- Score 4 if the layout could only belong to this product and this content.

### 2. Typography and hierarchy (0-3)

- Default stack vibes (Inter, system sans) despite a stated brand type.
- Eyebrow label above nearly every section, all uppercase with wide tracking.
- Headline and body sizes that do not respond to the composition.
- Numbered section labels ("01", "02") as decoration.
- Score 3 if typography alone carries a clear point of view.

### 3. Color and surface (0-3)

- An accent used for every role until it signals nothing.
- Gradient glows, chromatic shadows, or glass surfaces as the only craft.
- Color chosen from the default AI palette families (indigo/violet, teal-on-navy).
- Inconsistent radius or token drift.
- Score 3 if palette and surfaces are disciplined and specific.

### 4. Imagery, icons, emoji (0-3)

- Emoji used as functional icons.
- Fake screenshots or div-drawn product imagery.
- Pills, badges, or labels overlaid on images without meaning.
- Decorative stock imagery that says nothing about the product.
- Score 3 if every image/icon earns its place and is real.

### 5. Copy and meaning (0-3)

- Inflated significance ("revolutionary", "the first", "effortlessly").
- Fake scarcity, invented metrics, unverifiable claims.
- Generic pattern copy that could move to another product unchanged.
- Em dashes and en dashes in visible copy.
- Score 3 if the copy could only be this product, honest and concrete.

### 6. Motion and state (0-2)

- Animation for show, not hierarchy, storytelling, or feedback.
- Infinite loops, floating blobs, gratuitous parallax.
- No reduced-motion handling.
- Score 2 if all motion is motivated and state changes are legible.

### 7. Distinctiveness (0-2)

- The overall result could be swapped with any other AI-built landing page with no loss.
- The page has no memorable visual or structural idea of its own.
- Score 2 if a designer could name the page's one strong idea from memory.

## Output format

```
Score: X/20
Verdict: SHIP | DO NOT SHIP
Tells:
- [selector or string] what is slop and why
Passes if:
- [ ] concrete condition
```

## Rules for the judge

- Read the actual source and, where possible, the rendered page.
- Do not reward accessibility, tests, or honest copy here unless they also remove a slop tell.
- Do not penalize a deliberate, brief-justified convention.
- Any score under 20 must be actionable: every deduction maps to a specific change.
