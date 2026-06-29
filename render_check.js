const { chromium } = require('playwright');

(async () => {
  console.log('Capturing clean exact render via Playwright...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'clean_exact_render.png', fullPage: true });
  console.log('Successfully captured clean_exact_render.png');

  await browser.close();
})();
