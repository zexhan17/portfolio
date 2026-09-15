# Muhammad Zeeshan - Portfolio

A fast, responsive personal portfolio website built with [SvelteKit](https://kit.svelte.dev/) and [Tailwind CSS](https://tailwindcss.com/), configured for static hosting on **GitHub Pages** via GitHub Actions.

## 🚀 Features

- **SvelteKit 2 & Svelte 5**: Modern reactive UI with smooth transitions.
- **Tailwind CSS v4**: Utility-first styling.
- **Static Export**: Pre-rendered static HTML/CSS/JS via `@sveltejs/adapter-static`.
- **GitHub Pages CI/CD**: Automated deployment with GitHub Actions on push to `main`.
- **Dynamic Base Path**: Automatically adapts to repository subpath (e.g. `https://zexhan17.github.io/portfolio`) or root custom domains.

## 🛠️ Development

Install dependencies:

```sh
pnpm install
```

Start the development server:

```sh
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Building

To create a static production build:

```sh
pnpm build
```

The output will be placed in the `build/` directory.

To preview the production build locally:

```sh
pnpm preview
```

## 🌐 Deploying to GitHub Pages

1. Push your changes to GitHub:
   ```sh
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```
2. Enable GitHub Pages in your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. On every push to the `main` branch, the GitHub Actions workflow will automatically build and deploy your site to GitHub Pages.
