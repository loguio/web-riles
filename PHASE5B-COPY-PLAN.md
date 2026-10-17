# PHASE5B-COPY-PLAN.md

> **STATUS: DRAFT — PENDING PAYWALL TERMS.** Nothing in this document is final.
> No live marketing copy has been changed. This is a location inventory and a set of
> **proposed** variants only. Do not apply any proposal until the Phase 5B paywall
> terms (BASIC vs PRO scope, prices, trial length, founder-offer grandfathering) are
> finalized and this doc is un-drafted.
>
> Task: Phase 5B iteration 0 — **L1-prep**. Owner: landing-riles team (Lead).
> Repo: `landing-riles`. Branch: `feat/phase5b-landing`. Base: `master` @ `ef44764`.

## 1. Model this plan targets

The site must eventually reflect a **BASIC vs PRO + 14-day free trial** model:

- **BASIC** — free tier (current public promise, quoted verbatim: "Accès bêta gratuit
  pour les membres fondateurs" — `index.html:104` — and "Sans CB, sans engagement" —
  `index.html:886`).
- **PRO** — paid subscription with a **14-day free trial** (currently advertised as
  a "-50 % à vie / 49 €/an instead of 99 €/an (indicatif)" founder offer).
- Founder/beta offer must be re-expressed against the new BASIC/PRO split and must
  state what the 14-day trial means for founders.

Every price and percentage below is **illustrative** and **gated** on final terms.

## 2. Inventory — every pricing / founder-offer / plan location

Line numbers are against the current `feat/phase5b-landing` branch tip (post-L4),
re-anchored in L4. Each row also names a **stable anchor** (section `id` / class) so a
future line shift cannot silently mis-resolve it. L2 inserted the Clubs section
**before** the founder band, so relative to `master` @ `ef44764` the `index.html`
founder-band / modal rows shifted by roughly **+106** and `js/app.js` rows by **+39**
to **+40**; the numbers below are the verified current tip values, not derived by
adding a single offset (see §4).

