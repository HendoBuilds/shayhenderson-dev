// Regenerate public/shay-henderson-cv.pdf from the built /cv page.
// Usage: node scripts/make-cv-pdf.mjs [baseUrl]  (default http://localhost:4321)
import { chromium } from 'playwright';

const base = process.argv[2] ?? 'http://localhost:4321';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.emulateMedia({ media: 'print' });
await page.goto(`${base}/cv`, { waitUntil: 'networkidle' });
await page.pdf({
  path: 'public/shay-henderson-cv.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '12mm', bottom: '12mm', left: '14mm', right: '14mm' },
});
await browser.close();
console.log('wrote public/shay-henderson-cv.pdf');
