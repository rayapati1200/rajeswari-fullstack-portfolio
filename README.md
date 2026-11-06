# Rajeswari Rayapati — Professional Portfolio

A recruiter-focused portfolio presenting my full stack software engineering experience, technical skills, education, and AI-focused projects. Built with React and TypeScript, with portfolio content maintained separately from page layout for straightforward updates.

**Live portfolio:** [rayapati-professional-ai.lovable.app](https://rayapati-professional-ai.lovable.app)  
**GitHub:** [rayapati1200](https://github.com/rayapati1200)  
**LinkedIn:** [Rajeswari Rayapati](https://www.linkedin.com/in/rayapati1203/)

## Overview

- Professional introduction, interests, and contact links.
- Technical skills organized by frontend, backend, AI, data, cloud, and quality.
- Expandable work history focused on roles and responsibilities.
- Project highlights, including the HPE Software Engineering Job Simulation on Forage.
- Education and certifications.

## Technology stack

| Area | Technology |
| --- | --- |
| UI | React 19, TypeScript |
| Application and routing | TanStack Start, TanStack Router |
| Styling and UI primitives | Tailwind CSS v4, shadcn/ui, Radix UI |
| Icons | Lucide React |
| Development and bundling | Vite |
| Testing | Vitest, React Testing Library |
| Code quality | ESLint, Prettier |

The technologies listed in the portfolio describe my broader engineering skills; the table above describes this repository's implementation.

## Local installation

### Prerequisites

- Node.js **22.12 or newer**; a current LTS release is recommended.
- npm, included with Node.js.
- Git, if cloning rather than downloading the repository.

### Setup

```sh
git clone https://github.com/rayapati1200/rajeswari-fullstack-portfolio.git
cd rajeswari-fullstack-portfolio
npm install
```

Alternatively, download the repository ZIP, extract it, open a terminal in the extracted folder, and run `npm install`.

The current portfolio reads its content from a local TypeScript file and does not require database credentials or private API keys for its content. Do not commit secrets or local environment files.

## Run locally

```sh
npm run dev
```

Open the local URL printed in the terminal. Keep the command running while developing; source changes update the page automatically. Press `Ctrl+C` to stop it.

## Build and preview

Create the production build:

```sh
npm run build
```

Preview the generated build locally:

```sh
npm run preview
```

Open the URL printed by the preview command. This is a TanStack Start application with a server build, not just a static HTML site; use a hosting workflow compatible with TanStack Start and the configured Cloudflare deployment target.

### Additional commands

| Command | Purpose |
| --- | --- |
| `npm run build:dev` | Build using development mode |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check code with ESLint |
| `npm run format` | Format project files with Prettier; this modifies files |

## Project structure

```text
.
├── public/                     # Public assets, favicon, and robots.txt
├── src/
│   ├── components/ui/          # Reusable UI primitives
│   ├── data/
│   │   └── portfolio.ts        # Editable portfolio content
│   ├── hooks/                  # Shared React hooks
│   ├── lib/                    # Utilities and error handling
│   ├── routes/
│   │   ├── __root.tsx          # Shared document and application shell
│   │   └── index.tsx           # Portfolio page and page metadata
│   ├── test/                   # Tests and test setup
│   ├── routeTree.gen.ts        # Generated route tree; do not edit manually
│   ├── router.tsx             # Router configuration
│   ├── server.ts              # Server entry and error wrapper
│   ├── start.ts               # TanStack Start configuration
│   └── styles.css             # Global styles and design tokens
├── package.json               # Dependencies and runnable commands
├── vite.config.ts             # Development and deployment configuration
├── vitest.config.ts           # Test configuration
└── tsconfig.json              # TypeScript configuration
```

## Update portfolio content

**Edit `src/data/portfolio.ts` for all portfolio content updates.** Pages render the exported data; routine resume or project updates should not require layout changes.

| Export | What to update |
| --- | --- |
| `profile` | Display name, role, tagline, location, email, phone, LinkedIn, GitHub, availability, about paragraphs, and interests |
| `skills` | Skill groups and their technology lists |
| `experience` | Companies, roles, dates, locations, domains, responsibilities, and technology stacks |
| `projects` | Titles, years, categories, descriptions, highlights, stacks, and optional project links |
| `education` | Degrees, schools, dates, and notes |
| `certifications` | Certification names |

### Add a project

Add an object to the existing `projects` array. The following is a template, not an actual portfolio project; replace its content with your own work before saving:

```ts
{
  title: "Your project title",
  year: "2026",
  kind: "Platform · DevTools",
  description: "A concise description of the problem and what you built.",
  highlights: [
    "Describe a key implementation responsibility.",
    "Describe testing, security, or deployment work.",
  ],
  stack: ["React", "TypeScript", "Spring Boot"],
  link: "https://github.com/rayapati1200/your-project",
},
```

The `link` field is optional; omit it when there is no public destination. Array order controls display order, so place the newest or most relevant projects first.

### Content maintenance checklist

1. Keep experience, education, and skills grounded in your latest resume.
2. Describe experience through roles and responsibilities without numerical performance metrics.
3. Keep simulation projects clearly labeled as simulations, separate from employment.
4. Use working public URLs for GitHub, LinkedIn, and project links.
5. Preserve TypeScript quotes, commas, brackets, and the existing object fields.
6. Review the updated page with `npm run dev`, then run `npm test` and `npm run build` before sharing changes.

For intentional visual changes, edit `src/routes/index.tsx` and `src/styles.css` separately from content. Page titles and descriptions are derived from `profile.name`, `profile.role`, and `profile.tagline`.

## Repository and deployment

I maintain this repository as the source for my professional portfolio.

- Keep changes on a working branch and review them before merging into `main`.
- Run the tests and production build before submitting changes.
- Deploy using a TanStack Start-compatible hosting workflow targeting Cloudflare.
- Repository updates alone do not change the live website; deploy the updated build separately.
- Review files for private information before making the repository public.
- The live portfolio link is included above and can also be added to the repository's **About** section.
