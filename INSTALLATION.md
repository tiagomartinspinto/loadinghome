# Installation Notes

## Public Presentation

Primary URL:

```text
https://tiagomartinspinto.github.io/loadinghome/
```

Exhibition mode:

```text
https://tiagomartinspinto.github.io/loadinghome/?mode=exhibition
```

## Display

Recommended setup:

- one dedicated monitor or projection surface
- modern desktop browser
- fullscreen or kiosk mode
- black or neutral surrounding environment
- no browser toolbar visible when possible
- no audio equipment required

The work is designed for both interactive viewing and unattended display. For unattended presentation, use the exhibition mode URL.

## Local Build

Install dependencies:

```bash
npm install
```

Build the static files:

```bash
npm run build
```

Preview the built work:

```bash
npm run preview
```

The production build is written to `dist`.

## Offline Or Local Serving

The work is static after build. It can be served from the `dist` folder by any local static file server. Because the Vite base path is `/loadinghome/`, local serving should preserve that path or use a server configuration that maps `/loadinghome/` to `dist`.

No server-side code is required. No internet connection is required after the built files are available locally, except when using the public GitHub Pages URL.

## Restart

If the browser or display machine is restarted:

1. Open the public URL or local static URL.
2. Enter fullscreen or kiosk mode.
3. Use `?mode=exhibition` for unattended display.

The work does not store visitor input. Restarting the browser returns the case to its initial pending condition.
