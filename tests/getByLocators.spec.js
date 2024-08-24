// using cssSelectors and xpath

// Locators in Playwright

/*
page.getByRole() to locate by explicit and implicit accessibility attributes.

1. button, link, heading (h1, h2..)
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/


const  {test, expect} = require('@playwright/test')

test("Get By Locators", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByPlaceholder("Password").fill("Password")
    await page.getByLabel("Check me out if you Love IceCreams!").check()
    await expect(page.getByLabel("Check me out if you Love IceCreams!")).toBeChecked()
    await page.locator("#inlineRadio1").check()
    await expect(page.getByLabel("Student")).toBeChecked()
    await page.getByRole("button", {name:'Submit'}).click()
    const successMessage = await page.getByText("Success! The Form has been submitted successfully!.").isVisible() // true or false
    expect(successMessage).toBeTruthy()
})

