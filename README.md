# Lucie Linhartová — landing page

Jednostránkový web (Astro + Tailwind CSS v4) pro certifikovanou transformační
koučku Lucii Linhartovou. Cíl stránky: přivést návštěvníka z Meta reklam
k rezervaci úvodního sezení zdarma přes odkaz na Calendly.

## Spuštění lokálně

```sh
npm install
npm run dev
```

Web poběží na `http://localhost:4321`.

## Build a nasazení

```sh
npm run build
npm run preview   # ověření produkčního buildu lokálně
```

`npm run build` vygeneruje statický web do `./dist/`. Web je nasazený na
**Vercel**, napojený na GitHub repo — každý push do `main` se automaticky
nasadí na produkci.

## Co je potřeba doplnit v `src/config.ts`

| Proměnná | Co doplnit |
| --- | --- |
| `META_PIXEL_ID` | ID Meta Pixelu z Events Manageru. Pixel se načte v [`src/layouts/Layout.astro`](src/layouts/Layout.astro), ale skutečně se spustí až po odsouhlasení cookies (viz [`src/components/CookieLista.astro`](src/components/CookieLista.astro)). |
| `CALENDLY_URL` | Už vyplněné — v sekci `#kontakt` je na ni odkaz přes CTA tlačítko „Rezervovat bezplatnou konzultaci" (otevírá se v novém tabu). |
| `REZERVACNI_URL` | Volitelné. Pokud by ses chtěl/a vrátit k tomu, že CTA tlačítka vedou rovnou na externí Calendly stránku místo na `#kontakt`, vlož sem tu URL. |
| `INSTAGRAM_URL` / `FACEBOOK_URL` | Volitelné odkazy na sociální sítě v patičce. |
| `TELEFON` / `EMAIL` | Kontaktní údaje v patičce a v sekci `#kontakt` (záložní cesta, když si návštěvník nevybere termín v kalendáři). |

## Fotky

Reálné fotky jsou v `src/assets/images/` a procházejí Astro image pipeline
(automatický WebP + responzivní srcset, viz komponenty `Hero`, `Pribeh`,
`OMne`, `Bolest`, `JakToProbiha`). `og-image.jpg` zůstává jako statický
soubor v `public/images/`, protože se na něj odkazuje přímo v `<head>`.

## Struktura projektu

```
src/
├── assets/images/   # reálné fotky (procházejí Astro image pipeline)
├── components/      # Hero, Bolest, Pribeh, Specializace, JakToProbiha,
│                     # Reference, OMne, Faq, FinalniCta, Paticka, StickyCta, CookieLista
├── layouts/
│   └── Layout.astro   # <head>, fonty, Meta Pixel, SEO, structured data
├── pages/
│   ├── index.astro
│   └── ochrana-osobnich-udaju.astro
└── config.ts     # všechny proměnné (Pixel, Calendly, kontakty) na jednom místě
public/
└── images/       # og-image.jpg (statický, mimo Astro pipeline)
```

## Poznámky

- Sekce `#kontakt` obsahuje CTA tlačítko na Calendly (otevírá se v novém tabu)
  jako hlavní způsob rezervace, pod ním je záložní odkaz na e-mail.
- Meta Pixel eviduje `PageView`; přímé sledování rezervace (`Lead`) přes
  postMessage z Calendly embedu odpadlo spolu s widgetem — pokud budeš chtít
  sledovat konverze z Calendly, řeš to přes Calendly webhook/Zapier nebo
  přesměrování na děkovací stránku s vlastním `Lead` eventem.
- Cookie lišta blokuje načtení Meta Pixelu, dokud uživatel neklikne „Přijmout".
- Všechna CTA tlačítka vedou na `#kontakt` (nebo na `REZERVACNI_URL`, pokud je vyplněná).
