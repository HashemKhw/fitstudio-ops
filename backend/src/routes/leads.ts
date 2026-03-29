import { Router } from "express";
import { z } from "zod";
import { Lead } from "../models/Lead.js";

export const leadsRouter = Router();

const trialSchema = z.object({
  gymName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
});

const demoSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  gymName: z.string().min(1),
  message: z.string().optional(),
});

leadsRouter.post("/trial", async (req, res) => {
  const parsed = trialSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }
  if (process.env.MONGODB_URI) {
    try {
      await Lead.create({ type: "trial", ...parsed.data });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Could not save lead" });
    }
  }
  return res.json({ ok: true });
});

leadsRouter.post("/demo", async (req, res) => {
  const parsed = demoSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }
  if (process.env.MONGODB_URI) {
    try {
      await Lead.create({ type: "demo", ...parsed.data });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Could not save lead" });
    }
  }
  return res.json({ ok: true });
});
