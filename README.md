# Data Portfolio — Lathan Tarmat

Portfolio professionnel bilingue présentant mes compétences et mes projets en Data Analytics, Data Engineering, Business Intelligence et Intelligence Artificielle.

## Fonctionnalités

- Interface responsive
- Versions française et anglaise
- Présentation des compétences techniques
- Pages détaillées pour les projets Data
- CV téléchargeable
- Liens vers GitHub, LinkedIn et les démonstrations
- Routage internationalisé avec `next-intl`

## Technologies

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- next-intl
- Lucide React
- Vercel

## Structure principale

```text
app/
├── [locale]/
│   ├── page.tsx
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── experiences/
│   └── contact/
├── components/
└── globals.css

i18n/
├── navigation.ts
├── request.ts
└── routing.ts

messages/
├── fr.json
└── en.json