import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';

const manifest = JSON.parse(
  await readFile('provenance/installed.json', 'utf8'),
);
for (const [file, expected] of Object.entries(manifest.files)) {
  const actual = createHash('sha256')
    .update(await readFile(file))
    .digest('hex');
  assert.equal(
    actual,
    expected,
    `Upstream source changed: ${file}. Review and record a new official install.`,
  );
}
for (const directory of [
  'src/components/wlkr',
  'src/components/ui',
  'src/hooks',
]) {
  const actual = (await readdir(directory))
    .map((name) => `${directory}/${name}`)
    .sort();
  const recorded = Object.keys(manifest.files)
    .filter((name) => name.startsWith(`${directory}/`))
    .sort();
  assert.deepEqual(actual, recorded, `Unrecorded vendor files in ${directory}`);
}
console.log(
  `Verified ${Object.keys(manifest.files).length} installed source, license and badge hashes.`,
);
