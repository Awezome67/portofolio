# Portfolio — agent guide

Personal portfolio for an informatics student: about, social links, skills, experience, and projects. Content lives in **PostgreSQL** and is rendered by **Next.js** (App Router).

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, React 19, Turbopack in dev) |
| Styling | Tailwind CSS v4 (`src/app/globals.css`, `@import "tailwindcss"`) |
| Database | PostgreSQL |
| ORM | Prisma 7 with `@prisma/adapter-pg` (driver adapter required) |
| Fonts | Outfit (sans), JetBrains Mono (mono) via `next/font` |

## Next.js (read before changing app code)

<!-- BEGIN:nextjs-agent-rules -->
This is **not** the Next.js version from older training data. APIs, conventions, and file structure may differ.

Before writing or refactoring Next.js code, read the relevant guide in `node_modules/next/dist/docs/` and follow deprecation notices.
<!-- END:nextjs-agent-rules -->

## Repository layout

```
src/
  app/
    layout.tsx          # Root layout, fonts, metadata
    page.tsx            # Home (server component, fetches all data)
    globals.css         # Design tokens, mesh/grid, glass utilities
  components/portfolio/ # Section UI (Header, Hero, About, Skills, …)
  lib/
    prisma.ts           # Singleton PrismaClient + PrismaPg adapter
    skill-colors.ts     # Brand tint map for monochrome skill SVGs
    format.ts           # Date formatting for experience timeline
prisma/
  schema.prisma         # Data models
  migrations/           # SQL migrations (do not delete applied folders)
  seed.ts               # Optional demo data reset
  FILL_YOUR_CONTENT.md  # Human guide for editing content in Prisma Studio
public/images/
  profile/              # Profile photo
  socials/              # Social icon SVGs
  tech/                 # Skill icon SVGs
  projects/             # Project thumbnails
```

## Environment

- **`DATABASE_URL`** — PostgreSQL connection string (required). Loaded via `dotenv` in `prisma.config.ts` and at runtime for Prisma.
- **`.env`** is gitignored; never commit secrets.

## Database & Prisma 7

- Schema: `prisma/schema.prisma`
- Config: `prisma.config.ts` (migrations path, seed command, datasource URL)
- **Prisma 7 requires a driver adapter.** Client is created in `src/lib/prisma.ts`:

  ```ts
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  new PrismaClient({ adapter });
  ```

- Do **not** use `new PrismaClient()` without `{ adapter }` or `{ accelerateUrl }`.
- After schema changes: `npm run db:migrate` then `npx prisma generate`.
- `Skill` uses column **`iconUrl`** (not `path`). If migrations fail, check `_prisma_migrations` and that every folder under `prisma/migrations/` contains a `migration.sql`.

### Models

| Model | Purpose |
|-------|---------|
| `Profile` | Single row (`id = 1`): name, headline, bio, email, location, imageUrl |
| `SocialLink` | Platform links; sorted by `order` |
| `Skill` | Tech stack; `name`, `iconUrl`, `category`, `order` |
| `Experience` | Timeline entries; `isCurrent`, `startDate`, `endDate` |
| `Project` | Portfolio projects; `techStack[]`, `featured`, `githubUrl`, `liveUrl` |

### Content editing (owner workflow)

The site owner fills content **manually** in Prisma Studio (`npm run db:studio`). See `prisma/FILL_YOUR_CONTENT.md`.

- **`prisma/seed.ts`** — optional reset only; running seed **deletes and recreates** socials, skills, experience, and projects.
- **`src/components/portfolio/About.tsx`** — three static highlight cards (`// FILL` comments); not in the database.

## Page data flow

`src/app/page.tsx` is a **server component** with `export const dynamic = "force-dynamic"` (reads DB on each request).

Parallel fetch: `profile`, `socialLink`, `skill`, `experience`, `project` (all `orderBy: { order: "asc" }` where applicable).

If `Profile` row `id = 1` is missing, a setup placeholder is shown with migrate/seed instructions.

## UI & styling conventions

- **Theme:** dark navy (`--bg-deep`), cyan/violet accents, glass cards (`.glass`, `.glass-hover`), gradient headings (`.text-gradient`).
- **Sections:** anchor IDs — `#home`, `#about`, `#skills`, `#experience`, `#projects`, `#contact`.
- **`Header.tsx`** is a client component (scroll state); other sections are server components unless they need hooks.
- Prefer **minimal diffs**; match existing Tailwind patterns and component structure.
- Static assets: paths from DB are served from `public/` (e.g. `/images/tech/javascript.svg`).

## Skill icons

Logic in `src/components/portfolio/SkillIcon.tsx`:

1. **Multicolor SVGs** — listed in `MULTICOLOR_ICONS`; rendered with `next/image` (original colors). Current paths:
   - `/images/tech/linux2.svg`
   - `/images/tech/firebase.svg`
   - `/images/tech/androidstudio.svg`
2. **Monochrome SVGs** — CSS mask + fill from `src/lib/skill-colors.ts` by skill `name`. Add `{ "Skill Name": "#hex" }` for new tinted icons.

To show a new multicolor icon: add its `iconUrl` to `MULTICOLOR_ICONS`, not to `SKILL_COLORS`.

## npm scripts

| Script | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Lint | `npm run lint` |
| Migrate (dev) | `npm run db:migrate` |
| Prisma Studio | `npm run db:studio` |
| Seed (destructive for content tables) | `npm run db:seed` |

## Common pitfalls

- **Prisma column mismatch** — schema says `iconUrl` but DB has `path` → run `npx prisma migrate deploy`.
- **Build/runtime Prisma error** — missing `DATABASE_URL` or adapter; regenerate client after schema changes.
- **Stale `.next` cache** — if schema/DB changed but UI errors persist: delete `.next` and restart `npm run dev`.
- **React Compiler** — enabled in `next.config.ts` (`reactCompiler: true`); avoid patterns that fight the compiler without reason.
- **Do not** commit `.env`, credentials, or force-push `main` unless explicitly requested.

## Agent workflow

1. Read this file and relevant source before editing.
2. For Next.js behavior, consult `node_modules/next/dist/docs/`.
3. Content changes → document Prisma Studio / `FILL_YOUR_CONTENT.md`; code changes only for layout, features, or schema.
4. Schema changes → migration + `prisma generate`; never hand-edit applied migration history.
5. Keep portfolio sections consistent (spacing, `SectionHeading`, glass cards).
6. Run `npm run build` after non-trivial changes when verifying fixes.
