# NBA Review PoC

A small demo project (Next.js, NBA data) built to compare free AI code
review tools on real pull requests. Meant as material for a follow-up
mini-workshop.

## What's here

- Next.js 16 (App Router) + TypeScript + Tailwind
- Mock data: teams, players, game results (`lib/data.ts`)
- League standings computed from results (`lib/standings.ts`)
- Two API routes — `/api/players`, `/api/standings` — plus one that serves
  a team logo from disk (`/api/teams/[teamId]/logo`), written so it's easy
  to show the difference between a "safe" and a "vulnerable" version
- `bug/*` and `nit/*` branches with intentionally injected issues for
  testing the tools (see below)

## Run locally

```bash
npm install
npm run dev
```

## Three free tools to compare

All three can be set up without a paid plan:

### 1. Claude Code (GitHub Action, using a Pro subscription — no API billing)

1. Locally, signed in to an account with a Pro subscription, generate a
   token:
   ```bash
   claude setup-token
   ```
2. In the repo's GitHub settings: **Settings → Secrets and variables →
   Actions → New repository secret**, name it `CLAUDE_CODE_OAUTH_TOKEN`,
   and paste the generated token as the value.
3. The workflow `.github/workflows/claude-review.yml` is already in the
   repo — it runs automatically on every pull request (drafts excluded).
4. Usage counts against your Pro subscription's limits, not separate API
   billing.

The reviewer's rules live in `REVIEW.md` and `CLAUDE.md` in this repo —
edit them and see how the review changes.

### 2. CodeRabbit (free for public repositories)

1. Go to [coderabbit.ai](https://coderabbit.ai) and sign in with GitHub.
2. Install the CodeRabbit App on this repo (it must be **public** to be
   free).
3. Done — CodeRabbit will start reviewing new PRs automatically.

### 3. Greptile (free Starter plan)

1. Go to [greptile.com](https://www.greptile.com) and sign in with GitHub.
2. Pick the **Starter** plan (free, for one active developer) and connect
   this repo.
3. Greptile indexes the repo and starts reviewing new PRs.

> Double-check during sign-up whether the free plan actually requires a
> credit card — free-tier terms change from time to time on the vendor's
> side.

## Workshop scenarios (bug branches)

Each branch is one PR to open against `main`, to see what each tool
catches:

| Branch                    | Type of issue                                                      | What it tests                                                                  |
| ------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `bug/standings-tiebreak`  | subtle logic bug in the standings calculation                      | whether the tool understands the _meaning_ of the numbers, not just the syntax |
| `bug/logo-path-traversal` | security vulnerability (path traversal) in an API route            | whether the tool catches a real security hole                                  |
| `bug/cross-file-break`    | a change in `lib/` that breaks another file the diff doesn't touch | whether the tool understands the whole repo's context, not just the diff       |
| `nit/formatting-only`     | a purely stylistic change, no logic change                         | how much noise (nitpicking) the tool generates on a harmless change            |

Suggested workshop flow:

1. Open a PR from each branch into `main`.
2. Wait for all three tools to finish their reviews.
3. Compare results: what each tool caught, what it missed, how many false
   positives, how long it took, and how the comments read.
4. Show `REVIEW.md` / `CLAUDE.md` and change a rule in them — compare how
   Claude Code reacts versus tools that don't support this kind of
   repo-level configuration.
