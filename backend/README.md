
## Deployment notes

- Set `app.set("trust proxy", 1)` is already configured — required for accurate
  rate limiting and IP logging behind Railway/Render/Heroku-style reverse proxies.
- Rotate `ANTHROPIC_API_KEY` and `EMAIL_PASS` immediately if this repository or
  its `.env` file was ever shared outside your team.
- The frontend calls this API via `NEXT_PUBLIC_API_URL` — make sure `FRONTEND_URL`
  here matches the frontend's real deployed origin, or CORS will block requests.