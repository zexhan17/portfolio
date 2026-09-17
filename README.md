<div align="center">

# 👨‍💻 Muhammad Zeeshan — Portfolio

[![Deploy to GitHub Pages](https://github.com/zexhan17/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/zexhan17/portfolio/actions/workflows/deploy.yml)
[![Svelte v5](https://img.shields.io/badge/Svelte-v5-FF3E00?style=flat&logo=svelte&logoColor=white)](https://svelte.dev/)
[![SvelteKit v2](https://img.shields.io/badge/SvelteKit-v2-FF3E00?style=flat&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-v5-6E9F18?style=flat&logo=vitest&logoColor=white)](https://vitest.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-v10-F69220?style=flat&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Static Site](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222222?style=flat&logo=github&logoColor=white)](https://zexhan17.is-a.dev/)

A modern, high-performance personal portfolio website built with **SvelteKit 2**, **Svelte 5**, and **Tailwind CSS v4**, configured for zero-friction static deployment on **GitHub Pages** via automated GitHub Actions CI/CD.

[**Explore Live Demo »**](https://zexhan17.is-a.dev/) · [**Download Resume »**](https://zexhan17.is-a.dev/resume.pdf) · [**Connect on LinkedIn »**](https://www.linkedin.com/in/muhammad-zeeshan-801448144)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Testing Suite](#-testing-suite)
- [Available Scripts](#-available-scripts)
- [Continuous Deployment (CI/CD)](#-continuous-deployment-cicd)
- [Customization](#-customization)
- [Author & Contact](#-author--contact)

---

## 🌟 Overview

This portfolio showcases software engineering projects, technical skillsets, and professional experience. Built with a focus on speed, accessibility, and sleek aesthetics, it compiles to pure static HTML/CSS/JS that can be hosted anywhere with zero server overhead.

---

## ✨ Key Features

- **⚡ Blazing Fast Static Pre-rendering**: Powered by `@sveltejs/adapter-static` with complete pre-rendering (`prerender = true`) and SPA fallback routing.
- **🎨 Sleek Dark UI**: Crafted with modern dark hues, responsive typography, smooth entrance fly/fade transitions, and dynamic typewriter animations.
- **📱 Fully Responsive**: Tailored for all screen sizes — from mobile smartphones to ultra-wide desktop monitors.
- **🧪 Comprehensive Test Suite**: Unit and component testing coverage powered by **Vitest**, **Happy-DOM**, and **Testing Library for Svelte**.
- **🚀 Automated CI/CD**: Seamless GitHub Actions workflow that runs test suites and automatically deploys to GitHub Pages on every push to `main`.
- **🔗 Base Path Resilience**: Automatically configures base path prefixes for repository subpaths (`/portfolio`) as well as custom domains.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [SvelteKit 2](https://kit.svelte.dev/) | Fullstack framework with file-based routing and static site generation |
| **Core UI Library** | [Svelte 5](https://svelte.dev/) | Next-generation reactive frontend component compiler (Runes syntax) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | High-performance utility-first styling with `@tailwindcss/vite` |
| **Adapter** | [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/main/packages/adapter-static) | Static exporter producing static HTML/JS bundles |
| **Testing** | [Vitest](https://vitest.dev/) + [Happy-DOM](https://github.com/capricorn86/happy-dom) | Fast unit and DOM testing environment |
| **Component Testing** | [@testing-library/svelte](https://testing-library.com/docs/svelte-testing-library/intro/) | User-centric component testing utilities |
| **Package Manager** | [pnpm v10](https://pnpm.io/) | Fast, disk space-efficient package manager |
| **CI/CD & Hosting** | [GitHub Actions & Pages](https://pages.github.com/) | Automated testing pipeline and global CDN static web hosting |

---

## 📂 Project Architecture

```plaintext
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD (Test -> Build -> Deploy to GitHub Pages)
├── src/
│   ├── app.css                 # Global Tailwind CSS imports & theme overrides
│   ├── app.html                # Base HTML template with SvelteKit anchors
│   ├── lib/
│   │   ├── assets/
│   │   │   └── favicon.svg     # Portfolio logo favicon
│   │   ├── projects.js         # Centralized portfolio projects dataset
│   │   ├── projects.test.js    # Data integrity & schema tests
│   │   ├── Post.svelte         # Project showcase cards component
│   │   └── Post.test.js        # Post component unit tests
│   └── routes/
│       ├── +layout.js          # Prerendering & static routing config
│       ├── +layout.svelte      # Base layout wrapper (CSS & favicon injection)
│       ├── +page.svelte        # Home page (Hero, typewriter, socials, & projects)
│       └── page.test.js        # Home page render & interaction tests
├── static/
│   ├── .nojekyll               # Prevents Jekyll processing on GitHub Pages
│   └── resume.pdf              # Downloadable resume PDF
├── package.json                # Project dependencies & scripts
├── svelte.config.js            # SvelteKit static adapter & base path config
├── vite.config.js              # Vite build plugins & Vitest runner config
└── README.md                   # Repository documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local environment:
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **pnpm**: `v10.x` (`npm install -g pnpm`)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/zexhan17/portfolio.git
cd portfolio
pnpm install
```

### Development Server

Start the local Vite development server with live reload:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

To compile a pre-rendered static production build:

```bash
pnpm build
```

The output files will be compiled into the `build/` directory.

To preview the production build locally:

```bash
pnpm preview
```

---

## 🧪 Testing Suite

The project includes unit, dataset integrity, and Svelte component tests powered by **Vitest**:

```bash
# Run tests once
pnpm test

# Run tests in watch mode (ideal for development)
pnpm test:watch
```

### Test Coverage Highlights
- ✅ **Data Schema & Links**: Validates all projects have valid titles, live URLs, descriptions, and tag arrays.
- ✅ **Component Lifecycle**: Tests mount timers, typewriter rendering, and transition states.
- ✅ **Links & Attributes**: Verifies correct `target="_blank"`, `download`, and base path resolution.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local dev server on `http://localhost:5173` |
| `pnpm build` | Compiles static site to `build/` |
| `pnpm preview` | Serves the production build locally |
| `pnpm test` | Runs the full Vitest test suite once |
| `pnpm test:watch` | Runs Vitest in interactive watch mode |

---

## 🌐 Continuous Deployment (CI/CD)

Deployments are fully automated via GitHub Actions in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

On every `git push` to `main`:
1. **Quality Check**: Runs `pnpm test` to ensure all tests pass.
2. **Setup Pages**: Configures dynamic base paths using `actions/configure-pages@v5`.
3. **Static Build**: Compiles the pre-rendered application with `pnpm build`.
4. **Deploy**: Uploads the `build/` artifact and publishes it to GitHub Pages.

---

## 🎨 Customization

- **Updating Projects**: Edit [`src/lib/projects.js`](src/lib/projects.js) to add, remove, or modify project items.
- **Updating Resume**: Replace [`static/resume.pdf`](static/resume.pdf) with your updated resume file.
- **Personal Details**: Modify bio, headline, and social links in [`src/routes/+page.svelte`](src/routes/+page.svelte).

---

## 📬 Author & Contact

**Muhammad Zeeshan**  
- **GitHub**: [@zexhan17](https://github.com/zexhan17)  
- **LinkedIn**: [muhammad-zeeshan-801448144](https://www.linkedin.com/in/muhammad-zeeshan-801448144)  
- **Live Portfolio**: [https://zexhan17.is-a.dev/](https://zexhan17.is-a.dev/)

---

<div align="center">
  <sub>Built with ❤️ using SvelteKit & Tailwind CSS</sub>
</div>
