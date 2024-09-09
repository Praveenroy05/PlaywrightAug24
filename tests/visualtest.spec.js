const {test, expect} = require('@playwright/test');

// How to take the screenshot using PW

//1. Full page screenshot

test('full page screenshot', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client")
    await page.screenshot({path :"FullPageScreenshot.png" })

})

//2. Specific element screenshot

test('Partial page screenshot', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").screenshot({path :"Partial.png" })

})



// Visual Testing

test.only("Visual Testing", async ({page})=>{

    await page.goto("https://google.com")
    await expect(await page.screenshot()).toMatchSnapshot("google1.png")

})
