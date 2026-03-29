import { Router } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";

export const authRouter = Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

/** Placeholder: replace with User model + bcrypt.compare on passwordHash */
authRouter.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(501).json({ error: "JWT_SECRET not configured" });
  }

  const demoEmail = process.env.DEMO_USER_EMAIL;
  const demoPassword = process.env.DEMO_USER_PASSWORD;
  if (!demoEmail || !demoPassword) {
    return res.status(501).json({ error: "Demo auth not configured" });
  }

  if (parsed.data.email !== demoEmail || parsed.data.password !== demoPassword) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ sub: "demo-user", role: "admin" }, secret, { expiresIn: "7d" });

  return res.json({ accessToken: token });
});
