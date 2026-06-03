# Project Status

## Completed Work

- Created a lightweight Vite app using vanilla JavaScript and CSS.
- Built the first version of `Auto da Espera`.
- Reframed `Loading Home: 97%` as an internal system/status phrase rather than the main title.
- Replaced the visible subtitle with a colder case-status line; title explanation is kept in README only.
- Added a thin loading bar that moves within an almost-complete range and never reaches `100%`.
- Added quiet rotating loading text.
- Added a sparse supporting-evidence record with blank frames, missing attachments, rejected formats, and small captions.
- Replaced the earlier abstract route/map panel with a colder residence verification table.
- Added subtle label switching between several languages.
- Added an administrative form with birthplace rejection, fake autocomplete, impossible submit states, and a reset link.
- Added a cold internal-review layer inspired by a bureaucratic morality play, with abstract applicant records, review stages, inspection prompts, mistranslation states, and case notes.
- Reworked the archive language and layout toward missing supporting evidence instead of gallery-like or identifiable material.
- Recast location material as administrative verification records rather than symbolic geography.
- Flattened the surface so the page reads more like one continuous administrative record.
- Strengthened the top case header (`CASE HOME-00097 / STATUS: PENDING / COMPLETION: 97%`) and made `Auto da Espera` quieter on the surface.
- Added procedural pressure driven by the existing `attempts` state and `--pressure` variable, affecting labels, reason-field limits, requirements, status logs, submit states, and evidence captions.
- Added small web-native frictions: dead document links, browser-like protocol residue, unavailable-document responses, and requirements that reopen.
- Added `?mode=exhibition` to slowly simulate pending review activity without completing the case, with reduced-motion support.
- Imported CSS from `src/main.js` and removed the direct stylesheet link from `index.html`.
- Removed the visible in-artwork explanation of the title so the interface remains less didactic; README retains the contextual title note.
- Sharpened user-facing language so the administrative voice is colder, more direct, and clearer about labor, residence, evidence, and non-belonging.
- Replaced softer status, review, translation, evidence, and reset language with more direct administrative refusals while keeping the interface restrained.
- Removed color-coded status states so refusal, validity, and protocol residue are carried by text and structure.
- Tightened the most recent pass for museum/kiosk presentation with larger base text, more deliberate spacing, slower exhibition-mode pacing, less slogan-like copy, and formal evidence record numbering.
- Made pressure progression less twitchy by reviewing typed fields in deliberate steps rather than reacting to every character.
- Recast the surface toward a fictional public-service residence/case form with an application record table, disabled case checks, and status rows that never resolve.
- Added first-screen address and person status rows so validity and non-confirmation are visible immediately.
- Removed the visual route/moving-dot metaphor and replaced it with official-looking verification fields.
- Switched the artwork to a strict black-and-white system palette with grayscale hierarchy only.
- Removed the remaining color-coded progress, protocol, link, status, evidence, focus, and warning states.
- Restored the compact museum-form layout proportions after the monochrome pass: 1080px page width, 15px base type, and a four-column application record.
- Self-hosted Lekton locally under `src/assets/fonts/lekton` for offline-friendly museum/kiosk presentation.
- Added responsive layout and reduced-motion support.
- Added Vite GitHub Pages base-path configuration for `/loadinghome/`.
- Added a GitHub Pages deployment workflow for building and publishing `dist`.
- Kept the Vite production build compatible with GitHub Pages under `/loadinghome/`.
- Added README documentation and this project status file.

## Verification Performed

