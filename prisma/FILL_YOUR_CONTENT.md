# Fill your portfolio content manually

Use **Prisma Studio** (`npm run db:studio`) or your SQL client to edit these tables.

## Profile (single row, `id = 1`)

| Field      | What to fill                                                 |
| ---------- | ------------------------------------------------------------ |
| `name`     | Azriel Winnermore Zebua                                      |
| `headline` | Short tagline (e.g. Informatics Student · Android Developer) |
| `bio`      | About-me paragraph                                           |
| `email`    | Contact email (optional)                                     |
| `location` | City / country (optional)                                    |
| `imageUrl` | Path to photo, e.g. `/images/profile/profile.png`            |

## SocialLink

Add one row per platform. Lower `order` = shown first (left to right).

| Field      | What to fill                                            |
| ---------- | ------------------------------------------------------- |
| `platform` | Label, e.g. GitHub                                      |
| `url`      | Full profile URL                                        |
| `iconUrl`  | Path under `public/`, e.g. `/images/socials/github.svg` |
| `order`    | Display order (0, 1, 2, …)                              |

## Skill

| Field      | What to fill                                  |
| ---------- | --------------------------------------------- |
| `name`     | Skill name (used for icon color on the site)  |
| `iconUrl`  | Path to SVG under `public/images/tech/`       |
| `category` | Group label, e.g. Languages, Databases, Tools |
| `order`    | Sort order within the page                    |

Icon colors are defined in `src/lib/skill-colors.ts` — add your skill name there if you add new technologies.

## Experience

| Field          | What to fill                           |
| -------------- | -------------------------------------- |
| `title`        | Role or position                       |
| `organization` | School, company, or lab name           |
| `location`     | Optional                               |
| `description`  | What you did                           |
| `startDate`    | Start date                             |
| `endDate`      | End date, or leave empty if ongoing    |
| `isCurrent`    | `true` if this is your current role    |
| `order`        | Timeline order (0 = top / most recent) |

## Project

| Field         | What to fill                            |
| ------------- | --------------------------------------- |
| `title`       | Project name                            |
| `description` | Short summary                           |
| `imageUrl`    | Thumbnail path under `public/`          |
| `githubUrl`   | Repository URL                          |
| `liveUrl`     | Demo URL, or leave empty                |
| `techStack`   | Array of tags, e.g. `Next.js`, `Kotlin` |
| `featured`    | `true` for large cards on the homepage  |
| `order`       | Display order                           |

---

`prisma/seed.ts` is only for resetting demo data. Prefer editing the database directly so your content is not overwritten on re-seed.
