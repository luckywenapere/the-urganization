# the-urganization

The earlier marketing site for Urganize, the operating system for independent music careers.

Urganize helps independent artists and managers run their careers as businesses, across the full life cycle of a music career. A music career shouldn't run on a group chat.

The live marketing site now lives in the main Urganize repository (`apps/homepage` in `luckywenapere/urganize`) at https://urganize.app. This repository is kept for its history and its waitlist data tooling. The company site is a separate repository, `the-urganization-website`, at https://theurganization.com.

## What is in here

- Next.js App Router, React 19, Tailwind v4.
- Waitlist sign-up, stored in Neon with Prisma (`prisma/`, `app/api/signup`).
- PostHog and Formbricks for analytics and surveys.
- Press, team, privacy, terms and subprocessors pages, and an internal waitlist viewer at `/admin/waitlist`.

## Run it

Create a `.env.local` file:

```bash
NEXT_PUBLIC_POSTHOG_TOKEN=phc_your_project_token
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
ADMIN_WAITLIST_TOKEN=use-a-long-random-token
```

Then set up the database and start the dev server (see `SIGNUP_SETUP.md` for the database steps):

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Open http://localhost:3000. The waitlist viewer at `/admin/waitlist` asks for `ADMIN_WAITLIST_TOKEN`.

To smoke-test the waitlist buttons against a running local server:

```bash
npm run smoke:waitlist
```

Set `WAITLIST_SMOKE_URL` to test a different address, or `CHROME_PATH` if Chrome, Edge or Chromium is not found automatically.
