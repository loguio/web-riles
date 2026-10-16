# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience, confirmed with the owner: **débutants qui reprennent la course** (adultes souvent 30-50 ans, peu ou pas de plan structuré récent). Leur situation : reprise après une pause, semaine chargée, peur de se blesser ou d'abandonner dès qu'un imprévu tombe. Leur job : tenir une routine de course réaliste et progressive avec un plan qui ne les culpabilise pas quand la vie déborde.

Audiences secondaires déjà présentes dans le repo, non re-confirmées : coureurs loisir/exigeants préparant 10 km, semi, marathon ou trail.

## Product Purpose

Riles est un coach running qui adapte la semaine d'entraînement à la vraie vie de l'athlète. Quand un imprévu arrive (boulot tard, nuit courte, douleur, jour indisponible), le produit recalcule la semaine entière au lieu de casser le plan. Succès = un plan que le débutant continue réellement, séance après séance.

## Positioning

Le mecanisme différenciant est le **recalcul de semaine en direct** : l'athlète décrit son imprévu, l'IA rééquilibre le reste de la semaine en préservant le stimulus utile. Un plan PDF statique ou une montre ne fait pas cela.

## Operating Context

- L'athlète s'entraîne seul, dehors ou sur tapis, avec un téléphone.
- Sources de données réelles : Strava, Garmin, Apple Santé. COROS / Polar / Suunto sont annoncés roadmap H2 2026, pas disponibles.
- La landing collecte les emails via Netlify Forms (`riles-beta-waitlist`, `riles-founder-intent`) et mesure l'intérêt via un simulateur d'imprévu.
- Le tunnel de consentement (cookies, RGPD, timestamp) est un prérequis produit, pas une option marketing.
- L'app réelle est Expo / React Native ; la landing est un site statique autonome déployé sur Netlify.

## Capabilities and Constraints

- Simulateur interactif d'imprévu (20 s, sans compte) : point de preuve central de la landing.
- Trois accroches marketing A/B testables via `?angle=guilt|injury|garmin` et `?preview=1`.
- Contrat technique implémenté dans le code (à préserver par défaut) : identifiants DOM du simulateur, de la modale et du bandeau cookies ; noms et ordre des champs des deux formulaires Netlify ; case `name="consent" required` et horodatage ; ordre des directives CSP ; analytics chargés uniquement après consentement.
- Stack existante : HTML/CSS/JS statique, polices auto-hébergées, GSAP auto-hébergé, Netlify (forms + CSP). Pas de framework à introduire sans demande explicite.
- Non décidé : toute nouvelle promesse produit ou chiffre non vérifié.

## Brand Commitments

- Nom : Riles. Orange d'application **#FF5722** conservé comme accent de marque.
- Typographie : Archivo (display/texte) + JetBrains Mono (données), auto-hébergées.
- Contrainte explicitement confirmée par le propriétaire : **honnêteté produit**. Aucune statistique inventée, aucune fausse rareté, aucun connecteur surestimé, aucun faux compte à rebours. Ce qui n'est pas vérifié est présenté comme roadmap ou hypothèse.

## Evidence on Hand

- Maquettes réelles de l'app dans `assets/maquettes/` (accueil, calendrier, onboarding, profil).
- Un simulateur fonctionnel avec scénarios réels dans `js/app.js`.
- Preuves produit réelles : modèle de charge Banister, indicateurs ATL/CTL/TSB, règle des +10 %, allures calculées sur séances récentes et FC.
- Absent et à ne pas fabriquer : nombre d'utilisateurs, positions de file d'attente, avis clients, prix définitifs (49 €/an est un tarif cible indicatif, 99 €/an un ancrage).
- Documentation produit plus large dans le monorepo parent (`/home/ubuntu/workspace/riles`) : cahier des charges, roadmap, playbook marketing.

## Product Principles

1. La vraie vie d'abord : un plan qui s'adapte au lieu d'un plan qu'on abandonne.
2. Zéro culpabilité : aucune croix rouge, aucune injonction moralisatrice.
3. Honnêteté radicale : aucune preuve inventée, chaque promesse adossée à une capacité réelle.
4. Le débutant doit comprendre et oser : langage simple, parcours sans friction, une action principale par écran.
5. La preuve avant le discours : montrer le recalcul plutôt que l'affirmer.

## Accessibility & Inclusion

Le propriétaire a exigé WCAG 2.2 AA sur la landing, vérifié par audit interne (contraste, reflow 320 px, cibles tactiles, lecteurs d'écran). Le niveau AA reste la barre de référence pour tout travail futur sur cette surface.
