import { Router } from "express";
import { z } from "zod";
import { sendContactFormEmail } from "../lib/mail.js";
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

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
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

leadsRouter.post("/contact", async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const mail = await sendContactFormEmail(parsed.data);
  if (!mail.ok) {
    if (mail.reason === "not_configured") {
      return res.status(503).json({
        error:
          "Email is not configured on the server. Set SMTP_USER and SMTP_PASS (see backend .env.example).",
      });
    }
    return res.status(500).json({ error: "Could not send your message. Please try again later." });
  }

  if (process.env.MONGODB_URI) {
    try {
      await Lead.create({ type: "contact", ...parsed.data });
    } catch (e) {
      console.error(e);
    }
  }
  return res.json({ ok: true });
});
