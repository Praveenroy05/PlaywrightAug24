const {test, expect} = require('@playwright/test')

test("Iframe concept", async ({page})=>{
// frameLocator() - it use to identify the locators for frame
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const framePage = page.frameLocator("#courses-iframe")
    await framePage.getByText("All Access plan").first().click()
    const textResult = await framePage.locator(".text h2").textContent()
    console.log(textResult)
    await page.locator('text=Home').click()

})

test("Shadow Dom concept", async ({page})=>{

    // press() - This method is use to press the keyboard keys

    await page.goto("https://books-pwakit.appspot.com/explore?q=")
    await page.locator("#input").fill("Testing")
   // await page.locator("#input").press('Enter')
    await page.press("#input", 'Enter')
    await expect(page.getByText("Systematic Software Testing").first()).toBeVisible()
})



