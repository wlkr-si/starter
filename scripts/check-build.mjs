import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { site } from '../src/site.ts';

const html = await readFile('dist/index.html', 'utf8');
const escape = (text) =>
  text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
assert.ok(html.includes(`<title>${escape(site.name)}</title>`));
assert.ok(html.includes('id="main"') && html.includes('Skip to content'));
assert.ok(html.includes('npm run dev'));
assert.ok(html.includes('Pixel sphere'));
for (const tag of html.matchAll(
  /<(?:script|link|img)\b[^>]*(?:src|href)="([^"]+)"/g,
)) {
  const url = tag[1];
  if (url.startsWith('data:')) continue;
  assert.ok(
    url.startsWith('/') && !url.startsWith('//'),
    `Runtime resource must stay local: ${url}`,
  );
  await access(path.join('dist', url));
}
if (site.showStudioBadge) {
  assert.ok(html.includes('href="https://wlkr.si"'));
  assert.ok(html.includes('alt="Part of WLKR.SI"'));
  await access('dist/brand/part-of-wlkr-si-light.svg');
  await access('dist/brand/part-of-wlkr-si-dark.svg');
}
const licenses = await readFile('dist/licenses.txt', 'utf8');
for (const notice of [
  'SIL OPEN FONT LICENSE',
  'MIT License',
  'Apache License',
  'shadcn',
  'WLKR',
])
  assert.ok(licenses.includes(notice), `Missing license notice: ${notice}`);
console.log(
  'Validated static output, local runtime resources, editable identity and distributed notices.',
);
