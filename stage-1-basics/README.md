# Stage 1 — "Works on my machine" pain → first container

## Goal
Run a tiny Express app first **without** Docker, feel the pain points, then containerize it.

## The pain we want you to feel
1. **Dependency drift** — node_modules tied to *your* Node version.
2. **Port conflicts** — only one process per port on the host.
3. **No isolation** — installing things globally pollutes your machine.
4. **Hard to share** — "send me the project" → "what Node version are you on?"

Docker fixes all four. But first run it bare so you feel the gap.

## Step 1 — run it without Docker

```bash
cd stage-1-basics/app
npm install
npm start
# open http://localhost:3000  in another terminal: curl http://localhost:3000
```

Notice:
- `node_modules/` was created on your host (look at its size: `du -sh node_modules`).
- The process is bound to **your** Node version (`node --version`).
- Stop it with Ctrl+C.

## Step 2 — try to break it (optional but illustrative)
- Start it twice in two terminals → second one fails with `EADDRINUSE`.
- Imagine giving this folder to a teammate on Node 16 → `express@4` works, but in real apps this is where "works on my machine" begins.

## Next
Once you've run it locally, ping me and we write the **Dockerfile** together.
