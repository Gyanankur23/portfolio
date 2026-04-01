# Gyanankur Baruah — Portfolio

A dynamic Next.js 14 portfolio with dark/light mode, animated canvas hero, filterable project grid, and full data from LinkedIn, GitHub, and resume.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (custom design system)
- **Framer Motion / CSS animations**
- **TypeScript**
- **Space Grotesk + DM Sans + JetBrains Mono** fonts

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npx vercel --prod
```

Or connect the GitHub repo to Vercel — zero config needed.

## Customization

All data lives in `lib/data.ts`. Update:
- `personal` — name, bio, links, stats
- `experience` — roles, bullets, badges
- `projects` — name, tech, github, live links
- `skills` — categories and skill lists
- `certifications` — name, issuer, year
- `achievements` — award strings
- `volunteering` — org, role, period, desc

## Profile Photo

Replace the `GB` initials in `components/About.tsx` with:

```tsx
<Image src="/profile.jpg" alt="Gyanankur Baruah" fill className="object-cover" />
```

And drop your photo in `public/profile.jpg`.

## Project Screenshots

Add images to `public/projects/` and reference them in `lib/data.ts` with an `image` field on each project.

## Links

- GitHub: https://github.com/Gyanankur23
- LinkedIn: https://www.linkedin.com/in/gyanankur-baruah-797205338
- Email: gyanankur9@gmail.com
