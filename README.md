# Sithembinkosi Medical Centre — Website

Plain **Vite + React SPA** (no SSR, no server, no Cloudflare Workers).

## Stack
- React 18 + TypeScript
- Vite 5
- React Router v6 (client-side routing)
- Tailwind CSS v3
- Radix UI primitives (accordion, select, label)
- Zod (form validation)

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Output lands in `dist/`. Upload **everything inside `dist/`** to CyberSmart.

## Deploying to CyberSmart

1. Run `npm run build`
2. Open CyberSmart File Manager (or use FTP)
3. Upload the entire contents of `dist/` into `public_html/` (or whichever web root your plan uses)
4. The `.htaccess` file inside `dist/` handles SPA routing — make sure it uploads too (it may be hidden; enable "show hidden files" in your FTP client)
5. Visit your domain — all routes (`/about`, `/services`, etc.) will work correctly

## SPA Routing Note

Because this is a client-side SPA, the server must serve `index.html` for every path.
The included `public/.htaccess` does this automatically on Apache (which CyberSmart uses).
