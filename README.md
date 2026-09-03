# Lucie Linhartová — landing page

Jednostránkový web (Astro + Tailwind CSS v4) pro certifikovanou transformační
koučku Lucii Linhartovou. Cíl stránky: přivést návštěvníka z Meta reklam
k rezervaci úvodního sezení zdarma přes vložený Calendly kalendář.

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
| `META_PIXEL_ID` | ID Meta Pixelu z Events Manageru. Pixel se načte v [`src/layouts/Layout.astro`](src/layouts/Layout.astro), ale skutečně se spustí až po odsouhlasení cookies (viz [`src/components/CookieLista.astro`](src/components/CookieLista.astro)). Událost `Lead` se odesílá po úspěšné rezervaci přes Calendly ([`src/components/FinalniCta.astro`](src/components/FinalniCta.astro)). |
| `CALENDLY_URL` | Už vyplněné — rezervační kalendář vložený přímo do sekce `#kontakt` jako inline widget. |
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

- Sekce `#kontakt` obsahuje Calendly inline widget jako hlavní způsob rezervace,
  pod ním je záložní odkaz na e-mail pro ty, kdo si nevyberou termín.
- Cookie lišta blokuje načtení Meta Pixelu, dokud uživatel neklikne „Přijmout".
- Všechna CTA tlačítka vedou na `#kontakt` (nebo na `REZERVACNI_URL`, pokud je vyplněná).
