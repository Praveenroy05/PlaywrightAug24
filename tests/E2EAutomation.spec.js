//import {test, expect} from '@playwright/test'
const {test, expect} = require('@playwright/test')

const productName = "ADIDAS ORIGINAL"

test.only("E2E validation of product order", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill("test7lYM@gmail.com")
    await page.locator("#userPassword").fill("Test@123")
    await page.getByRole('button', {name:'Login'}).click()
    await expect(page.getByRole('button', {name:'HOME'})).toBeVisible()
    const products = page.locator("div.card-body")
    await products.first().waitFor()
    const productText = await products.locator("b").allTextContents()
    console.log(productText)





})