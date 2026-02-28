# Copilot / AI Agent Instructions

The repository is a **React + Vite single‑page portfolio**. It is intentionally small and simple; most of the logic lives in a handful of components and a single data source.

## High‑Level Architecture

- Entry point is `src/main.jsx`.  It renders `<App />` inside `#root`.
- `App.jsx` composes four major pieces:
  1. `Navbar` (located in `src/navigation/Navbar.jsx`)
  2. `<About />` (src/components/about)
  3. `<Skills />` (src/components/skills)
  4. `<Projects />` (src/components/projects)
- Each component imports its own CSS file and lives in a dedicated folder with the same name (e.g. `about/About.jsx` + `about/About.css`).
- Static content is extracted into `src/data/ProjectData.js` (currently two objects representing Android projects).
- Assets such as `profile.jpg` and fonts are under `public/` and `src/fonts/`, referenced with root‑relative paths (`/profile.jpg`).
- Navigation links are simple anchor tags pointing at section `id` attributes (`#about`, `#skills`, etc.).  Adding a new section requires:
  1. creating the component
  2. giving it an `id` on the wrapper element
  3. adding a corresponding `<a>` in `Navbar.jsx`
  4. including it in `App.jsx`'s `<main>`.

## Data flow & patterns

- **Projects**: `Projects.jsx` imports `projectData` and maps it to cards. Clicking "ReadMe" sets a `selectedProject` state, which renders a modal overlay.  Add new projects by editing `src/data/ProjectData.js`; ensure each object has a unique `id`.
- **State/hooks**: only `useState` and `useEffect` are used.  `Navbar` uses `useEffect` to toggle the `scrolled` CSS class based on `window.scrollY`.
- There is no global state, context, or router.

## Styling conventions

- Global rules live in `src/index.css`.  This file also declares the custom `Pretendard` font and applies it via `* { font-family: ... }`.
- Component CSS files use plain class names (not CSS modules).  Classes tend toward a loose BEM-ish scheme (`project-card`, `hero-content`, `.skill-badge`), but keep them simple.
- You may add SCSS or styled‑components only if the user explicitly asks; otherwise continue with `.css` imports.

## Build & development workflow

```bash
npm install          # install dependencies
npm run dev          # start Vite development server (HMR)
npm run build        # produce production output in dist/
npm run preview      # serve the built files locally
npm run lint         # run ESLint over the source tree
```

`package.json` is minimal: React 19, ReactDOM, Vite (aliased to `rolldown-vite`), and ESLint plugins.  No tests are configured.

## Project‑specific conventions

- **JS only** – the project is plain JavaScript with ECMAScript modules.  Do not introduce TypeScript unless the user requests a migration.
- **No tests** – when asked to add tests, suggest a framework (e.g. Vitest) and a simple example but note the repo currently has none.
- **Assets** – place new static images in `public/` and reference them as `/filename`.  Fonts should go into `src/fonts` and be registered via `@font-face` in `index.css`.
- **Section IDs** – every major section component should wrap its markup in a `<section id="...">` to support navigation links.
- **Data updates** – project entries are mutated by editing `ProjectData.js`; avoid duplicating data inside components.

## External dependencies & integration points

- Only third‑party code is the React/Vite stack.  No APIs or backends are consumed.
- If new dependencies are needed (e.g. a UI library or HTTP client), add them to `package.json` and update the relevant components.

## Developer notes

- Linting uses the default rules from the Vite React template (`eslint.config.js` at root).
- There is no CI configuration in this repo yet.
- The `vite.config.js` is the standard template; you can add aliases or plugins there if required.

---

> ⚠️ When modifying the navigation or adding a new section, remember to mirror the section id and the `<a>` in `Navbar.jsx`.  Otherwise the scroll links will break.

Please review and let me know if any specific conventions or workflows are missing or unclear.