| # | Location (file:line @ branch tip) + stable anchor | Current copy (verbatim) | Proposed variant (DRAFT, BASIC/PRO + 14-day trial) | Gated on pricing terms? |
|---|---|---|---|---|
| 1 | `index.html:100-105` — JSON-LD `"offers"` | `"price": "0"` … `"description": "Accès bêta gratuit pour les membres fondateurs"` | Keep `price: "0"` for the BASIC tier; add a second `Offer` for PRO with `price` + `priceSpecification` for the 14-day trial (or `"description": "PRO, essai gratuit 14 jours, puis <PRIX>"`). | **YES** — needs final PRO price + trial→paid wording. |
| 2 | `index.html:457` — hero `.trust-item` "Pas de CB pour tester le simulateur" | `Pas de CB pour tester le simulateur` | Simulator-scoped card copy, not plan copy. The simulator is a free standalone tool on both sides of the paywall, so no BASIC/PRO variant is needed — keep as-is and only revisit if the simulator becomes a PRO-gated feature. Listed here for completeness (was missing from the first pass). | **NO** — independent of paywall terms. |
| 3 | `index.html:980` — `#beta.founder-section` `p.sub` | `Tarif préférentiel pour les premiers inscrits. Sans CB.` | `Tarif fondateur préférentiel pour les premiers inscrits. Sans CB pendant la bêta.` (confirm "sans CB" still true during beta). | **YES** — whether beta stays no-card. |
| 4 | `index.html:992` — `#beta .pill` (3rd pill) | `Sans CB, sans engagement` | Keep for BASIC/beta; add PRO variant: `PRO : essai 14 jours, sans engagement, résiliable en un clic`. | **YES** — trial cancellation terms. |
| 5 | `index.html:1009` — `#beta p.footnote` | `Fonctionnalités Pro et COROS / Polar / Suunto en H2 2026.` | `Fonctionnalités PRO et COROS / Polar / Suunto en H2 2026.` (align casing with BASIC/PRO naming) + define which features are BASIC vs PRO. | **PARTIAL** — naming + feature split. |
| 6 | `index.html:1018` — `#beta .founder-offer-copy` | `Tarif indicatif : 49 €/an prévu au lieu de 99 €/an, à valider au lancement.` | Re-express as PRO discount: `Offre fondateur : -50 % à vie sur l'abonnement PRO (tarif indicatif, à valider au lancement). Essai 14 jours inclus.` | **YES** — discount %, grandfathering, trial overlap. |
| 7 | `index.html:1020-1022` — `#beta .founder-price` | `<s>99 €/an</s>49 €/an` + `(indicatif)` | `<s>99 €/an</s>49 €/an (indicatif)` retained, but only valid if 49/99 are the confirmed PRO prices. Add "PRO" label. | **YES** — final PRO price + strike anchor. |
| 8 | `index.html:1024` — `#beta .founder-offer-note` | `Pas de CB aujourd'hui.` | `Pas de CB aujourd'hui. Essai PRO 14 jours au lancement, sans engagement.` | **YES** — trial + card policy. |
| 9 | `index.html:1287,1291` — `#waitlist-modal .form-trust-footer` spans | `Annulation en un clic` (1287) + `Zéro CB requise` (1291) | Card-policy **and** cancellation copy in the same trust-footer block, both missed in the first pass. Keep for BASIC/beta; the PRO variant must state when the card is collected and that the 14-day trial cancels in one click: `Zéro CB requise à l'inscription — carte demandée seulement au lancement de l'essai PRO de 14 jours. Résiliable en un clic.` (or split: BASIC `Zéro CB` + PRO `essai 14 jours, carte à la fin de l'essai, annulation en un clic`). | **YES** — beta no-card policy + trial cancellation terms. |
| 10 | `index.html:1301` — `#modal-step-3 .founder-spots` | `Réservé aux inscrits de la bêta` | Keep, but qualify as `Réservé aux inscrits de la bêta (offre fondateur PRO)`. | **PARTIAL** — offer naming. |
| 11 | `index.html:1302` — `#modal-step-3 .founder-offer-title` | `Bloquer -50 % à vie sur l'abonnement Pro` | `Bloquer -50 % à vie sur l'abonnement PRO` (casing) — and confirm "-50 % à vie" survives the BASIC/PRO split. | **PARTIAL** — grandfathering is **YES**; the `Pro`→`PRO` casing sub-part is safe now (see §3). |
| 12 | `index.html:1303-1305` — `#modal-step-3 .founder-price` | `<s>99 €/an</s>49 €/an` + `(indicatif)` | Same as #7; must match PRO pricing exactly. | **YES** — final PRO price. |
| 13 | `index.html:1307-1309` — `#modal-step-3 .founder-offer-note` | `Tarif membre fondateur prévu, validé au lancement. Pas de CB aujourd'hui.` | `Tarif membre fondateur PRO prévu, validé au lancement. Pas de CB aujourd'hui.` | **YES** — final terms. |
| 14 | `index.html:1310-1312` — `#claim-founder-btn` | `Verrouiller -50 %` | `Verrouiller l'offre fondateur PRO` (or keep `-50 %` if grandfathered). | **YES** — whether -50 % is locked. |
| 15 | `index.html:1315-1342` — `#modal-step-3 .share-box` | `Fais monter ton dossard dans la file` / `Partage le lien pour informer tes proches : quand quelqu'un teste, tu gagnes 50 places pour la prochaine vague.` | Plan-adjacent, not price copy. Proposed: keep mechanic, but avoid implying a paid "place". Optionally tie reward to PRO: `… tu gagnes 50 places prioritaires pour la prochaine vague.` | **NO** (but review if reward changes). |
| 16 | `index.html:1350-1355` — `form[name="riles-founder-intent"]` | hidden fields: `email`, `angle`, `utm_source`, `founder_offer` | Add/rename field to capture plan intent, e.g. `plan_intent` with `BASIC` / `PRO_TRIAL_14D`. Keep `founder_offer` for back-compat. | **PARTIAL** — analytics field names. |
| 17 | `js/app.js:1467-1474` — `handleFounderOfferClaim` → `trackEvent` | `trackEvent('founder_offer_50_claimed', { email, price_tested: '49_eur_year' })` | Keep event name for continuity; add `plan: 'PRO'` and `trial_days: 14`; consider a new `founder_offer_claimed` name. | **PARTIAL** — analytics taxonomy. |
| 18 | `js/app.js:1478-1484` — `handleFounderOfferClaim` Netlify payload | `founder_offer: 'YES_49_EUR_YEAR'` | Add `plan: 'PRO'` / `trial: '14D'`; only change the `YES_49_EUR_YEAR` literal if 49 €/an is confirmed. | **YES** — final price literal. |
| 19 | `js/app.js:1496-1497` — `handleFounderOfferClaim` locked-button copy | `Tarif fondateur -50 % verrouillé` | `Offre fondateur PRO verrouillée` (or keep `-50 %` if grandfathered). | **YES** — grandfathering. |
| 20 | `js/app.js:1716-1719` — `#claim-founder-btn` click wiring comment | `// Bouton d'intention d'achat Membre Fondateur -50%` | Comment only: `// Bouton d'intention d'achat — offre fondateur PRO (-50 %)`. | **NO** (code comment). |
| 21 | `PRODUCT.md:50` — product truth note | `… prix définitifs (49 €/an est un tarif cible indicatif, 99 €/an un ancrage).` | Update once terms land to name BASIC/PRO + trial explicitly. Doc, not live copy. | **YES** — final terms. |

