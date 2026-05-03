import express from "express";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DATA_DIR = process.env.DATA_DIR || "/data";
const DATA_FILE = path.join(DATA_DIR, "notes.json");

fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

const readNotes = () => JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
const writeNotes = (notes) =>
  fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null, 2));

app.get("/notes", (_req, res) => {
  res.json(readNotes());
});

app.post("/notes", (req, res) => {
  const { text } = req.body || {};
  if (!text) return res.status(400).json({ error: "text is required" });
  const notes = readNotes();
  const note = { id: Date.now(), text };
  notes.push(note);
  writeNotes(notes);
  res.status(201).json(note);
});

app.delete("/notes", (_req, res) => {
  writeNotes([]);
  res.status(204).end();
});

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`stage-2-app listening on :${PORT}, data at ${DATA_FILE}`);
});
