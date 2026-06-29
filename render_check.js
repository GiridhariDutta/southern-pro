const { chromium } = require('playwright');

(async () => {
  console.log('Capturing mobile view render via Playwright...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } }); // iPhone X/12 resolution
  const page = await context.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'mobile_render.png', fullPage: false });

  console.log('Successfully captured mobile_render.png');
  await browser.close();
})();
