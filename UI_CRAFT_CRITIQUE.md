# UI Craft Critique (LL judge)

Independent review of component craft against real, documented design systems. This judge does not score product strategy or copy; it scores whether the interface components look and behave like a professional, system-driven UI.

Pass threshold: **19 / 20**. Below 19 is not shippable.

References the judge should apply:

- Material Design 3 buttons and states (sizes, state layers, corner scale, icons).
- Apple HIG buttons (hierarchy, touch targets, focus/press feedback).
- shadcn/ui and Radix Themes button variants and focus rings.
- Refactoring UI (hierarchy, spacing, shadows, contrast).
- Tabler / Phosphor icon usage (one family, consistent stroke, optical alignment).

## Rubric (0-20)

1. **Button hierarchy (0-4)** — is there a clear primary / secondary / tertiary / destructive hierarchy, and is each level visually distinct without being noisy?
2. **Button geometry (0-3)** — consistent height, padding, radius, icon-to-label gap, optical centering, and alignment to the type scale.
3. **Button states (0-3)** — hover, pressed, focus-visible, disabled, and loading are all defined and perceptible; press feedback is immediate.
4. **Spacing and rhythm (0-3)** — 4/8-based spacing, consistent gaps, vertical rhythm, no cramped or arbitrary margins.
5. **Icon integration (0-3)** — one icon family, consistent stroke width, correct optical size, aligned baselines, no emoji.
6. **Surface and elevation (0-2)** — borders, shadows and surface fills are coherent; elevation is used to signal hierarchy, not decoration.
7. **Interaction affordance (0-2)** — it is obvious what is clickable, what is disabled, and what happens next.

## Output format

```
Score: X/20
Verdict: SHIP | DO NOT SHIP
Problems:
- [selector or component] what is wrong and why, with the reference rule
Passes if:
- [ ] concrete condition
```

The judge must cite exact selectors, computed values, or rendered measurements. No score above 18 without rendering the components.
