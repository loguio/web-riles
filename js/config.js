/**
 * ============================================================================
 * CONFIGURATION ANALYTICS EXTERNES & WAITLIST (LANDING-RILES)
 * ============================================================================
 * Colle simplement tes identifiants gratuits ci-dessous.
 * Tant qu'un champ est vide (""), l'outil correspondant est ignoré sans erreur
 * et les événements s'affichent dans la console de debug (F12).
 *
 * NOTE NETLIFY : Le formulaire HTML possède déjà `data-netlify="true"`.
 * Dès que tu déploies ce dossier sur Netlify, toutes les inscriptions (emails,
 * objectifs, concurrent utilisé, angle marketing, intention d'achat -50%)
 * sont automatiquement enregistrées dans ton onglet "Forms" sur Netlify !
 */
window.RILES_CONFIG = {
  // 1. Microsoft Clarity (100% Gratuit - Heatmaps & Enregistrement vidéo des sessions)
  // Crée un projet sur https://clarity.microsoft.com -> récupère l'ID (ex: "lz9x8abcd")
  CLARITY_PROJECT_ID: "",

  // 2. PostHog (Gratuit jusqu'à 1M events/mois - Entonnoir de clics & A/B test)
  // Crée un projet EU sur https://eu.posthog.com -> Project API Key (ex: "phc_...")
  POSTHOG_API_KEY: "",
  POSTHOG_HOST: "https://eu.i.posthog.com",

  // 3. Google Analytics 4 (Optionnel - ID de mesure ex: "G-XXXXXXXXXX")
  GA4_MEASUREMENT_ID: "",

  // 4. Webhook externe optionnel (Make, Zapier, Formspree, Loops, Brevo ou Supabase REST)
  // En complément de Netlify Forms qui fonctionne automatiquement sur Netlify.
  EXTERNAL_WEBHOOK_URL: "",

  // 5. Barre de prévisualisation des 3 angles marketing
  // S'affiche automatiquement en local (localhost) ou si ?preview=1 est dans l'URL
  ALLOW_ANGLE_SWITCHER_IN_PROD: false
};
