const { chromium } = require('playwright');

(async () => {
  console.log('Capturing AI chat modal open render via Playwright...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Click AI Chat Toggle Button
  await page.click('#aiChatToggleBtn');
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'playwright_ai_chat.png', fullPage: false });
  console.log('Successfully captured playwright_ai_chat.png');

  await browser.close();
})();
