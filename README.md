# Riles — Landing page (`web-riles`)

[![CI](https://github.com/loguio/web-riles/actions/workflows/ci.yml/badge.svg)](https://github.com/loguio/web-riles/actions/workflows/ci.yml)

Landing page de pré-lancement de **Riles**, le coach running qui adapte ton plan
à ta vraie vie. Site **statique** (HTML / CSS / JS, sans bundler) déployé sur
Netlify : simulateur d'imprévu interactif, capture de la liste bêta, test A/B
d'accroches et analytics externes.

**Aperçu :** <https://web-riles.netlify.app/> — domaine de production prévu :
`riles.run`.

## Contenu de la page

- **Simulateur « imprévu » en 20 s** — choisis une prépa (10 km, semi, marathon,
  trail) et un imprévu (30 min ce soir, nuit de 5 h, mollet tendu, pas de jeudi) :
  la semaine se recalcule en direct.
- **Test A/B multi-angles** via l'URL : `?angle=guilt`, `?angle=injury`,
  `?angle=garmin` (aperçu avec `?preview=1`).
- **Tunnel « fake door » en 2 temps** — capture e-mail bêta (`riles-beta-waitlist`)
  puis intention d'achat fondateur (`riles-founder-intent`), via Netlify Forms.
- **Section Running Clubs** — présentation de la communauté (sorties de groupe,
  défis mensuels).
- **Analytics consentis** — PostHog, Microsoft Clarity, GA4.

## Structure

```text
index.html               # page principale
confidentialite.html     # politique de confidentialité
mentions-legales.html    # mentions légales
css/styles.css           # styles (tokens, responsive)
js/app.js                # simulateur, A/B, tracking, formulaires
assets/                  # images, polices, logo, maquettes
netlify.toml             # redirects, en-têtes de sécurité, cache
test/site.test.mjs       # tests du site (node --test)
```

## Démarrage

```bash
npm install
npm start        # sert le site sur http://localhost:3030
```

## Scripts

| Script                            | Rôle                              |
| :-------------------------------- | :-------------------------------- |
| `npm start` / `npm run dev`       | Sert le site en local (port 3030) |
| `npm run lint`                    | ESLint (`js/`)                    |
| `npm run format` / `format:check` | Prettier                          |
| `npm test`                        | Tests du site (`node --test`)     |
| `npm run ci`                      | lint + format:check + test        |

## Déploiement

Netlify, publication depuis la racine (`publish = "."`), sans étape de build.
`netlify.toml` définit les en-têtes de sécurité (CSP, `X-Frame-Options`,
`nosniff`…), le cache immuable des assets et le blocage des fichiers de
configuration.

## Liens

- Méta-dépôt : <https://github.com/loguio/riles>
- Application mobile : <https://github.com/loguio/front-riles>
- API : <https://github.com/loguio/back-riles>
