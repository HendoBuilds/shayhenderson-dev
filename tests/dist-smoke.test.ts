import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { beforeAll, describe, expect, it } from 'vitest';

const distDir = fileURLToPath(new URL('../dist', import.meta.url));

function readDistFile(relativePath: string): string {
  const path = `${distDir}/${relativePath}`;
  if (!existsSync(path)) {
    throw new Error(
      `Missing ${relativePath} in dist/ — run \`npm run build\` before running the smoke tests.`,
    );
  }
  return readFileSync(path, 'utf-8');
}

beforeAll(() => {
  if (!existsSync(distDir)) {
    throw new Error('dist/ does not exist — run `npm run build` before running the smoke tests.');
  }
});

describe('built output smoke tests', () => {
  it('builds the home, CV and 404 pages', () => {
    expect(existsSync(`${distDir}/index.html`)).toBe(true);
    expect(existsSync(`${distDir}/cv/index.html`)).toBe(true);
    expect(existsSync(`${distDir}/404.html`)).toBe(true);
  });

  it('embeds the Person JSON-LD schema and the section nav on the home page', () => {
    const html = readDistFile('index.html');
    expect(html).toContain('application/ld+json');
    expect(html).toContain('"@type":"Person"');
    expect(html).toContain('aria-label="Sections"');
  });

  it('omits the section nav from the 404 page', () => {
    const html = readDistFile('404.html');
    expect(html).not.toContain('aria-label="Sections"');
  });

  it.each([
    ['index.html', 'Shay Henderson'],
    ['cv/index.html', 'CV · Shay Henderson'],
    ['404.html', '404 · Shay Henderson'],
  ])('gives %s a title and a canonical link', (relativePath, expectedTitleFragment) => {
    const html = readDistFile(relativePath);
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    expect(titleMatch).not.toBeNull();
    expect(titleMatch?.[1]).toContain(expectedTitleFragment);
    expect(html).toMatch(/<link rel="canonical" href="https:\/\/shayhenderson\.dev[^"]*">/);
  });
});
