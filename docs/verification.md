# Candidate verification

Qualified locally on 0o10 Linux x64 with Node.js 26.8.2 and npm 11.19.1.
Other operating systems and browser engines were not qualified in this run.

- A clean `npm ci` and `npm run verify` passed. Astro/TypeScript reported zero
  errors, warnings or hints; installed source, badge and license hashes matched.
- Full `npm audit`, including development dependencies, reported zero findings
  at every severity. The temporary shadcn installation tool's npm cache is not
  part of the project's dependency audit.
- An isolated headless Chromium job exercised the built static page on localhost.
  Native clipboard write completed and announced success. Clipboard readback was
  denied by the browser; no read permission was granted. Injected write denial
  showed the honest failure state and retained selectable command text.
- Keyboard theme activation persisted through reload. Injected browser-storage
  denial retained in-memory theme changes. Both light and dark layouts were
  inspected.
- Space paused the actual pixel animation; Enter resumed it. Reduced-motion
  preference stopped changes to the rendered SVG.
- At 320px the document had no horizontal overflow and every button measured at
  least 44px. Desktop layout was inspected at 1440px. All runtime resource
  requests stayed on the local origin; there were no page errors.
- Full-page axe WCAG A/AA audit reported zero violations and zero incomplete
  checks. This is automated/browser evidence, not a claim of universal assistive
  technology coverage.
- The outside-adopter flow was checked in an isolated source fixture: disable
  `showStudioBadge`, remove both badge assets and their provenance entries, then
  run verification. The main starter's source and endorsement remained intact.

The native Astro compiler is narrowly pinned to compatible 0.5.1. Fresh 0.5.3
terminated with an illegal instruction when imported on the qualification host;
0.5.1 loaded and completed the checks. The framework pins remain Astro 7.3.5,
React 19.3.1 and Tailwind 4.3.3.

No repository was published, no deployment was configured and no service was
provisioned during this qualification.
