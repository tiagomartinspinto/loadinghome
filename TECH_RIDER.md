# Technical Rider

## Work

Title: `Auto da Espera`

Format: browser-based digital artwork

Runtime: static HTML, CSS, and JavaScript built with Vite

Sound: none

Network: not required for local installation after build

## Hardware

Recommended:

- desktop or mini PC capable of running a current Chromium, Firefox, or Safari browser
- monitor or projector at 1920 x 1080 or higher
- keyboard and mouse or trackpad for interactive display

Optional unattended mode:

- no input device visible to visitors
- browser in kiosk or fullscreen mode

## Software

Recommended:

- current desktop browser
- local static file server for offline installation
- Node.js only for rebuilding or previewing from source

The public version is deployed through GitHub Pages from the built Vite `dist` folder.

## Presentation

Use one browser window only. Avoid visible browser chrome, bookmarks bars, notification overlays, or operating-system dialogs.

Recommended URL for unattended presentation:

```text
https://tiagomartinspinto.github.io/loadinghome/?mode=exhibition
```

The exhibition mode cycles slowly through case states and remains unresolved. It pauses automatic review when the visitor system has `prefers-reduced-motion` enabled.

## Accessibility And Motion

The work includes keyboard focus states, semantic records, ARIA live regions, and reduced-motion support. If reduced motion is enabled at the operating-system level, animations are minimized and exhibition automation is paused.

## Privacy And Data

The work does not use analytics, cookies, uploads, external API calls, or `localStorage`. Form entries stay only in the current browser session and are not transmitted.