- Ran `npm install` successfully.
- Ran `npm run build` successfully.
- Ran `npm run build` successfully after the final verification-table pass.
- Ran `npm run build` successfully after the monochrome presentation pass.
- Ran `node --check src/main.js` and `node --check vite.config.js` successfully.
- Confirmed the built `dist/index.html` uses `/loadinghome/assets/...` paths.
- Started the Vite development server with `npm run dev -- --port 5173`.
- Confirmed `http://localhost:5173/` returns `200 OK`.
- Started the Vite preview server with `npm run preview -- --port 4173`.
- Confirmed `http://localhost:4173/loadinghome/` and its hashed JS/CSS assets return `200 OK`.
- Confirmed `http://localhost:4173/loadinghome/?mode=exhibition` returns `200 OK`.
- Confirmed the built preview HTML contains the residence verification record and no visual route diagram.
- Checked normal mode in the browser for the case record, residence verification record, monochrome progress/protocol/link styles, and no console errors.
- Checked `?mode=exhibition` in the browser for automatic-review activation and no console errors.
- Checked the compact monochrome layout in the browser for 1080px page width, 15px base type, four application-record columns, no horizontal overflow, normal mode, exhibition mode, and no console errors.
- Ran a local interaction smoke harness for progress behavior, phrase/verification rotation, language switching, birthplace and address uncertainty, autocomplete fills, impossible submit states, reset behavior, and the fixed `97%` status phrase.
- Checked the running `/loadinghome/` preview in the browser for document title, quiet `Auto da Espera` heading, case header, supporting evidence, residence verification, form presence, language/verification/progress changes, no console errors, and no horizontal overflow.
- Confirmed `Loading Home: 97%` appears as a system/status phrase, not the main heading.
- Checked the updated internal-review layer in the browser for review stage labels, applicant record status, inspection prompts, mistranslation text, supporting evidence captions, autocomplete suggestions, impossible submit behavior, and reset behavior.
- Checked 1280px desktop and 390px mobile preview widths for responsive layout with no horizontal overflow.
- Checked the colder administrative layout in preview for case header strength, internal review wording, location verification heading, supporting-evidence rows, autocomplete behavior, review-stage changes, and no console errors.
- Checked exhibition mode in preview for automatic pending-review updates and no completion.
- Confirmed no external APIs, analytics, uploads, cookies, or `localStorage` were introduced.
- Added README installation guidance for fullscreen browser or kiosk presentation.
- Scanned public-facing files for references to the named assistant/tooling terms, specific countries, and specific cities; no matches were found.
- Scanned for personal identifiers; the only match is the GitHub Pages URL required in `README.md`.

## Files Created Or Changed

- `index.html` - semantic page structure for the artwork.
- `src/main.js` - interaction logic for progress, language switching, residence verification records, form behavior, autocomplete, internal review stages, case notes, procedural pressure, dead links, exhibition mode, and reset.
- `src/styles.css` - cold minimalist visual system, continuous administrative layout, supporting-evidence rows, and responsive layout.
- `vite.config.js` - Vite configuration with the `/loadinghome/` base path.
- `package.json` - Vite scripts and dependency declaration.
- `.github/workflows/deploy.yml` - GitHub Pages build and deploy workflow.
- `.gitignore` - ignores local dependencies and build output.
- `README.md` - concept, local setup, interaction notes, and privacy note.
- `PROJECT_STATUS.md` - current implementation status and next checks.

## Known Issues

- The residence verification record is fictional and does not use a geographic API or real location service.
- Fake autocomplete supports pointer and focus interaction, but not custom arrow-key navigation.
- The loading state is intentionally impossible to complete.
- `start again` clears fields and restarts the visible pass, but it intentionally keeps the pending condition active.
- The morality-play structure is expressed as review stages and internal notes; there are no staged characters or theatrical visuals.

## Manual Tests To Do Next

- Open the page on desktop and mobile widths.
- Confirm the progress bar never reaches `100%` and `Loading Home: 97%` remains a status phrase.
- Type into `Place of birth` and confirm quiet rejection messages appear.
- Click autocomplete suggestions in birthplace and current address fields.
- Press `Continue` repeatedly and confirm the form remains open.
- Confirm the internal notes, inspection question, residence verification rows, supporting evidence captions, and review stages change after repeated interactions.
- Press `start again` and confirm fields clear while the pending condition remains.
- Check with reduced motion enabled in the browser or operating system.
- Repeat visual browser QA on the final verification-table pass at fullscreen 16:9 and mobile widths.
