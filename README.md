# Auto da Espera

`Auto da Espera` is a minimalist administrative web artwork about immigration as a permanent state of almost-arrival. The page behaves like a fictional public-service case system: it verifies residence, converts statements into records, reopens requirements, and never completes. `Loading Home: 97%` remains inside the work as a system/status phrase.

The work borrows from residence-permit forms, browser loading states, missing supporting evidence, and case-management records. It is a fictional administrative interface, not an official service, and it does not use official branding, real form IDs, or real instructions. Its pressure comes from small refusals, repeated checks, and a decision that refuses to call itself final.

The title can be read as `The Play of Waiting` or `The Morality Play of Waiting`. It loosely echoes the Portuguese theatrical form `auto`, associated with short allegorical and moral plays, while `espera` means waiting.

It is informed by public discourse around migration, racism, bureaucracy, and belonging, including migrant-led media contexts, but it does not reproduce, process, quote, or summarize real personal stories. The voices in the interface are original allegorical roles: clerks, forms, queues, witnesses, stamps, and other institutional figures.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production files:

```bash
npm run build
```

The app is configured for GitHub Pages under the repository path `/loadinghome/`.

Public URL:

```text
https://tiagomartinspinto.github.io/loadinghome/
```

## Interaction Notes

- The progress bar moves between an almost-finished range and never reaches `100%`.
- Small interface labels slowly shift between several languages.
- The supporting evidence section uses empty record frames and missing-file placeholders instead of real photos.
- The residence verification area is a fictional status record, not a map or real location service.
- Birthplace and address fields show fake browser-like suggestions.
- The form never submits anywhere; each attempt leaves the application open.
- Internal review notes and review stages shift as the case is repeatedly checked.
- Repeated attempts increase procedural pressure: labels harden, explanations become more constrained, requirements accumulate, and evidence captions become more procedural.
- `start again` clears fields but keeps the pending condition active.

## Exhibition Mode

Append `?mode=exhibition` to slowly simulate review activity for gallery display:

```text
https://tiagomartinspinto.github.io/loadinghome/?mode=exhibition
```

The mode opens pending reviews, updates case notes, changes supporting evidence captions, and never completes the case. Automatic review pauses when `prefers-reduced-motion` is enabled.

## Installation

Recommended presentation: fullscreen browser or kiosk mode on a dedicated monitor. The work can be shown interactively or unattended using `?mode=exhibition`.

For gallery display, use a modern desktop browser with the address bar hidden when possible. No server-side component is required after the static build is deployed.

The Lekton font is self-hosted in the repository under the SIL Open Font License, so the deployed artwork does not need a font request to an external service.

## Privacy

No analytics, tracking, external APIs, cookies, or uploads are used. Form entries stay only in the current browser session. The app does not use `localStorage`; any interaction state is temporary and local to the current page session.
