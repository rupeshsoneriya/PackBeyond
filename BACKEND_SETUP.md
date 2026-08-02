# PackBeyond — Backend & Admin Setup

This adds a real backend to the site: a database, authentication, an admin
panel, and file uploads for blog posts and gallery images.

## What's new

- **Database** (Prisma + SQLite by default — swap to Postgres/MySQL for
  production by changing `prisma/schema.prisma`'s datasource and your
  `DATABASE_URL`).
- **Auth**: single admin account, httpOnly JWT session cookie, login/logout,
  change password.
- **Admin panel** at `/admin`: dashboard, blog CRUD (with image upload),
  gallery CRUD (with image upload, grouped by category), quote-request
  submissions (view + CSV export + delete), change password.
- **Public pages now read from the database**: `/blog` and `/gallery` pull
  live from Prisma instead of static content. The contact form on `/contact`
  POSTs real submissions to `/api/contact`.

## 1. Install dependencies

```bash
npm install
```

This also runs `prisma generate` automatically via `postinstall`.

## 2. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env`:

- `DATABASE_URL` — leave as `file:./dev.db` for local/SQLite, or point at a
  real Postgres/MySQL connection string for production (update the
  `provider` in `prisma/schema.prisma` to match).
- `JWT_SECRET` — set a long random string, e.g. `openssl rand -base64 32`.
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — used **once** by the seed script to
  create your first admin login. Change the password from `/admin/settings`
  after your first login.

## 3. Create the database + seed initial data

```bash
npm run db:push
npm run db:seed
```

`db:push` creates the SQLite file and tables from `prisma/schema.prisma`.
`db:seed` creates your admin account and pre-populates a handful of blog
posts and gallery images so the site isn't empty on first run.

## 4. Run it

```bash
npm run dev
```

- Public site: `http://localhost:3000`
- Admin login: `http://localhost:3000/admin/login`

Log in with the `ADMIN_EMAIL` / `ADMIN_PASSWORD` from your `.env`, then go to
**Change Password** in the sidebar and set something only you know.

## How image uploads work

Uploaded images are written to `/public/uploads/blog/` and
`/public/uploads/gallery/` on the server's local disk, and the file path is
stored in the database. This works out of the box on a normal Node.js host
(a VM, Docker container, Railway, Render, etc.).

**Heads up if you deploy to Vercel or another serverless platform**: their
filesystems are read-only/ephemeral at runtime, so uploaded files would be
lost on redeploy. If you deploy there, swap `lib/uploads.ts` to upload to
S3 / Cloudinary / Vercel Blob instead of the local filesystem — the rest of
the app doesn't need to change, since it just stores whatever URL
`saveUploadedImage()` returns.

## API routes reference

**Public**
- `GET /api/blog` — published posts
- `GET /api/gallery` — all gallery images
- `POST /api/contact` — submit the quote request form

**Auth**
- `POST /api/auth/login` — `{ email, password }`
- `POST /api/auth/logout`
- `GET /api/auth/me` — current session
- `POST /api/auth/change-password` — `{ currentPassword, newPassword }`

**Admin (all require a logged-in session; `middleware.ts` enforces this)**
- `GET /api/admin/blog` / `POST /api/admin/blog` (multipart form data)
- `GET/PUT/DELETE /api/admin/blog/[id]`
- `GET /api/admin/gallery` / `POST /api/admin/gallery` (multipart form data)
- `DELETE /api/admin/gallery/[id]`
- `GET /api/admin/submissions`
- `GET/DELETE /api/admin/submissions/[id]`
- `GET /api/admin/submissions/export` — CSV download

## A note on this build

I generated and type-checked all of this code, but couldn't run the actual
`prisma generate` / `prisma db push` / dev server here because my sandbox's
network allowlist blocks `binaries.prisma.sh`, which Prisma needs to
download its query engine. That's a restriction specific to my environment
— it's a standard public domain with no special access requirements, so
`npm install` will complete normally on your machine or CI.
