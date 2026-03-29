import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export type AuthPayload = { sub: string; role: "admin" | "staff" };

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(501).json({ error: "JWT not configured" });
  }
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing token" });
  }
  const token = header.slice("Bearer ".length);
  try {
    const payload = jwt.verify(token, secret) as AuthPayload;
    (req as Request & { auth?: AuthPayload }).auth = payload;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}
