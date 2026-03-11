# Timeplus Vistral Introduction

An interactive slide deck introducing [Vistral](https://github.com/timeplus-io/vistral) — the grammar of graphics for streaming data.

## Overview

This project is a self-contained presentation (18 slides) built with React + Vite that walks through what Vistral is, how it works, and how to use it to build real-time streaming data visualizations.

## Development

```bash
npm install
npm run dev        # starts dev server at http://localhost:3000
```

## Build

```bash
# Standard build (output to dist/)
npm run build

# All-in-one single HTML file (output to docs/index.html)
npm run build:singlefile
```

The `build:singlefile` command uses [`vite-plugin-singlefile`](https://github.com/richardtallent/vite-plugin-singlefile) to inline all JavaScript and CSS into a single portable `docs/index.html` file — ideal for sharing or hosting via GitHub Pages.

## Navigation

- **Space** or **→** — next slide
- **←** — previous slide

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 6](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vistral](https://github.com/timeplus-io/vistral) — `@timeplus/vistral`
- [Motion](https://motion.dev/) for animations

## License

Apache 2.0
