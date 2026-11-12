import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Scope optional framework telemetry opt-out to this project's commands.
const manifest = JSON.parse(
  await readFile(
    new URL('../node_modules/astro/package.json', import.meta.url),
    'utf8',
  ),
);
const entry = fileURLToPath(
  new URL(`../node_modules/astro/${manifest.bin.astro}`, import.meta.url),
);
const child = spawn(process.execPath, [entry, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
});
for (const signal of ['SIGINT', 'SIGTERM'])
  process.on(signal, () => child.kill(signal));
child.once('error', (error) => {
  console.error(error.message);
  process.exit(1);
});
child.once('exit', (code, signal) =>
  process.exit(code ?? (signal === 'SIGINT' ? 130 : 1)),
);
