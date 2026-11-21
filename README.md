# simulatorsenteret.no – Astro

Statisk nettsted for Medisinsk SimulatorSenter (Astro + Tailwind CSS).

## Lokalt
```
yarn install
yarn dev        # http://localhost:4321
yarn build      # bygger til ./dist
```

## Cloudflare Pages
- Koble Git-repoet i Cloudflare Dashboard → Workers & Pages → Create → Pages.
- Framework preset: **Astro**, build command: `yarn build`, output directory: `dist`, root directory: `frontend`.
- Legg til eget domene `www.simulatorsenteret.no` under *Custom domains*.
- `public/_redirects` sender gamle WordPress-adresser (f.eks. `/om-oss-2/`) til nye sider.

## Innhold
- Kontaktinfo, ansatte, kurs og publikasjoner: `src/data/site.ts`
- Kontaktskjema: sett `formEndpoint` i `src/data/site.ts` (f.eks. Formspree) – tom verdi bruker mailto.
- Bilder: `public/images/`
