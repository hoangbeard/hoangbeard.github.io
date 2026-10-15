# hoangbeard.github.io

Personal blog: tutorials, labs, tips and tools on DevSecOps, cloud security and AI security. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Write a post

Copy `src/content/posts/_template.md` to `src/content/posts/<slug>.md`, fill in the front matter and set `draft: false`. The post appears at `/blog/<category>/<slug>/`.

Categories (set in `src/data/categories.ts`): `articles`, `tutorials`, `tips`, `labs`, `knowledge-base`, `news`.

Projects and courses are listed in `src/data/projects.ts` and `src/data/courses.ts`. Add a `url` when a repository goes public and its "Coming soon" badge turns into a link.

## Languages

English only for now. Vietnamese is switched off in `src/i18n.ts`; the language switch appears once two languages are enabled.

## Develop

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Pushing to `main` deploys through `.github/workflows/deploy.yml`.

## License

Code: [MIT](LICENSE). Posts: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
