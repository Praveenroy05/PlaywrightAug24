// First we have to define a test
// we have to create a broswer context - context
// We have to create a page inside a browser - page
// Will be clicking on a link (Create a new tab/window)
// newPage - waitForEvent('page')
// newPage - Validate Documents request text is available on the new tab

const {test, expect} = require('@playwright/test')

test("Child window validation", async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const page1 = context.waitForEvent('page')
    await page.locator(".blinkingText").nth(0).click() // - page
    const newPage = await page1
    await newPage.locator('text=Documents request').waitFor()
    const result = await newPage.locator('text=Documents request').isVisible()
    expect(result).toBeTruthy()
    await page.locator("[name='username']").fill("TEsting")
    await page.waitForTimeout(5000)

})

test("Child window handling", async ({browser})=>{

    // launch url - 
    // fill the username - 1s
    // click on submit - 

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const [newPage1] = await Promise.all([
        context.waitForEvent('page'),
        page.locator(".blinkingText").nth(0).click(),
    
    ])

    await newPage1.locator('text=Documents request').waitFor()
    const result = await newPage1.locator('text=Documents request').isVisible()
    expect(result).toBeTruthy()
    await page.locator("[name='username']").fill("TEsting")
    await page.waitForTimeout(5000)

})

