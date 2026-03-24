const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ acceptDownloads: true });
  const page = await context.newPage();
  const messages = [];

  page.on('console', (msg) => messages.push(`console:${msg.type()}:${msg.text()}`));
  page.on('pageerror', (err) => messages.push(`pageerror:${err.stack || err.message}`));

  await page.goto('http://127.0.0.1:8123/', { waitUntil: 'networkidle' });
  await page.click('button[data-panel="panel-summary"]');
  await page.click('button[data-scenario="B"]');
  await page.waitForTimeout(500);

  const before = await page.locator('#sum1116-status').innerText();

  const download1Promise = page.waitForEvent('download', { timeout: 15000 });
  await page.click('#sum1116-generate');
  const download1 = await download1Promise;
  const suggested1 = download1.suggestedFilename();
  const path1 = await download1.path();

  let suggested2 = null;
  let path2 = null;
  try {
    const download2 = await page.waitForEvent('download', { timeout: 4000 });
    suggested2 = download2.suggestedFilename();
    path2 = await download2.path();
  } catch (_) {}

  await page.waitForTimeout(500);
  const after = await page.locator('#sum1116-status').innerText();

  console.log(JSON.stringify({
    before,
    after,
    suggested1,
    path1Exists: !!path1,
    suggested2,
    path2Exists: !!path2,
    messages
  }, null, 2));

  await browser.close();
})();
