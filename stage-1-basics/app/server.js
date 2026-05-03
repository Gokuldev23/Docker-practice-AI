import express from "express";
import os from "os";

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "stage-1-app";

app.get("/", (_req, res) => {
  res.json({
    app: APP_NAME,
    hostname: os.hostname(),
    pid: process.pid,
    nodeVersion: process.version,
    uptimeSec: Math.round(process.uptime()),
  });
});

app.get("/health", (_req, res) => {
  console.log("LOGS COMES")
  res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`[${APP_NAME}] listening on http://0.0.0.0:${PORT}`);
});
