# Stage 2 — Volumes (the "I lost my data" pain)

## What this app does
A tiny notes API. Persists JSON to `/data/notes.json` *inside the container*.

- `GET /notes`
- `POST /notes` body `{ "text": "hello" }`
- `DELETE /notes`

## The lesson plan
1. Run it without a volume → lose data on container removal. Feel the pain.
2. Run it with a **named volume** → data survives.
3. Run it with a **bind mount** → data lives on your host filesystem.
4. Inspect with `docker volume` commands.

Follow along in the chat — commands are walked through there.
