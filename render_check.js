const { chromium } = require('playwright');

(async () => {
  console.log('Capturing responsive renders via Playwright...');
  const browser = await chromium.launch({ headless: true });

  // Desktop Render
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ path: 'clean_exact_render.png', fullPage: true });

  // Mobile Render (iPhone 12 Viewport)
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1' });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: 'mobile_render.png', fullPage: true });

  console.log('Successfully captured clean_exact_render.png and mobile_render.png');
  await browser.close();
})();
