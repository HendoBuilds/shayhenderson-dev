// Visual verification screenshots. Usage: node scripts/shots.mjs <outdir> [baseUrl]
import { chromium } from 'playwright';

const out = process.argv[2] ?? 'shots';
const base = process.argv[3] ?? 'http://localhost:4321';

const targets = [
  { name: 'index-desktop-dark', path: '/', width: 1440, height: 900 },
  { name: 'index-mobile-dark', path: '/', width: 430, height: 932, scale: 3 },
  { name: 'index-desktop-light', path: '/', width: 1440, height: 900, theme: 'light' },
  { name: 'index-mobile-light', path: '/', width: 430, height: 932, scale: 3, theme: 'light' },
  { name: 'cv-desktop-dark', path: '/cv', width: 1440, height: 900 },
  { name: 'cv-mobile-dark', path: '/cv', width: 430, height: 932, scale: 3 },
];

const browser = await chromium.launch();
for (const t of targets) {
  const ctx = await browser.newContext({
    viewport: { width: t.width, height: t.height },
    deviceScaleFactor: t.scale ?? 1,
  });
  if (t.theme) await ctx.addInitScript((th) => localStorage.setItem('theme', th), t.theme);
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(base + t.path, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900); // let the hero entrance finish
  await page.screenshot({ path: `${out}/${t.name}.png`, fullPage: true });
  if (errors.length) console.log(`CONSOLE ERRORS on ${t.name}:`, errors);
  await ctx.close();
}
await browser.close();
console.log('done');
