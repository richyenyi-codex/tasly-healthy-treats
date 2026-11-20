# Tasly Healthy Treats

Responsive five-page café website for Tasly Healthy Treats. Built with React, TanStack Start, Vite and Cloudflare Workers.

## Pages

- Home
- Menu
- About
- Gallery
- Contact

## Local development

Requires Bun.

```bash
bun install --frozen-lockfile
bun run dev
```

## Production build and preview

```bash
bun run build
bun run deploy --dry-run
```

The production build emits a Cloudflare Worker in `app/dist/server/server.js` and static assets in `app/dist/client`. Deploys are configured through Cloudflare Workers Builds connected to this GitHub repository. Do not commit credentials or API tokens; configure deployment access in the hosting provider's dashboard.

## Business information

Menu items, prices, phone number, opening hours, and other unconfirmed business details are intentionally not invented. Instagram embeds display original Tasly posts.
