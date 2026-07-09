// Regenerate the PNG icons from public/favicon.svg:
//   public/favicon-96x96.png   — fallback for crawlers/browsers without SVG
//   public/apple-touch-icon.png — 180x180, square background (iOS rounds it)
// Usage: node scripts/make-icons.mjs
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const svg = await readFile('public/favicon.svg', 'utf8');
// iOS masks its own corners: drop the rounded rect for the touch icon
const squareSvg = svg.replace('rx="13"', 'rx="0"');

const targets = [
  { path: 'public/favicon-96x96.png', size: 96, markup: svg },
  { path: 'public/apple-touch-icon.png', size: 180, markup: squareSvg },
];

const browser = await chromium.launch();
for (const { path, size, markup } of targets) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.setContent(
    `<body style="margin:0">${markup.replace('<svg ', `<svg width="${size}" height="${size}" `)}</body>`
  );
  await page.screenshot({ path, omitBackground: true });
  await page.close();
  console.log(`wrote ${path}`);
}
await browser.close();
