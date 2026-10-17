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

- **BASIC** — free tier (current public promise: "bêta gratuite" / "sans CB").
- **PRO** — paid subscription with a **14-day free trial** (currently advertised as
  a "-50 % à vie / 49 €/an instead of 99 €/an (indicatif)" founder offer).
- Founder/beta offer must be re-expressed against the new BASIC/PRO split and must
  state what the 14-day trial means for founders.

Every price and percentage below is **illustrative** and **gated** on final terms.

## 2. Inventory — every pricing / founder-offer / plan location

Line numbers are against `master` @ `ef44764` (the branch base). The task brief cited
slightly different line ranges from an older revision; the anchors all resolve — see
the mapping note in §4.

| # | Location (file:line) | Current copy (verbatim) | Proposed variant (DRAFT, BASIC/PRO + 14-day trial) | Gated on pricing terms? |
|---|---|---|---|---|
| 1 | `index.html:100-105` (JSON-LD `offers`) | `"price": "0"` … `"description": "Accès bêta gratuit pour les membres fondateurs"` | Keep `price: "0"` for the BASIC tier; add a second `Offer` for PRO with `price` + `priceSpecification` for the 14-day trial (or `"description": "PRO, essai gratuit 14 jours, puis <PRIX>"`). | **YES** — needs final PRO price + trial→paid wording. |
| 2 | `index.html:874` (founder sub) | `Tarif préférentiel pour les premiers inscrits. Sans CB.` | `Tarif fondateur préférentiel pour les premiers inscrits. Sans CB pendant la bêta.` (confirm "sans CB" still true during beta). | **YES** — whether beta stays no-card. |
| 3 | `index.html:886` (pill) | `Sans CB, sans engagement` | Keep for BASIC/beta; add PRO variant: `PRO : essai 14 jours, sans engagement, résiliable en un clic`. | **YES** — trial cancellation terms. |
| 4 | `index.html:903` (footnote) | `Fonctionnalités Pro et COROS / Polar / Suunto en H2 2026.` | `Fonctionnalités PRO et COROS / Polar / Suunto en H2 2026.` (align casing with BASIC/PRO naming) + define which features are BASIC vs PRO. | **PARTIAL** — naming + feature split. |
| 5 | `index.html:912` (`founder-offer-copy`) | `Tarif indicatif : 49 €/an prévu au lieu de 99 €/an, à valider au lancement.` | Re-express as PRO discount: `Offre fondateur : -50 % à vie sur l'abonnement PRO (tarif indicatif, à valider au lancement). Essai 14 jours inclus.` | **YES** — discount %, grandfathering, trial overlap. |
| 6 | `index.html:914-916` (`founder-price`) | `<s>99 €/an</s>49 €/an` + `(indicatif)` | `<s>99 €/an</s>49 €/an (indicatif)` retained, but only valid if 49/99 are the confirmed PRO prices. Add "PRO" label. | **YES** — final PRO price + strike anchor. |
| 7 | `index.html:918` (`founder-offer-note`) | `Pas de CB aujourd'hui.` | `Pas de CB aujourd'hui. Essai PRO 14 jours au lancement, sans engagement.` | **YES** — trial + card policy. |
| 8 | `index.html:1195` (`founder-spots`) | `Réservé aux inscrits de la bêta` | Keep, but qualify as `Réservé aux inscrits de la bêta (offre fondateur PRO)`. | **PARTIAL** — offer naming. |
| 9 | `index.html:1196` (`founder-offer-title`) | `Bloquer -50 % à vie sur l'abonnement Pro` | `Bloquer -50 % à vie sur l'abonnement PRO` (casing) — and confirm "-50 % à vie" survives the BASIC/PRO split. | **YES** — grandfathering + casing. |
| 10 | `index.html:1197-1199` (modal `founder-price`) | `<s>99 €/an</s>49 €/an` + `(indicatif)` | Same as #6; must match PRO pricing exactly. | **YES** — final PRO price. |
| 11 | `index.html:1201-1203` (`founder-offer-note`) | `Tarif membre fondateur prévu, validé au lancement. Pas de CB aujourd'hui.` | `Tarif membre fondateur PRO prévu, validé au lancement. Pas de CB aujourd'hui.` | **YES** — final terms. |
| 12 | `index.html:1204-1206` (`#claim-founder-btn`) | `Verrouiller -50 %` | `Verrouiller l'offre fondateur PRO` (or keep `-50 %` if grandfathered). | **YES** — whether -50 % is locked. |
| 13 | `index.html:1209-1214` (referral `share-box`) | `Fais monter ton dossard dans la file` / `Partage le lien pour informer tes proches : quand quelqu'un teste, tu gagnes 50 places pour la prochaine vague.` | Plan-adjacent, not price copy. Proposed: keep mechanic, but avoid implying a paid "place". Optionally tie reward to PRO: `… tu gagnes 50 places prioritaires pour la prochaine vague.` | **NO** (but review if reward changes). |
| 14 | `index.html:1244-1249` (ghost form `riles-founder-intent`) | hidden fields: `email`, `angle`, `utm_source`, `founder_offer` | Add/rename field to capture plan intent, e.g. `plan_intent` with `BASIC` / `PRO_TRIAL_14D`. Keep `founder_offer` for back-compat. | **PARTIAL** — analytics field names. |
| 15 | `js/app.js:1428-1435` (`handleFounderOfferClaim`) | `trackEvent('founder_offer_50_claimed', { email, price_tested: '49_eur_year' })` | Keep event name for continuity; add `plan: 'PRO'` and `trial_days: 14`; consider a new `founder_offer_claimed` name. | **PARTIAL** — analytics taxonomy. |
| 16 | `js/app.js:1439-1445` (Netlify payload) | `founder_offer: 'YES_49_EUR_YEAR'` | Add `plan: 'PRO'` / `trial: '14D'`; only change the `YES_49_EUR_YEAR` literal if 49 €/an is confirmed. | **YES** — final price literal. |
| 17 | `js/app.js:1455-1460` (locked-button copy) | `Tarif fondateur -50 % verrouillé` | `Offre fondateur PRO verrouillée` (or keep `-50 %` if grandfathered). | **YES** — grandfathering. |
| 18 | `js/app.js:1676-1679` (wiring comment) | `// Bouton d'intention d'achat Membre Fondateur -50%` | Comment only: `// Bouton d'intention d'achat — offre fondateur PRO (-50 %)`. | **NO** (code comment). |
| 19 | `PRODUCT.md:50` (product truth note) | `… prix définitifs (49 €/an est un tarif cible indicatif, 99 €/an un ancrage).` | Update once terms land to name BASIC/PRO + trial explicitly. Doc, not live copy. | **YES** — final terms. |

