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

## Pterodactyl deployment

1. Choose a **Node.js 22+ egg** that supports a persistent Node process. Verify that the host permits your allocated web port and provides an HTTP reverse proxy with HTTPS for a public domain.
2. Upload the project files to the server (excluding `node_modules` and `.env`).
3. Set the startup command to `npm start`. Install dependencies with `npm install --omit=dev` (or use the egg's install mechanism).
4. Configure `NODE_ENV=production`, `HOST=0.0.0.0`, and `PORT` to the **port assigned by your hosting provider**. Do not assume port 3000 is externally available.
5. Start the server, visit `/health`, then check `/`, `/about`, and an unknown URL (should return 404).
6. For each release, retain a copy of the previous deployed build. Stop the server, upload the validated new release, install dependencies if needed, restart, and verify `/health`. Roll back to the saved build if checks fail.

**Do not configure real public submissions or credentials in Phase 1.1.** Production authentication, databases, request validation, CSRF controls, sessions, privacy policies, and accessibility reviews will be added and verified before those features are enabled.

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

Phase 1.2: match the homepage layout and visual system to user-provided UI reference screenshots, without copying them exactly.
