# WLKR.SI starter

A small static Astro site with React islands, Tailwind CSS and real installed
[WLKR components](https://ui.wlkr.si). The demo copies a local command, pauses a
pixel sphere and changes the display theme. It needs no account or paid service.

[Use this template](https://github.com/wlkr-si/starter/generate)

<a href="https://wlkr.si"><picture><source media="(prefers-color-scheme: dark)" srcset="public/brand/part-of-wlkr-si-dark.svg"><img src="public/brand/part-of-wlkr-si-light.svg" alt="Part of WLKR.SI" width="184" height="32"></picture></a>

## Run locally

Use Node.js 24 or newer and npm. Verified with Node 26.8.2 and
npm 11.19.1. Package downloads need internet access; the running site uses local
assets, including its font.

```sh
npm ci
npm run verify
npm run dev
```

Astro commands opt out of optional framework telemetry for this project only.
Open the local address printed by Astro. To inspect the static build:

```sh
npm run build
npm run preview
```

`verify` checks formatting, Astro/TypeScript, installed-source hashes and the
production build. `dist/` is the static output. There is no deployment script,
host binding, telemetry, API, account configuration or hosted Actions workflow.
Choose and configure a static host separately when you need one.

## Make it yours

1. Edit the name and description in `src/site.ts`; compose the page in
   `src/pages/index.astro` and adjust layout styles in `src/styles/global.css`.
2. Replace the example command and pixel specimen with your own content.
3. Outside the WLKR.SI family, set `showStudioBadge: false` before publishing.
   Remove the README badge, the two badge files and their provenance entries if you no longer
   distribute them. MIT covers code; it grants no WLKR.SI trademark rights or
   endorsement. Keep the badge linked to `https://wlkr.si` when it is authorized.
4. Add your own favicon and production metadata deliberately. The starter does
   not assume a public hostname or advertise a product capability.

The existing `Project` name is an editable placeholder. Clipboard access works on
localhost or HTTPS. If it is unavailable, the command stays selectable. Theme
selection is stored in this browser under `project-theme`; blocked storage falls
back to the control's in-memory preference. Without JavaScript the page and
command remain readable; interactive React controls need JavaScript.

## Components and provenance

Astro 7.3.5, React 19.3.1 and Tailwind 4.3.3 are pinned, with the full dependency
resolution committed in `package-lock.json`. The compatible native compiler is
pinned to `@astrojs/compiler-rs` 0.5.1: 0.5.3 failed to import on the qualification
host with an illegal instruction. Recheck that host before changing the override. Components were installed using the
official CLI at a fixed version:

```sh
npx --yes shadcn@4.22.1 add @wlkr/copy-command @wlkr/pixel-object @wlkr/theme-toggle @wlkr/theme --yes
```

`components.json` points `@wlkr` at `https://ui.wlkr.si/r/{name}.json`. The CLI also
installed stock Button and Toggle and the shared theme hook. Those files are
unchanged after the CLI's framework/import transforms. An app-owned alias bridge
in `src/lib/utils.ts` exports the CLI-installed `cn`; the stock primitives also
require the explicitly pinned `class-variance-authority` dependency.

`provenance/installed.json` records the CLI version, public registry hashes,
source revision and installed file hashes. Registry URLs can change: a future
reinstall is a reviewed source update, not an exact replay. Normal `npm ci` and
builds use the committed files and never fetch registry source. Keep composition
outside the installed component files; see [CONTRIBUTING.md](CONTRIBUTING.md).

Original template code is [MIT](LICENSE). Installed WLKR and shadcn source retains
its upstream notices in `licenses/`; dependencies retain their own licenses.
Geist is SIL OFL, Lucide is ISC and class-variance-authority is Apache-2.0.
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) identifies these boundaries. The
built site includes `/licenses.txt`.
