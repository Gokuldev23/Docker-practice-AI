---
name: Teaching style — pain-first, hands-on
description: User wants to feel the pain point before being shown the Docker solution; he runs commands himself.
type: feedback
---

Teach Docker by letting the user hit each pain point before introducing the fix.

**Why:** User explicitly asked to learn "by doing real-time project and pain points" — understanding sticks when the motivation is felt, not described.

**How to apply:**
- Build progressively, one pain → one concept.
- Don't write the next-stage solution until the user has run the previous stage and seen it break.
- For each command, explain: what it does, why it exists, what breaks without it, gotchas.
- Keep scaffolding minimal so Docker stays the focus, not the app code.
- The user runs commands himself; do not pre-run things that are part of the learning exercise.