## 3. Gating summary

**Blocked on final paywall terms (do not touch yet):** #1, #2, #3, #5, #6, #7, #9,
#10, #11, #12, #16, #17, #19. These all hard-code a price, a percentage, a trial
window, or a card policy that is not yet final.

**Safe to align on naming now (still DRAFT until applied):** #4 (PRO casing),
#18 (comment). Everything else is **PARTIAL** — needs the terms doc but is low-risk.

## 4. Line-number mapping vs the task brief

The brief cited `index.html` ~867-876 (49/99), ~1151-1162 (founder -50 % /
`claim-founder-btn`), ~1167-1186 (referral share box), and `js/app.js` ~1413-1435
(`founder_offer_50_claimed`). On the current base (`master` @ `ef44764`) these
resolve to:

- 49/99 pricing → `index.html:909-918` (brief's 867-876).
- founder -50 % / `claim-founder-btn` → `index.html:1193-1206` (brief's 1151-1162).
- referral share box → `index.html:1209-1236` (brief's 1167-1186).
- `founder_offer_50_claimed` handler → `js/app.js:1428-1462` (brief's 1413-1435).

The drift is line-number-only (the brief's ranges came from an older revision);
all anchors are present and accounted for.

## 5. Next steps (L1, after terms land)

1. Freeze paywall terms (BASIC scope, PRO price, 14-day trial, founder grandfathering).
2. Un-draft this file; resolve every **YES** row.
3. Apply copy in a separate PR (this branch changes **no** live copy).
4. Update JSON-LD + Netlify ghost form + analytics taxonomy together.
