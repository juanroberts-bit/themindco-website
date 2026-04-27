# TheMindCo — Sanity Studio

This folder contains the Sanity Studio for managing Insights and Events on the TheMindCo website.

## First-time setup

```bash
cd studio
npm install
```

## Run locally (for testing)

```bash
npm run dev
# Opens at http://localhost:3333
```

## Deploy the Studio (one-time, gives partners a permanent URL)

```bash
npm run deploy
# Follow the prompts — choose a name like "themindco"
# Your studio will live at: https://themindco.sanity.studio
```

## Adding content

Once deployed, go to **https://themindco.sanity.studio** and log in with your Sanity account.

- **Insights** — Add/edit articles. Fill in title, category, teaser, read time, and publish date.
- **Events** — Add/edit events. Fill in name, type (hosting/attending), location, display date, sort key (YYYYMM), and description.

The website pulls content automatically — no rebuild needed.

## Inviting team members

Go to https://sanity.io/manage → your project → Members → Invite.
Assign the "Editor" role — they can add and edit content but cannot change settings.
