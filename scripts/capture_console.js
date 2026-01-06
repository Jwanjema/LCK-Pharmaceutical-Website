const puppeteer = require('puppeteer');

(async () => {
  const url = 'http://localhost:3000';
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  const logs = [];
  page.on('console', msg => {
    const text = `${msg.type().toUpperCase()}: ${msg.text()}`;
    logs.push(text);
    console.log(text);
  });
  page.on('pageerror', err => {
    const text = `PAGE ERROR: ${err.stack || err}`;
    logs.push(text);
    console.log(text);
  });
  page.on('requestfailed', req => {
    const text = `REQ FAILED: ${req.url()} ${req.failure().errorText}`;
    logs.push(text);
    console.log(text);
  });

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });
  } catch (e) {
    console.log('NAV ERROR:', e.message);
  }

  // wait a bit for runtime errors (use fallback if API missing)
  if (typeof page.waitForTimeout === 'function') {
    await page.waitForTimeout(2000);
  } else {
    await new Promise((r) => setTimeout(r, 2000));
  }

  const html = await page.evaluate(() => document.getElementById('root')?.innerHTML || '');
  console.log('--- ROOT HTML START ---');
  console.log(html.slice(0, 2000));
  console.log('--- ROOT HTML END ---');

  const screenshotPath = '/tmp/pharma_screenshot.png';
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log('SCREENSHOT:', screenshotPath);

  await browser.close();
  // exit success
  process.exit(0);
})();
