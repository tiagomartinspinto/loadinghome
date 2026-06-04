# Conservation Notes

## Source

Repository:

```text
https://github.com/tiagomartinspinto/loadinghome
```

Public deployment:

```text
https://tiagomartinspinto.github.io/loadinghome/
```

The stable exhibition URL is:

```text
https://tiagomartinspinto.github.io/loadinghome/?mode=exhibition
```

## Technical Description

`Auto da Espera` is a static Vite application using vanilla JavaScript and CSS. The deployed work consists of the built files in `dist`.

Essential source files:

- `index.html`
- `src/main.js`
- `src/styles.css`
- `src/assets/fonts/lekton/Lekton-Regular.ttf`
- `src/assets/fonts/lekton/Lekton-Bold.ttf`
- `vite.config.js`
- `package.json`
- `package-lock.json`
- `.github/workflows/deploy.yml`

The Vite base path must remain:

```js
base: "/loadinghome/"
```

GitHub Pages must use GitHub Actions deployment so the built `dist` folder is served.

## Expected Behavior

The progress state must remain incomplete and must not reach `100%`.

The interface may change labels, case notes, grounds for stay, verification residues, requirements, and log entries. These changes must retain non-resolution.

The form must not submit data. Resetting the work clears visible input fields but keeps the pending condition active.

Exhibition mode must remain slow, procedural, and unresolved.

## Dependencies

Build dependency:

- Vite

Runtime dependencies:

- none beyond a modern browser

Font:

- Lekton, self-hosted in the repository under the SIL Open Font License

## Preservation Package

Recommended preservation materials:

- complete source repository
- built `dist` folder
- package lockfile
- Git commit hash or release tag for the exhibited version
- screenshots or screen recording of the exhibited configuration
- this museum package: `ARTWORK_STATEMENT.md`, `INSTALLATION.md`, `TECH_RIDER.md`, `CONSERVATION.md`

## Integrity Checks

Before exhibition, confirm:

- `npm run build` passes
- `src/main.js` imports `./styles.css`
- built CSS and JavaScript assets load with status `200`
- local Lekton font files load
- no external analytics, APIs, cookies, uploads, or `localStorage` are introduced
- `?mode=exhibition` loads and remains unresolved
- keyboard focus states are visible
- reduced-motion settings are respected
