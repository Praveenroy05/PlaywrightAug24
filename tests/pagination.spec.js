import {test, expect} from '@playwright/test'
  
  test('Should handle pagination and extract data from all pages', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")
    await page.locator("#fileinput").setInputFiles("C:/Users/prave/Downloads/download.xlsx");
    await page.waitForTimeout(5000)

    let hasNext = true;
    let pageCounter = 1;

    while (hasNext) {
      const items = await page.locator('.rdt_TableBody div#cell-2-undefined').allTextContents();
      console.log(`Page ${pageCounter} items:`, items);
      
      expect(items.length).toBeGreaterThan(0);
      
      pageCounter++;

      const nextButton = page.locator('#pagination-next-page'); 

      if (await nextButton.isVisible()) {
        if (await nextButton.isEnabled()) {
          await nextButton.click();
          await page.waitForLoadState('networkidle'); 
        } else {
          hasNext = false; 
        }
      } else {
        hasNext = false; 
      }
    }

    console.log(`Total pages navigated: ${pageCounter - 1}`);
  });



