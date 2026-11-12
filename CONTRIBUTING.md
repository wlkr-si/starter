# Contributing

Use Node.js 24+ and npm. Run `npm ci` and `npm run verify` before submitting a
change. Keep the lockfile, local assets and license notices. Never commit secrets,
installed dependencies or generated output.

Compose examples in the page or new app-owned components. Keep installed files
under `src/components/ui`, `src/components/wlkr` and `src/hooks` unchanged. To
refresh them, review the registry source and license terms, use the pinned
`shadcn@4.22.1` CLI, inspect its complete diff and update the provenance receipt
only after verifying the new source. Preserve official stock code. The theme
variables are app-owned and can be edited without rewriting the components.

For UI changes, check a 320px phone layout, keyboard focus and activation, both
themes, blocked clipboard behavior and reduced motion. The pixel canvas toggles
pause with click, Enter or Space. Confirm there are no console errors or remote
runtime resource requests.

Before a source release, repeat the clean install, run the complete gate and
`npm audit` (include development dependencies). Record the commit, checks and
any remaining advisories honestly. Review the generated static page locally.
Publishing a repository or choosing a host is a separate step; this template
contains no automated release or production deployment configuration.
