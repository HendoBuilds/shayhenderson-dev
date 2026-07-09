// Regenerate public/og.png (1200x630 social card) from scripts/og-template.html.
// Usage: node scripts/make-og.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';

const template = fileURLToPath(new URL('./og-template.html', import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`file://${template}`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.png' });
await browser.close();
console.log('wrote public/og.png');
