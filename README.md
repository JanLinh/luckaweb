# Lucie Linhartová — landing page

Jednostránkový web (Astro + Tailwind CSS v4) pro certifikovanou transformační
koučku Lucii Linhartovou. Cíl stránky: přivést návštěvníka z Meta reklam
k rezervaci úvodního sezení zdarma.

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

`npm run build` vygeneruje statický web do `./dist/`. Ten stačí nasadit na
**Vercel** nebo **Netlify** (stačí propojit repo — build command `npm run build`,
output adresář `dist`, framework preset "Astro"). Žádný server ani databáze
nejsou potřeba.

## Co je potřeba doplnit před spuštěním kampaní

Vše je centralizované v [`src/config.ts`](src/config.ts):

| Proměnná | Co doplnit |
| --- | --- |
| `FORMULAR_ENDPOINT` | Endpoint kontaktního formuláře. Založ formulář na [Formspree](https://formspree.io) (cíl e-mail `coaching@luckalinhartova.cz`) nebo [Web3Forms](https://web3forms.com) a vlož vygenerovaný endpoint/URL. Dokud je prázdný, formulář zobrazí varování a neodešle se. |
| `META_PIXEL_ID` | ID Meta Pixelu z Events Manageru. Pixel se načte v [`src/layouts/Layout.astro`](src/layouts/Layout.astro), ale skutečně se spustí až po odsouhlasení cookies (viz [`src/components/CookieLista.astro`](src/components/CookieLista.astro)). Událost `Lead` se odesílá po úspěšném odeslání kontaktního formuláře ([`src/components/FinalniCta.astro`](src/components/FinalniCta.astro)). |
| `REZERVACNI_URL` | Až bude hotový rezervační kalendář (např. Calendly), vlož sem jeho URL — všechna CTA tlačítka na webu na něj automaticky přesměrují místo na formulář. Do té doby zůstává formulář jako záložní cesta. |
| `INSTAGRAM_URL` / `FACEBOOK_URL` | Volitelné odkazy na sociální sítě v patičce. |
| `TELEFON` / `EMAIL` | Už vyplněné, uprav podle potřeby. |

## Fotky

Skutečné fotky zatím **nejsou** v projektu — do `public/images/` jsem
vygeneroval jednoduché barevné placeholdery (stejné rozměry, aby layout
seděl), aby web šel hned prohlédnout. Nahraď je reálnými fotkami se
**stejnými názvy souborů**:

| Soubor | Kde se použije | Doporučený formát |
| --- | --- | --- |
| `hero-portret.jpg` | Hero sekce (portrét na výšku, 4:5) | JPG/WebP |
| `o-mne.jpg` | Sekce „O mně" (čtvercový portrét) | JPG/WebP |
| `pribeh-priroda.jpg` | Sekce „Prošla jsem si tím taky" (lesní cesta) | JPG/WebP |
| `detail-1.jpg`, `detail-2.jpg` | Zatím nepoužité v layoutu — připravené pro budoucí mezisekce/detaily | JPG/WebP |
| `og-image.jpg` | Open Graph obrázek (1200×630) v `<head>` | JPG |

Fotky nech tonálně beze změny (jsou už barevně sladěné), ulož jako optimalizovaný
JPG nebo WebP. Placeholdery můžeš znovu vygenerovat příkazem
`python scripts/gen_placeholders.py`, pokud je potřeba layout znovu zkontrolovat
bez reálných fotek.

## Struktura projektu

```
src/
├── components/   # Hero, Bolest, Pribeh, Specializace, JakToProbiha,
│                 # Reference, OMne, Faq, FinalniCta, Paticka, StickyCta, CookieLista
├── layouts/
│   └── Layout.astro   # <head>, fonty, Meta Pixel, SEO, structured data
├── pages/
│   ├── index.astro
│   └── ochrana-osobnich-udaju.astro
└── config.ts     # všechny placeholdery/proměnné na jednom místě
public/
└── images/       # fotky (viz výše)
```

## Poznámky

- Formulář má honeypot pole proti spamu a validaci povinných polí na frontendu.
- Cookie lišta blokuje načtení Meta Pixelu, dokud uživatel neklikne „Přijmout".
- Všechna CTA tlačítka vedou na `#kontakt` (nebo na `REZERVACNI_URL`, pokud je vyplněná).