## 3. Gating summary

**Blocked on final paywall terms (do not touch yet):** #1, #3, #4, #6, #7, #8, #9,
#11, #12, #13, #14, #18, #19, #21. These all hard-code a price, a percentage, a
trial window, or a card policy that is not yet final. #3 and #11 are blocked only
for their gated core; each also has a safe naming sub-part (below).

**Safe to align on naming now (still DRAFT until applied):** #5 (PRO casing),
#11 (PRO casing), #20 (comment).

**Naming-only sub-part of an otherwise-blocked row (safe to apply now):** #3 only —
it renames `Tarif préférentiel` → `Tarif fondateur` (no `PRO` token), which is
separable from the "sans CB during beta" question that gates the row.

**Correction — no safe-now sub-part in #4 / #8.** An earlier draft claimed #4 and
#8 "introduce/standardize the `PRO` token" as a separable naming change. That is
factually wrong: neither anchor contains a `Pro`/`PRO` token today — `index.html:992`
is `Sans CB, sans engagement` and `index.html:1024` is `Pas de CB aujourd'hui.`. The
`PRO` token appears **only** inside the gated trial sentences of the proposed
variants (`PRO : essai 14 jours…`), so it is inseparable from the trial copy. #4 and
#8 stay fully blocked; do not touch them before terms land.

Everything else is **PARTIAL** — needs the terms doc but is low-risk.

## 4. Line-number mapping vs the task brief and vs L2

The brief cited `index.html` ~867-876 (49/99), ~1151-1162 (founder -50 % /
`claim-founder-btn`), ~1167-1186 (referral share box), and `js/app.js` ~1413-1435
(`founder_offer_50_claimed`).

L2 (`4b3a8f6`) then inserted the Clubs section **before** the founder band, so every
founder-band / modal row drifted. L4 also removed one now-unused `data-clubs-cta`
attribute line, shifting the founder band back by 1. The drift is therefore **not
uniform**, so re-anchoring by anchor (not by a single offset) is required:

- `index.html`, everything **after** the insertion point (~line 872): **+106 lines**
  vs `master`. Rows **before** it (`index.html:100-105` JSON-LD, `index.html:457` hero
  trust item) are unchanged.
- `js/app.js`, rows inside `handleFounderOfferClaim` (early file region): **+39 lines**
  vs `master` (L2's clubs-tracking block plus L4's fallback guard).
- `js/app.js`, the late wiring rows (`#claim-founder-btn` click binding): **+40 lines**
  vs `master`.

Corrected mapping against the current branch tip:

- 49/99 pricing → `index.html:1017-1024` (brief's 867-876; `#beta .founder-offer-copy`
  / `.founder-price` / `.founder-offer-note`).
- founder -50 % / `claim-founder-btn` → `index.html:1300-1312` (brief's 1151-1162;
  `#modal-step-3`).
- referral share box → `index.html:1315-1342` (brief's 1167-1186; `#modal-step-3 .share-box`).
- `founder_offer_50_claimed` handler → `js/app.js:1467-1501` (brief's 1413-1435).

The drift is line-number-only (the brief's ranges came from an older revision); all
anchors are present and accounted for. §2 re-anchors every row to the branch tip.

## 5. Next steps (L1, after terms land)

1. Freeze paywall terms (BASIC scope, PRO price, 14-day trial, founder grandfathering).
2. Un-draft this file; resolve every **YES** row.
3. Apply copy in a separate PR (this branch changes **no** live copy).
4. Update JSON-LD + Netlify ghost form + analytics taxonomy together.
