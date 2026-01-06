import { launch } from 'puppeteer';

async function capture(name, page, options = {}) {
  const path = `/tmp/pharma_${name}.png`;
  await page.screenshot({ path, fullPage: true, ...options });
  console.log('SCREENSHOT:', path);
}

(async () => {
  const url = 'http://localhost:3000';
  const browser = await launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', (err) => console.log('PAGE ERROR:', err.stack || err));

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // Desktop default
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await sleep(800);
  await capture('desktop_default', page);

  // Toggle sidebar (click trigger) to collapse
  try {
    const trigger = await page.$('[data-slot="sidebar-trigger"]');
    if (trigger) {
      try {
        await trigger.click({ delay: 50 });
      } catch (clickErr) {
        // fallback: use evaluate to dispatch a click if element isn't interactable
        await page.evaluate((sel) => {
          const el = document.querySelector(sel);
          if (el) el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }, '[data-slot="sidebar-trigger"]');
      }
      await sleep(500);
      await capture('desktop_collapsed', page);

      // toggle back (expand)
      try {
        await trigger.click({ delay: 50 });
      } catch (clickErr) {
        await page.evaluate((sel) => {
          const el = document.querySelector(sel);
          if (el) el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }, '[data-slot="sidebar-trigger"]');
      }
      await sleep(500);
      await capture('desktop_expanded', page);
    } else {
      console.log('No sidebar trigger found on page');
    }
  } catch (e) {
    console.log('SIDEBAR TOGGLE ERROR', e.message);
  }

  // Mobile viewport
  await page.setViewport({ width: 375, height: 800, isMobile: true });
  await page.reload({ waitUntil: 'networkidle2' });
  await sleep(800);
  await capture('mobile_default', page);

  // On mobile, clicking the same trigger should open the sheet
  try {
    const triggerMobile = await page.$('[data-slot="sidebar-trigger"]');
    if (triggerMobile) {
      try {
        await triggerMobile.click({ delay: 50 });
      } catch (clickErr) {
        await page.evaluate((sel) => {
          const el = document.querySelector(sel);
          if (el) el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }, '[data-slot="sidebar-trigger"]');
      }

      // wait for the mobile sheet to appear
      try {
        await page.waitForSelector('[data-sidebar="sidebar"][data-mobile="true"]', { timeout: 2000 });
        await sleep(400);
        await capture('mobile_open', page);

        // close by clicking backdrop if present
        const backdrop = await page.$('div[role="presentation"]') || await page.$('.react-sheet-backdrop');
        if (backdrop) {
          try {
            await backdrop.click();
          } catch (err) {
            await page.evaluate((el) => el && el.click(), await page.evaluateHandle(() => document.querySelector('div[role="presentation"]') || document.querySelector('.react-sheet-backdrop')));
          }
          await sleep(300);
          await capture('mobile_closed', page);
        }
      } catch (waitErr) {
        console.log('MOBILE SIDEBAR ERROR', waitErr.message);
      }
    } else {
      console.log('No mobile sidebar trigger found');
    }
  } catch (e) {
    console.log('MOBILE SIDEBAR ERROR', e.message);
  }

  await browser.close();
  console.log('Visual QA complete. Screenshots saved under /tmp/pharma_*.png');
  process.exit(0);
})();
