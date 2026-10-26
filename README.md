# Harshad Shinde — Developer Portfolio

A modern, responsive dark developer portfolio built with Next.js, TypeScript, Tailwind CSS and Lucide icons.

## Included
- Responsive single-page portfolio
- Hero section with supplied profile photo
- Skills, projects, experience and research sections
- Downloadable resume using the supplied PDF
- GitHub, LinkedIn, email and phone links
- Mobile navigation
- Dark navy / electric blue / violet visual system
- Subtle grid, glow and glass-card effects

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Customize

Add or edit skills and projects in [`data/portfolio.ts`](data/portfolio.ts). Both sections use a responsive data-driven card grid, so adding entries does not require changing CSS or component markup.

Example project:

```ts
{
  title: "My Project",
  tag: "Web App",
  description: "A concise description of what it does.",
  stack: ["Next.js", "TypeScript"],
  icon: "code", // search, brain, layers, code, database, or globe
  href: "https://github.com/your-name/project",
  linkLabel: "View repository"
}
```

Styles remain in `app/globals.css`; page layout is in `components/Portfolio.tsx`.

Assets:
- `public/profile.jpg`
- `public/Harshad-Shinde-Resume.pdf`

## Deploy

The project is ready for Vercel. Import the GitHub repository and use the default Next.js build settings.

- `public/copyright-certificate.png` — Government of India copyright certificate shown in the Research section.
