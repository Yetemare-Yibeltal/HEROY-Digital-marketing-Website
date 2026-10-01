# HEROY Backend

Express + MongoDB API backend for HEROY Digital Solutions. Handles the
contact form, consultation bookings, and newsletter subscriptions for
the frontend site.

## Setup

```bash
npm install
cp .env.example .env
# fill in the values in .env
npm run dev
```

The server starts on `PORT` (default `5001`) and will refuse to start
if `MONGODB_URI` or `FRONTEND_URL` are missing — check the console
output if it exits immediately.

## Environment variables

See `.env.example` for the full list with descriptions. At minimum you
need `MONGODB_URI`, `FRONTEND_URL`, and the `EMAIL_*` variables for
notification emails to send. Set `ADMIN_API_KEY` to unlock the
admin-only endpoints below — without it, those routes return a 500.

## API Endpoints

### Health check

- `GET /api/health` — returns server status, no auth required.

### Contact form

- `POST /api/contact` — public, rate-limited to 5 requests/hour per IP.
  Body: `{ name, email, phone?, company?, service?, budget?, message }`.
- `GET /api/contact` — **admin only** (`x-admin-key` header required).
  Query params: `?page=1&limit=20&status=new`.
- `PATCH /api/contact/:id/status` — **admin only**. Body: `{ status }`.

### Consultation bookings

- `POST /api/consultation` — public, rate-limited to 5 requests/hour per IP.
  Body: `{ name, email, date, time, platform?, topic?, notes? }`.
- `GET /api/consultation` — **admin only**.
- `PATCH /api/consultation/:id/status` — **admin only**. Body: `{ status }`.

### Newsletter

- `POST /api/newsletter` — public, rate-limited to 5 requests/hour per IP.
  Body: `{ email }`.
- `POST /api/newsletter/unsubscribe` — public. Body: `{ email }`.
- `GET /api/newsletter` — **admin only**.

### Calling admin endpoints

Send the key from `ADMIN_API_KEY` as a request header:

```bash
curl https://your-api-url/api/contact \
  -H "x-admin-key: your_admin_key_here"
```

## Notes on architecture

- The AI chat widget on the live site calls the Next.js app's own API
  route (`frontend/src/app/api/chat/route.ts`) directly — this backend
  intentionally does not have a chat endpoint, to avoid maintaining two
  separate implementations that can drift out of sync.
- Rate limiting, input validation (`express-validator`), and MongoDB
  operator-injection sanitization (`express-mongo-sanitize`) are applied
  globally or per-route — see `src/middleware/`.
- All three public submission endpoints (contact, consultation,
  newsletter) send a notification email via `src/utils/sendEmail.js`.
  If email sending fails, the submission is still saved to the
  database — email delivery failure never causes data loss.
