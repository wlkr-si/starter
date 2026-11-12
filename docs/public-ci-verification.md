# Public verification workflow — 2026-11-12

Base: `ed7ce7e1eb426d4b9e7c046a49803778b654a09d`.

The candidate adds verification for pull requests and pushes to main, gated to public repositories before allocating a standard Ubuntu runner. Each exact Node version, 24.22.3 and 26.8.2, runs the existing `npm ci` and `npm run verify` without weakening or replacing checks. Jobs have a 15-minute timeout; superseded branch/PR runs are cancelled.

Permissions are contents-read only. Checkout does not persist credentials. The official setup-node action's automatic package cache is explicitly disabled. There are no secrets, OIDC/write permissions, deployment/package-publication commands, artifacts, persistent package caches, schedules, manual triggers or settings changes. The existing AGENTS/README statements forbidding or denying hosted Actions were updated only to reflect this explicitly authorized public-only verification.

## Official action pins

The current official release tag references were resolved through GitHub's repository API; each points directly to the following commit. The official `action.yml` inputs and Node 24 action runtimes were also checked.

- [actions/checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1): `3d3c42e5aac5ba805825da76410c181273ba90b1`
- [actions/setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0): `949feb2413d6458794dcd2491c4babbbce0c15c1`

## Local proof on 0o10

- Node 26.8.2 / npm 11.19.1: clean `npm ci` and full `npm run verify` passed.
- Node 24.22.3 / npm 11.19.1: a separate clean `npm ci` and full `npm run verify` passed using the official Linux x64 runtime.
- The temporary Node 24 archive was downloaded from `https://nodejs.org/dist/v24.22.3/`, checked against that release's official `SHASUMS256.txt`, and removed after qualification. Archive SHA-256: `4f2b175a6d53a5c617a80dba2676238a0688cef28c6da4eba35c7d844e66fcfb`.
- Both full gates passed formatting, Astro/TypeScript diagnostics, installed-source provenance hashes, production build and static output/local-runtime-resource/license checks. The existing compiler override remains 0.5.1. npm's existing esbuild install-script warning did not prevent either verified build; no approval/configuration workaround was applied.
- Both full dependency and production-only npm audits report zero findings.
- A YAML 1.2 parser validated the workflow structure, exact triggers, public-only condition, read-only permission map, bounded standard runner, matrix, cancellation and complete intended action/command sequence. Official action inputs were checked against their source metadata. No local actionlint binary was available; this does not substitute for provider workflow validation.
- Every previously tracked file except the two intentionally updated documentation files was compared byte-for-byte with the base. Application code, dependencies/compiler pins, original assets, vendor/helper sources, provenance, notices, identity, version and preview configuration are unchanged. Lockfile SHA-256: `562df00c3883adb176a7b506b8e99596515a9b8786137b34e418498211d3ede4`.

This is local candidate proof only. No workflow has been pushed or run on GitHub by this task. The release owner must obtain the different-model permissions review before push/provider execution, then verify the actual public runs. No application/browser behavior change is proposed. Temporary runtime/archive/checksum, task npm cache and logs are removed at handoff; candidate source, dependencies and build output are retained for the release owner's checks.
