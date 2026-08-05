# Soundead

Kakuon's sound design blog and listening library, built with Astro.

## Content

- `src/content/blog/` ??articles in Markdown or MDX
- `src/data/sounds.ts` ??playable sound-library entries; `source` accepts any public HTTPS audio URL
- `src/pages/` ??home, articles, sounds, about, contact, and 404 pages

## Development

```sh
pnpm install
pnpm run dev
pnpm run build
```

The project is configured for Vercel and uses `https://soundead.com` as its canonical site URL. Oracle Object Storage can be connected later by placing public or signed audio URLs in `src/data/sounds.ts`; no Oracle dependency is required for the current site.

## Theme credit

The visual foundation was adapted from the MIT-licensed Nikola Tesla Astro Portfolio by iann-mathaiya. The content, information architecture, favicon, and Soundead-specific implementation have been replaced.