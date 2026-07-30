// ============================================================
// KONFIGURACE — doplň skutečné hodnoty před nasazením na produkci
// ============================================================

// Endpoint kontaktního formuláře (Formspree nebo Web3Forms).
// Vytvoř formulář na https://formspree.io (cíl: lucka.linhartova@post.cz)
// a vlož sem vygenerovaný endpoint, např. "https://formspree.io/f/xyzabcde"
export const FORMULAR_ENDPOINT = "";

// Meta Pixel ID — najdeš v Events Manageru na business.facebook.com
export const META_PIXEL_ID = "";

// Rezervační URL (např. Calendly). Dokud je prázdné, všechna CTA
// vedou na kontaktní formulář (#kontakt).
export const REZERVACNI_URL = "";

export const TELEFON = "+420 777 702 219";
export const EMAIL = "lucka.linhartova@post.cz";
export const INSTAGRAM_URL = "";
export const FACEBOOK_URL = "";

// Cíl všech CTA tlačítek — pokud je REZERVACNI_URL vyplněné, použije se ono,
// jinak kotva na kontaktní formulář.
export const CTA_HREF = REZERVACNI_URL || "#kontakt";
