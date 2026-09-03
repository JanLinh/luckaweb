// ============================================================
// KONFIGURACE — doplň skutečné hodnoty před nasazením na produkci
// ============================================================

// Endpoint kontaktního formuláře (Formspree nebo Web3Forms).
// Vytvoř formulář na https://formspree.io (cíl: coaching@luckalinhartova.cz)
// a vlož sem vygenerovaný endpoint, např. "https://formspree.io/f/xyzabcde"
export const FORMULAR_ENDPOINT = "";

// Meta Pixel ID — najdeš v Events Manageru na business.facebook.com
export const META_PIXEL_ID = "";

// Rezervační URL (externí, např. přímý odkaz na Calendly). Pokud je vyplněná,
// všechna CTA tlačítka na webu na ni přesměrují místo na kontaktní formulář.
// Necháváme prázdné — Calendly je zakomponované přímo do stránky, viz CALENDLY_URL níže.
export const REZERVACNI_URL = "";

// Calendly rezervační kalendář vložený přímo do sekce #kontakt (inline widget).
export const CALENDLY_URL = "https://calendly.com/coaching-luckalinhartova/30min";

export const TELEFON = "+420 777 702 219";
export const EMAIL = "coaching@luckalinhartova.cz";
export const INSTAGRAM_URL = "";
export const FACEBOOK_URL = "";

// Cíl všech CTA tlačítek — pokud je REZERVACNI_URL vyplněné, použije se ono,
// jinak kotva na kontaktní formulář.
export const CTA_HREF = REZERVACNI_URL || "#kontakt";
