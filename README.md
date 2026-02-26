# testplans

A modern blog and resource hub for **test plans**, **test strategy**, and **AI-assisted QA**. Built with React, Vite, and a dark-themed UI.

## Features

- **Articles** — Test plan basics, test strategy guide, how to write a test plan in 7 steps, AI in QA, and best practices
- **Downloadable templates** — Test plans, test strategy (one-pager + full document), test cases, UAT, smoke/regression/API plans, traceability matrix, release checklist, defect report, test summary, and more
- **Export formats** — Each template can be downloaded as **TXT**, **PDF**, or **Excel**
- **AI prompts** — Ready-to-use prompts for creating test plans, test strategy, test cases, UAT, RTM, and other test documents (copy into ChatGPT, Claude, etc.)

## Quick start

```bash
cd qa-blog
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173/` or `http://localhost:5174/`).

## Scripts (run from `qa-blog/`)

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run preview` | Preview production build |

## Project structure

```
├── README.md
├── .gitignore
└── qa-blog/                 # React + Vite app
    ├── src/
    │   ├── components/       # Navbar, Footer, PostCard, etc.
    │   ├── data/             # posts.js, templates.js
    │   ├── pages/            # Home, PostPage, CategoryPage, TemplatesPage
    │   ├── utils/            # exportTemplate.js (PDF, Excel, TXT)
    │   └── ...
    ├── index.html
    └── package.json
```

## Deploy on Netlify

The repo includes `netlify.toml` (root and `qa-blog/`) and `qa-blog/public/_redirects` so all routes serve `index.html` (SPA). If you still see "Page not found":

1. In Netlify: **Site settings → Build & deploy → Build settings**
2. Set **Base directory** to `qa-blog` (or leave empty if using root config).
3. Set **Build command** to `npm run build`.
4. Set **Publish directory** to `qa-blog/dist` (or `dist` if base is `qa-blog`).
5. Trigger a **Clear cache and deploy site** and redeploy.

## Tech stack

- **React 19** + **Vite 7**
- **React Router** — Routing
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **jsPDF** — PDF export for templates
- **xlsx (SheetJS)** — Excel export for templates

## License

MIT (or your choice).
