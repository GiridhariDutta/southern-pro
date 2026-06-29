const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  console.log('Fetching live data from southernprorestoration.com...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  try {
    await page.goto('https://www.southernprorestoration.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(3000);
    
    const textContent = await page.evaluate(() => document.body.innerText);
    fs.writeFileSync('live_site_data.txt', textContent);
    console.log('Successfully saved live_site_data.txt');

    const htmlContent = await page.content();
    fs.writeFileSync('live_site_raw.html', htmlContent);
    console.log('Successfully saved live_site_raw.html');
  } catch (err) {
    console.error('Error scraping:', err.message);
  } finally {
    await browser.close();
  }
})();
