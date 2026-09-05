# HEROY Digital Solutions — Backend

Express + MongoDB API powering the HEROY Digital Solutions website: contact form
submissions, consultation bookings, the blog CMS, and the AI chat assistant.

## Stack

- Node.js + Express
- MongoDB (Mongoose)
- Nodemailer (Gmail SMTP) for email notifications
- Anthropic API (Claude) for the AI chat assistant
- express-validator for request validation
- express-rate-limit for abuse protection
- helmet for security headers

## Setup

```bash
npm install
cp .env.example .env
# fill in .env with real values, see below
npm run dev
```

Server runs on `http://localhost:5001` by default (see `PORT` in `.env`).

## Environment variables

See `.env.example` for the full list. Required:

| Variable                                                  | Purpose                                                                                                                                                                                                      |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `MONGODB_URI`                                             | MongoDB Atlas connection string                                                                                                                                                                              |
| `ANTHROPIC_API_KEY`                                       | Powers the AI chat assistant                                                                                                                                                                                 |
| `EMAIL_HOST` / `EMAIL_PORT` / `EMAIL_USER` / `EMAIL_PASS` | SMTP credentials for lead notification emails                                                                                                                                                                |
| `EMAIL_FROM` / `EMAIL_TO`                                 | Sender/recipient for notification emails                                                                                                                                                                     |
| `ADMIN_API_KEY`                                           | Required header (`x-admin-key`) to access admin-only endpoints — contacts, consultations, and the entire blog CMS. Generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `FRONTEND_URL`                                            | Used for CORS — must match the frontend's real origin in production                                                                                                                                          |

## API Endpoints

### Public

- `POST /api/contact` — Submit contact form (rate limited: 5/hour per IP)
- `POST /api/consultation` — Book a free consultation (rate limited: 5/hour per IP)
- `POST /api/chat` — Send a message to the AI assistant (rate limited: 20/min per IP)
- `GET /api/chat/history/:sessionId` — Retrieve a chat session's history
- `GET /api/blog` — List published blog posts (paginated, filterable by `?category=`)
- `GET /api/blog/:slug` — Get a single published post by slug
- `GET /api/health` — Health check

### Admin (requires `x-admin-key` header matching `ADMIN_API_KEY`)

- `GET /api/contact` — List all contact submissions (paginated, filterable by `?status=`)
- `PATCH /api/contact/:id/status` — Update a submission's status
- `GET /api/consultation` — List all consultation requests (paginated, filterable by `?status=`)
- `PATCH /api/consultation/:id/status` — Update a consultation's status
- `GET /api/blog/admin/all` — List **all** posts including drafts (paginated, filterable by `?status=`)
- `GET /api/blog/admin/:id` — Get a single post by ID (for editing, includes drafts)
- `POST /api/blog/admin` — Create a new post (draft or published)
- `PUT /api/blog/admin/:id` — Update a post
- `DELETE /api/blog/admin/:id` — Permanently delete a post

**Route ordering note (blogRoutes.js):** the `/admin/*` routes are registered before the public `/:slug` catch-all on purpose. Express matches routes in registration order, and `/:slug` would otherwise greedily match `/admin/all` as `slug="admin"`, silently bypassing `adminAuth` entirely. If you ever add new routes to `blogRoutes.js`, keep any new specific paths above the `/:slug` wildcard.

## Blog CMS

Blog posts are managed entirely through the admin editor at `/admin/blog` on the
frontend (no code changes needed to publish content). Each post has:

- `title`, `slug` (auto-generated from title, must be unique, lowercase-hyphenated)
- `excerpt` (used in listings and SEO meta description)
- `category`, `tags[]`
- `author`, `authorRole`
- `sections[]` — an array of `{ heading, body }` blocks that make up the article body
- `status` — `draft` or `published` (only `published` posts are publicly visible)
- `readTime` — auto-computed from total word count across all sections (~200 wpm)

## Project structure
## Deployment notes

- `app.set("trust proxy", 1)` is already configured — required for accurate
  rate limiting and IP logging behind Railway/Render/Heroku-style reverse proxies.
- CORS `methods` includes `PUT` and `DELETE` — required for the blog admin
  editor's edit/delete actions. If you add more admin write operations, make
  sure their HTTP method is listed here too, or the browser preflight will fail.
- Rotate `ANTHROPIC_API_KEY` and `EMAIL_PASS` immediately if this repository or
  its `.env` file was ever shared outside your team.
- The frontend calls this API via `NEXT_PUBLIC_API_URL` — make sure `FRONTEND_URL`
  here matches the frontend's real deployed origin, or CORS will block requests.
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
# fill in NEXT_PUBLIC_API_URL and NEXT_PUBLIC_SITE_URL — see below
npm run dev
```

Runs on `http://localhost:3000` by default.

**Requires the backend running separately** (see `heroy-backend/README.md`) —
the contact form, consultation booking, blog (listing, posts, and admin CMS),
and AI chat widget all call it.

## Environment variables

See `.env.example`. Two variables matter:

| Variable               | Purpose                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_API_URL`  | Base URL of the backend API (e.g. `http://localhost:5001` in dev)                               |
| `NEXT_PUBLIC_SITE_URL` | Public URL this site is deployed at — used for the sitemap, robots.txt, and Open Graph metadata |

No Anthropic API key is needed on the frontend — chat is handled entirely by
the backend.

## Blog CMS

Blog content is **not** hardcoded — it's fetched live from the backend at
`/api/blog`. To manage posts:

1. Go to `/admin/blog` and sign in with your `ADMIN_API_KEY` (same key used
   for the main `/admin` dashboard — sessions are shared).
2. Create, edit, or delete posts. Slugs auto-generate from the title but can
   be edited manually.
3. Posts saved as `draft` are only visible in the admin list — set status to
   `published` for them to appear on `/blog` and be included in the sitemap.

`/blog` and `/blog/[slug]` render dynamically (`cache: "no-store"`) rather
than being statically generated at build time, since the backend is a
separate service that may not be reachable during a frontend build. This
means blog content updates appear immediately without a redeploy.

## Project structure
## Known content placeholders

The following are intentionally illustrative/placeholder and should be
replaced with real data as it becomes available — each is clearly labeled
in the UI as such:

- `/portfolio` and the homepage portfolio preview — concept projects, not named client work
- `/case-studies` — illustrative examples, not verified client results
- `/testimonials` — illustrative example reviews, not verified quotes
- Founder name in `components/sections/About.tsx` — needs confirmation
- `/blog` — no longer hardcoded placeholder content; it's a real empty CMS
  until posts are written via `/admin/blog`. The page correctly shows
  "No posts published yet" rather than fake articles.

## Deployment notes

- Run `npm run build` locally before deploying to catch type errors early.
- `/admin` and `/admin/blog` are excluded from the sitemap and disallowed in
  `robots.ts` — verify this still holds if you restructure admin routes.
- Set `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_SITE_URL` to their real production
  values in your hosting provider's environment variables, not `.env.local`.
