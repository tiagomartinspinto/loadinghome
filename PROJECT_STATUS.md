# Project Status

## Completed Work

- Created a lightweight Vite app using vanilla JavaScript and CSS.
- Built the first version of `Auto da Espera`.
- Reframed `Loading Home: 97%` as an internal system/status phrase rather than the main title.
- Added the subtitle `A morality form in five pending acts.` and a small footer note explaining the title.
- Added a thin loading bar that moves within an almost-complete range and never reaches `100%`.
- Added quiet rotating loading text.
- Added a sparse missing-photo archive with blank frames, gray placeholders, and small captions.
- Added an abstract map panel with thin grid lines, a moving dot, and non-specific shifting location labels.
- Added subtle label switching between several languages.
- Added an administrative form with birthplace rejection, fake autocomplete, impossible submit states, and a reset link.
- Added a cold internal-review layer inspired by a bureaucratic morality play, with abstract applicant records, review stages, inspection prompts, mistranslation states, and case notes.
- Reworked the archive language and layout toward missing supporting evidence instead of gallery-like or autobiographical material.
- Flattened the surface so the page reads more like one continuous administrative record.
- Strengthened the top case header (`CASE HOME-00097 / STATUS: PENDING / COMPLETION: 97%`) and made `Auto da Espera` quieter on the surface.
- Added procedural pressure driven by the existing `attempts` state and `--pressure` variable, affecting labels, reason-field limits, requirements, status logs, submit states, and evidence captions.
- Added small web-native frictions: dead document links, browser-like protocol residue, unavailable-document responses, and requirements that reopen.
- Added `?mode=exhibition` to slowly simulate pending review activity without completing the case, with reduced-motion support.
- Imported CSS from `src/main.js` and removed the direct stylesheet link from `index.html` while keeping a source-mode stylesheet fallback for branch-based Pages serving.
- Added responsive layout and reduced-motion support.
- Added Vite GitHub Pages base-path configuration for `/loadinghome/`.
- Added a GitHub Pages deployment workflow for building and publishing `dist`.
- Kept source asset paths relative so the page also works if existing Pages settings serve the repository root directly.
- Added README documentation and this project status file.

## Verification Performed

- Ran `npm install` successfully.
- Ran `npm run build` successfully.
- Confirmed the built `dist/index.html` uses `/loadinghome/assets/...` paths.
- Confirmed the source `index.html` uses relative `src/...` asset paths for branch-root Pages compatibility.
- Started the Vite development server with `npm run dev -- --port 5173`.
- Confirmed `http://localhost:5173/` returns `200 OK`.
- Started the Vite preview server with `npm run preview -- --port 4173`.
- Confirmed `http://localhost:4173/loadinghome/` and its hashed JS/CSS assets return `200 OK`.
- Ran a local interaction smoke harness for progress behavior, phrase/map rotation, language switching, birthplace and address uncertainty, autocomplete fills, impossible submit states, reset behavior, and the fixed `97%` status phrase.
- Checked the running `/loadinghome/` preview in the browser for document title, quiet `Auto da Espera` heading, case header, supporting evidence, residence trace, form presence, language/map/progress changes, no console errors, and no horizontal overflow.
- Confirmed `Loading Home: 97%` appears as a system/status phrase, not the main heading.
- Checked the updated internal-review layer in the browser for review stage labels, applicant record status, inspection prompts, mistranslation text, supporting evidence captions, autocomplete suggestions, impossible submit behavior, and reset behavior.
- Checked a 390px mobile viewport for single-column application, scene, and archive layout with no horizontal overflow.
- Checked the colder administrative layout in preview for case header strength, internal review wording, location verification heading, supporting-evidence rows, autocomplete behavior, review-stage changes, and no console errors.
- Checked exhibition mode in preview for automatic pending-review updates and no completion.
- Checked raw static serving with the JavaScript stylesheet fallback after removing the direct stylesheet link.
- Confirmed no external APIs, analytics, uploads, cookies, or `localStorage` were introduced.
- Scanned public-facing files for references to the named assistant/tooling terms, specific countries, and specific cities; no matches were found.
- Scanned for personal identifiers; the only match is the GitHub Pages URL required in `README.md`.

## Files Created Or Changed

- `index.html` - semantic page structure for the artwork.
- `src/main.js` - interaction logic for progress, language switching, residence trace labels, form behavior, autocomplete, internal review stages, case notes, procedural pressure, dead links, exhibition mode, and reset.
- `src/styles.css` - cold minimalist visual system, continuous administrative layout, supporting-evidence rows, and responsive layout.
- `vite.config.js` - Vite configuration with the `/loadinghome/` base path.
- `package.json` - Vite scripts and dependency declaration.
- `.github/workflows/deploy.yml` - GitHub Pages build and deploy workflow.
- `.gitignore` - ignores local dependencies and build output.
- `README.md` - concept, local setup, interaction notes, and privacy note.
- `PROJECT_STATUS.md` - current implementation status and next checks.

## Known Issues

- The map is intentionally symbolic and does not use a geographic API.
- Fake autocomplete supports pointer and focus interaction, but not custom arrow-key navigation.
- The loading state is intentionally impossible to complete.
- One automated fill helper was unavailable in the test browser; keyboard-entry behavior was verified with keypresses, suggestion clicks, submit attempts, and reset.
- The morality-play structure is expressed as review stages and internal notes; there are no staged characters or theatrical visuals.

## Manual Tests To Do Next

- Open the page on desktop and mobile widths.
- Confirm the progress bar never reaches `100%` and `Loading Home: 97%` remains a status phrase.
- Type into `Place of birth` and confirm quiet rejection messages appear.
- Click autocomplete suggestions in birthplace and current address fields.
- Press `Continue` repeatedly and confirm the form remains open.
- Confirm the internal notes, inspection question, supporting evidence captions, and review stages change after repeated interactions.
- Press `start again` and confirm fields, status text, and progress reset.
- Check with reduced motion enabled in the browser or operating system.
