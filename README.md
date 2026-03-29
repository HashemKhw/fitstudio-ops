# FitStudio Ops — B2B gym & studio operations SaaS

Monorepo scaffold: **Next.js + Tailwind** marketing site and **Express + MongoDB** API, aligned with a product roadmap for member management, billing, analytics, and role-based access.

---

## Product features (core system)

| Area | Capabilities |
|------|----------------|
| **Gym management** | Member profiles, subscription status, QR/manual attendance, group class scheduling & bookings, trainer/staff records |
| **Payments & billing** | Monthly/yearly plans, auto-renew, Stripe (or PayPal) integration, invoice generation |
| **Analytics** | Revenue, active members, attendance insights, growth trends |
| **UX** | Mobile-responsive dashboard, email/SMS reminders, minimal UI |
| **Admin & security** | Roles (admin, staff), JWT auth (or Firebase Auth), HTTPS + env secrets |

---

## Landing page content (reference)

| Section | Headline / CTA |
|---------|----------------|
| **Hero** | *Run your gym without the spreadsheet chaos* — CTAs: **Contact Us**, **Book a Demo**, **WhatsApp** |
| **Problem → solution** | *Sound familiar?* — pain vs. how FitStudio Ops fixes it |
| **Features** | *Everything you need to operate* — six benefit cards |
| **Product preview** | *Your command center, on any device* — dashboard mock |
| **Pricing** | Basic ($79), Pro ($149), Enterprise (custom) |
| **Testimonials** | Three placeholder quotes (swap for real social proof) |
| **Contact** | Closing CTA + **contact form** (name, email, phone, message) |

---

## Repository layout

```
TRY/
├── frontend/                 # Next.js 15 (App Router), Tailwind v4
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/contact/route.ts  # Proxies to backend /api/leads/contact when BACKEND_API_URL set
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # Composes landing sections
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── analytics/GoogleAnalytics.tsx
│   │   │   ├── landing/              # Hero, ProblemSolution, Features, …
│   │   │   └── ui/                   # Button, Container, Section
│   │   └── ...
│   └── package.json
├── backend/                  # Express + TypeScript
│   ├── src/
│   │   ├── index.ts
│   │   ├── lib/db.ts
│   │   ├── middleware/auth.ts        # JWT guard for future protected routes
│   │   ├── models/Lead.ts
│   │   └── routes/auth.ts, health.ts, leads.ts
│   └── package.json
└── README.md
```

---

## Implementation plan (step-by-step)

1. **Initialize frontend** — `cd frontend && npm install && npm run dev`
2. **Tailwind** — configured via `postcss.config.mjs` and `src/app/globals.css` (`@import "tailwindcss"`).
3. **Landing components** — built under `src/components/landing/`.
4. **Reusable UI** — `Button`, `Container`, `Section` in `src/components/ui/`.
5. **Forms** — `ContactForm` posts to `/api/contact` (optional proxy to `POST /api/leads/contact` with `BACKEND_API_URL`).
6. **Backend API** — `cd backend && npm install && npm run dev` (default port `4000`).
7. **Database** — set `MONGODB_URI` (MongoDB Atlas). Leads persist to the `Lead` collection when connected.
8. **Authentication** — `POST /api/auth/login` is a **demo-only** placeholder; replace with real users + password hashes before production.
9. **Deploy frontend (Vercel)** — import the `frontend` folder as the root; set env vars from `frontend/.env.example`.
10. **Deploy backend (Render or Railway)** — Node service, `npm run build && npm start`, set `PORT`, `MONGODB_URI`, `JWT_SECRET`, `CORS_ORIGIN`.
11. **Domain** — add your domain in Vercel; point API subdomain to Render/Railway; set `CORS_ORIGIN` to your production site URL.
12. **Analytics** — set `NEXT_PUBLIC_GA_MEASUREMENT_ID` for Google Analytics 4 (`GoogleAnalytics` in `layout.tsx`).

---

## Deployment instructions

### Vercel (frontend)

1. Push the repo to GitHub/GitLab.
2. New Project → select repo → **Root Directory**: `frontend`.
3. Framework: Next.js (auto-detected).
4. Environment variables: `BACKEND_API_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID` as needed.
5. Deploy.

### Render / Railway (backend)

1. New Web Service → connect repo; root directory `backend`.
2. Build: `npm install && npm run build` · Start: `npm start`.
3. Set `MONGODB_URI`, `JWT_SECRET`, `CORS_ORIGIN` (your Vercel URL), optional `DEMO_USER_*` for testing login.
4. After deploy, set `BACKEND_API_URL` on Vercel to the API base URL (e.g. `https://api.yourdomain.com`).

