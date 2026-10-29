# DUCCOM Website V2 | Unofficial Demonstration

An independent, government-style demonstration portal. **Not affiliated with DuPage County, DU-COMM, or any emergency dispatch agency.** Do not use this site to report emergencies or submit personal information.

## Phase 1.1: Foundation

Included: Express 5, EJS views, responsive demonstration homepage, navigation, planned-section placeholders, security headers, health endpoint, smoke tests, ESLint, Prettier and GitHub Actions. **Not included:** actual login, database, forms, records, or admin functionality. Links to these areas show placeholders only.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm start
```

Open http://localhost:3000. Check http://localhost:3000/health for `{"status":"ok"}`.

```bash
npm run lint
npm run format:check
npm test
```

## Render deployment

1. Upload these files to `rncusar-hash/Duccom-website-v2` on GitHub.
2. On Render, select **New > Blueprint** and connect the GitHub repository. The included `render.yaml` defines a Node web service, `npm install --no-audit --no-fund` build, `npm start` startup, and `/health` check. Alternatively create a Web Service with these same commands.
3. Choose the service plan that meets your needs. The blueprint currently requests the free plan; Render may require a different plan depending on account and availability.
4. Render sets `PORT` automatically. The Express server listens on `0.0.0.0` by default. Do not set a fixed `PORT` unless Render instructs you to.
5. Verify `/health` returns `{"status":"ok"}`, `/` renders, and an unknown URL returns HTTP 404.
6. For incremental releases, merge tested changes into `main`; monitor deploy logs and health checks. If deployment fails, redeploy the last known-good commit through Render.

**Note:** Free Render instances may spin down when idle. No database or credentials are required in this phase. Never commit secrets, and do not activate real intake forms or authentication until their security controls are implemented.

## GitHub upload (if connector write access is blocked)

Create a local directory from the extracted archive, then run:

```bash
git init
git branch -M main
git add .
git commit -m "feat: initialize DUCCOM website foundation"
git remote add origin https://github.com/rncusar-hash/Duccom-website-v2.git
git push -u origin main
```

If the repository already contains commits, clone it first and copy these files into the clone rather than force-pushing. Authenticate using GitHub's supported Git credential flow; do not put a token in the remote URL or commit credentials.

## Next milestone

Phase 1.2: Render deployment readiness complete; next, match the homepage layout and visual system to user-provided UI reference screenshots, without copying them exactly.
