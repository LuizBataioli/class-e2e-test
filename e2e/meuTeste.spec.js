import { test, expect } from '@playwright/test';

test('Autenticação básica com credenciais corretas em outro site', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  await page.click('button[type="submit"]');

  await page.waitForURL('https://the-internet.herokuapp.com/secure');

  const successMessage = await page.locator('div.flash.success').textContent();
  expect(successMessage).toContain('You logged into a secure area!');
});
