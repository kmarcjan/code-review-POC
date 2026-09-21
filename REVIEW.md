# Review instructions

These instructions are for automated code review on this repository. This
is a workshop demo repo, so calibrate for a small hobby project, not a
production codebase.

## What counts as Important

Reserve "Important" for findings that would produce a wrong answer, crash
a request, or let a request read/write outside the data it should have
access to:

- Incorrect logic in standings, stats, or filtering (wrong numbers shown
  to the user)
- An API route that uses a request value (query param, path param) to
  read a file, index an array, or build a lookup key without validating
  it against a known-good set first
- A change in one file that breaks an assumption another file relies on
  (a shared type, a helper's return shape, a function's contract)

Formatting, naming, and stylistic preferences are Nit at most.

## Do not report

- Missing tests (this repo has none by design; it's a review-tooling demo)
- Missing auth/rate limiting (no auth system exists in this app on purpose)
- Anything ESLint already enforces

## Always check

- Any new or changed `app/api/**/route.ts` validates path/query params
  against a known-good set (an existing array of ids, an enum) before
  using them in a filesystem read, array index, or object lookup
- Any change to a function in `lib/` that other files call — check
  whether the change is consistent with how it's currently used elsewhere
  in the repo, not just within the diff
