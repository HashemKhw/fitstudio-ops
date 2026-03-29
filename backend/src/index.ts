import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { connectDb } from "./lib/db.js";
import { authRouter } from "./routes/auth.js";
import { healthRouter } from "./routes/health.js";
import { leadsRouter } from "./routes/leads.js";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") ?? "*",
    credentials: true,
  }),
);
app.use(morgan("combined"));
app.use(express.json({ limit: "1mb" }));

app.use("/api", healthRouter);
app.use("/api/auth", authRouter);
app.use("/api/leads", leadsRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

async function main() {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`API listening on ${PORT}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
