# HEROY Digital Solutions — Frontend

Next.js 15 marketing website for HEROY Digital Solutions, a full-service
digital transformation agency.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Three.js (interactive 3D scene on the 3D Experiences service page)
- Lucide React (icons)

## Setup

```bash
npm install
cp .env.example .env.local
# fill in NEXT_PUBLIC_API_URL — see below
npm run dev
```

Runs on `http://localhost:3000` by default.

**Requires the backend running separately** (see `heroy-backend/README.md`) —
the contact form, consultation booking, and AI chat widget all call it.

## Environment variables

See `.env.example`. Only one variable is required:

| Variable              | Purpose                                                           |
| --------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Base URL of the backend API (e.g. `http://localhost:5001` in dev) |

No Anthropic API key is needed on the frontend — chat is handled entirely by
the backend.

## Project structure

## Known content placeholders

The following are intentionally illustrative/placeholder and should be
replaced with real data as it becomes available — each is clearly labeled
in the UI as such:

- `/portfolio` and the homepage portfolio preview — concept projects, not named client work
- `/case-studies` — illustrative examples, not verified client results
- `/testimonials` — illustrative example reviews, not verified quotes
- Founder name in `components/sections/About.tsx` — needs confirmation

## Deployment notes

- Run `npm run build` locally before deploying to catch type errors early.
- `next.config.js` currently has no special image domain config since all
  images are served from `public/` — add `images.domains` if you switch to
  a remote CMS or image host later.
- Set `NEXT_PUBLIC_API_URL` to the real deployed backend URL in production
  (Vercel/hosting provider environment variables), not `.env.local`.