---

## Deploy the Next.js app to Cloudflare Workers

This repo uses the official [**OpenNext Cloudflare adapter**](https://opennext.js.org/cloudflare) (`@opennextjs/cloudflare`). The **frontend** is what you deploy; the Express API stays on Render/Railway (or another host) unless you migrate it separately.

### Workers Builds (Git connected)

In the Cloudflare dashboard: **Workers & Pages** → your Worker → **Settings** → **Build**:

**Option A — Build from monorepo root** (what you use if **Root directory** is empty):

| Setting | Value |
|--------|--------|
| **Root directory** | *(leave empty)* |
| **Build command** | `npm run build` |
| **Deploy command** | `npm run cloudflare-deploy` |

`npm run cloudflare-deploy` runs Wrangler with `--config frontend/wrangler.jsonc` so paths like `.open-next/worker.js` resolve correctly. The default `npx wrangler deploy` from the repo root (with no config) fails because `wrangler.jsonc` lives under `frontend/`.

The Worker name in `frontend/wrangler.jsonc` (`name` and `services[].service` for `WORKER_SELF_REFERENCE`) must match your Cloudflare **project / Worker name** (e.g. `fitstudio-opss`). If you rename the Worker in the dashboard, update `wrangler.jsonc` or deploys will fail with a service-binding error.

**Option B — Build only the Next app** (often simpler):

| Setting | Value |
|--------|--------|
| **Root directory** | `frontend` |
| **Build command** | `npm install && npm run cf-build` |
| **Deploy command** | `npx wrangler deploy` |

Use **npm** for installs if the UI lets you choose a package manager. If Cloudflare defaults to **Bun** at the monorepo root with an empty root directory, **Option B** avoids “No packages” during install because dependencies live in `frontend/package.json`.

### Build variables (recommended)

Add the same values you use locally so Next can inline public env vars during the build:

- `BACKEND_API_URL` — optional; your API URL for form proxying.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional.

For runtime-only secrets, use **Workers** → **Settings** → **Variables**.

### Local Cloudflare preview

```bash
cd frontend && npm run preview
```

### One-command deploy from your machine

```bash
cd frontend && npm run deploy
```

(requires Wrangler logged in: `npx wrangler login`)

---

## Environment variables

**Frontend** (`frontend/.env.example`)

- `BACKEND_API_URL` — optional; if set, `/api/contact` proxies to the backend.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional GA4 measurement ID.
- `NEXT_PUBLIC_WHATSAPP_PHONE` — digits only (with country code), for `wa.me` links.
- `NEXT_PUBLIC_CONTACT_EMAIL` — for `mailto` / Hero “Send us a note”.

**Backend** (`backend/.env.example`)

- `PORT`, `MONGODB_URI`, `JWT_SECRET`, `CORS_ORIGIN`
- `DEMO_USER_EMAIL`, `DEMO_USER_PASSWORD` — temporary demo login only.

---

## Optional improvements / future features

- **NestJS** migration if you need modules, CQRS, or larger teams.
- **PostgreSQL + Prisma** if you prefer relational billing/invoicing schemas.
- **Firebase Auth** for client SDKs and social login.
- **Stripe Billing** webhooks for subscription lifecycle.
- **Twilio** for SMS; **Resend/SendGrid** for transactional email.
- **In-app dashboard** routes under `frontend/src/app/(dashboard)/` with JWT cookie or session.

---

## Local development

**Requirements:** Node.js 20+ (LTS recommended). If `node` is not recognized, install from [https://nodejs.org](https://nodejs.org) or run `winget install OpenJS.NodeJS.LTS`.

From the repo root (`TRY/`):

```bash
npm run install:all
```

In **two terminals**:

```bash
npm run dev:frontend
```

```bash
npm run dev:backend
```

Or per package: `cd frontend && npm install && npm run dev` and `cd backend && npm install && npm run dev`.

The marketing site is at **http://localhost:3000** and the API at **http://localhost:4000** (`GET /api/health` should return `{ "status": "ok" }`). The contact form works without MongoDB; set `MONGODB_URI` on the backend to persist leads. To forward submissions from Next to the API, set `BACKEND_API_URL=http://localhost:4000` in `frontend/.env.local`. Set `NEXT_PUBLIC_WHATSAPP_PHONE` and `NEXT_PUBLIC_CONTACT_EMAIL` for WhatsApp and `mailto` links.
