# DUCCOM Website V2 · Phase 1.3

Unofficial demonstration website. **Not affiliated with DuPage County or DU-COMM. Do not submit emergencies or personal data.**

## What's new

- Responsive homepage: agency header, navigation, dispatch-themed hero, about, quick links, careers, red notices, Smart911, and footer.
- Accessible mobile navigation toggle, Escape dismissal, and skip link.
- The 988 and Crisis Recovery Center promotional sections were excluded as requested.
- The anniversary logo was **cropped from the user-provided reference screenshot**, not a production-quality logo asset. Replace `public/duccomm-reference-logo.png` with a clean authorized original when available. The screenshot includes the anniversary design.
- Illustrative CSS dispatch-room artwork, not a photograph of an actual facility. Swap in a licensed photo when supplied.
- Public-facing links for not-yet-built sections lead to clearly marked placeholders. No forms or authentication are live.

## Local setup

Requires Node.js 22+.

```bash
npm install
npm test
npm run lint
npm run format:check
npm start
```

Visit http://localhost:3000 and http://localhost:3000/health.

## Render

Existing `render.yaml` remains compatible. Upload/commit the **contents** of this archive to the repository root, preserving the `src`, `public`, and `.github` folders. Render will redeploy automatically if connected with auto-deploy. If using manual deploy, choose **Deploy latest commit**. Health check: `/health`.

No secrets or MongoDB are needed for this phase. If the build uses `npm ci`, generate and commit a package-lock.json using `npm install` first; the included Render Blueprint uses `npm install`.

## Rollback

Use Render dashboard → Deploys → select a previously successful deploy → Redeploy, or revert the homepage commit in GitHub.

## Next checkpoint

Review live desktop/mobile screenshots, supply a high-quality DUCCOM logo and dispatch facility photograph if available, and approve homepage content before implementing real page workflows.
