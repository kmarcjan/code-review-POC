@AGENTS.md

# NBA Review PoC — project notes

This is a demo Next.js app used to compare AI code-review tools
(Claude Code, CodeRabbit, Greptile, ...) on real pull requests. It is not a
production app — keep changes small and readable, since PRs here exist to
be reviewed, not to ship features.

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- No database: all data lives in `lib/data.ts` as in-memory mock data
- No auth, no external APIs

## Conventions

- Derived/computed values (standings, filtered rosters) live in `lib/`,
  never computed inline in a component
- API routes under `app/api/**/route.ts` validate query params and path
  params against known-good values before using them (see
  `app/api/players/route.ts` and `app/api/teams/[teamId]/logo/route.ts`
  for the pattern) — do not read from the filesystem or an array index
  using a raw, unvalidated request value
- Components stay presentational; keep data fetching/filtering in `lib/`
  or in the page/route that owns the request

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build (also type-checks)
- `npm run lint` — ESLint
