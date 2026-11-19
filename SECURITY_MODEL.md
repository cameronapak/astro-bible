# Security model — Astro Bible

What this system protects, who can reach it, and which attackers count. Security scans and reviewers use it to judge findings. Facts marked **(owner)** come from the repo owner; the rest is drawn from the code.

## Components

| Component | Code |
|---|---|
| Astro Bible | whole repo (static demo using the React SDK) |

## Trust boundaries and entry points

static site; only a public YouVersion App Key.

## Assets

All assets matter equally **(owner)**.

- The YouVersion sign-in flow for visitors (tokens are held by the React SDK).

## Attackers that matter

Every attacker below matters **(owner)**.

- Anonymous internet user (no login of its own).

## Existing controls

Static site; only a public YouVersion App Key is shipped.

## Out of scope / accepted risk

Nothing is out of scope; demo, prototype and tooling code count too **(owner)**.
