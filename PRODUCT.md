# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static site). Each proposal reads SITE_URL and BASE_PATH so it builds for GitHub Pages (/Web-CanovellesBC/opcio-N/) or the club domain (canovellesbc.com). The final host is planned to be Netlify.

## Users

Primary: families in Canovelles and the Vallès Oriental looking for a place for their children to play basketball. They arrive from a phone, often after hearing about the club at school or from another parent, and want to know quickly: is this for my child's age, where and when do they train, how do we sign up, and is this a place where my kid will be looked after.

Secondary (not prioritised on the home page): players and families already in the club, sponsors, and rival clubs looking for tournaments.

## Product Purpose

The website of Canovelles Bàsquet Club. This repository holds several competing design proposals (opcio-1, opcio-2, ...), each an independent Astro project published under its own subfolder on GitHub Pages behind a chooser page (portada/). New proposals deliver the home page plus the pre-registration page. Success for the home page: a new family understands within one scroll that the club teaches basketball from the youngest ages, sees which group fits their child, and reaches the pre-registration / contact step.

## Positioning

A small neighbourhood club in Canovelles with its own school since 2000 and teams from Escoleta up to veterans. It is not an elite academy: its claim is belonging and care ("som un club petit, però els nostres jugadors són molt grans"), and every team in the club grew from the school.

## Operating Context

- Season 2026-27. Training and home games at the Pavelló Municipal de Canovelles, C/ Diagonal, s/n, 08420 Canovelles (Barcelona).
- Competition is federated through the Federació Catalana de Bàsquet (basquetcatala.cat).
- Contact: canovellesbc@canovellesbc.com (general), juntadirectiva@canovellesbc.com (board).
- Language of the site: Catalan.

## Capabilities and Constraints

- Static site; no backend. Pre-registration and contact forms have no service decided yet (open decision).
- Real social media URLs are not known yet; do not invent them.
- Training schedules and fees per group are not available yet; do not invent them.

## Brand Commitments

- Name: Canovelles Bàsquet Club (short: Canovelles BC). Motto: #SomClubSomFamília. Founded 1995.
- Crest: the club's official shield (blue/yellow split shield, orange ball going through a hoop with a black net, green "Canovelles Basket Club" lettering). Vector version at `opcio-1/public/escut.svg`. The crest is fixed; it must not be redrawn or recoloured. The user rejected a variant with a white outline for dark backgrounds.
- The user wants a web palette more modern than the crest's light blue and bright yellow, chosen so the crest sits naturally on it.
- The result must not look AI-generated or templated.

## Evidence on Hand

- Facts: founded 1995; school created March 2000; 18 teams in 2026-27 across Escola (Escoleta, Escobol), Formació (Pre-Mini to Júnior), Sèniors (Sots-21, Sots-25, first teams) and Veterans; club values: Generositat, Respecte, Pertinença, Compromís, Humilitat, Perseverança.
- School stages: Escoleta (first contact with the ball through play), Escobol (first rules and first games, result matters least), Pre-Mini and Mini (age-adapted federated competition).
- Photos (real, from the club): `opcio-1/src/assets/fotos/` (canovelles-blue-2.jpg, canovelles-blue-3.jpg, canovelles-fotofamilia-1.jpg, comisio-home.jpg, home-blue-mini.png).
- No testimonials, results, membership numbers beyond the team count, or press. Do not fabricate them.

## Product Principles

1. Parents first on the home page: age fit, place, and how to join before anything else.
2. Real club, real people: real photos and facts over generic sport imagery or claims.
3. The crest is the identity anchor; everything else adapts to it.
4. Plain, warm Catalan; a neighbourhood club talking to neighbours.

## Accessibility & Inclusion

Mobile-first (most parents arrive on phones). WCAG 2.1 AA contrast for text, including over photos.
