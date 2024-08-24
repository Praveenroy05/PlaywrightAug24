const {test, expect} = require("@playwright/test");

test.describe.configure({ mode: 'parallel' });

test("First Test Case in Playwright", {tag: '@smoke'}, async function({page}){

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   await page.locator("#username").fill("rahulshettyacademy")
   await page.locator("#password").fill("learning")
   await page.locator("[value='user']").click()
   await page.locator("#okayBtn").click()
   await page.locator("#signInBtn").click()
   await page.locator("text=ProtoCommerce Home").isVisible();
   expect(await page.locator("text=ProtoCommerce Home").isVisible())

});

test("Tab @smoke Handling", async({browser})=>{

   const context = await browser.newContext()
   const page = await context.newPage()
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   const documentLink = page.locator(".blinkingText");
   const [newPage] = await Promise.all([
       context.waitForEvent('page'),
       documentLink.click(),
   ])
   expect(await newPage.locator("text=Documents request").isVisible());
});

test("Incorrect login", async ({page})=>{

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   await page.locator("#username").pressSequentially("Paveen")
   await page.locator("#password").fill("learning")
   await page.locator("#signInBtn").click()
   const errorMessage = await page.locator("[style*='block']").textContent()
   console.log(errorMessage)
   expect(errorMessage).toBe("Incorrect username/password.")
   expect(errorMessage).toContain("Incorrect username/password.")

});

test("Select from the drop down and click on checkbox", async ({page})=>{

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   await page.locator("#username").pressSequentially("rahulshettyacademy")
   await page.locator("#password").fill("learning")
   await page.locator("#signInBtn").click()
   await page.selectOption("select.form-control","teach")
   expect(await page.locator("select.form-control").textContent()).toContain("Teacher")
   
});

test("Correct login validation", async function({page}){

   const products = page.locator("h4.card-title")

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   await page.locator("#username").fill("rahulshettyacademy")
   await page.locator("#password").fill("learning")
   await page.locator("[value='user']").click()
   await page.locator("#okayBtn").click()
   await page.locator("#signInBtn").click()
   await page.locator("text=ProtoCommerce Home").isVisible();
   expect(await page.locator("text=ProtoCommerce Home").isVisible())
   await products.first().textContent();
   const productName = await products.locator("a").allTextContents()
   console.log(productName)


});

test.only("Drop down" ,async ({page})=>{
   await page.goto("https://practice.expandtesting.com/dropdown")
   await page.selectOption("id=country","Afghanistan")
   await page.waitForTimeout(2000)
   await page.selectOption("id=country","United States")
   await page.waitForTimeout(2000)

})





/**
 *  css selector
 * 
 * 1. if id is present we can use the below css selestor for locators:
 * 
 * tagname#id or #id
 * Ex: - if tagname is input and id is username
 * input#username OR #username
 * 
 * 2. if class attribute id present we can use the below selectors:
 * 
 * tagname.classname or .classname
 * 
 * 
 * Ex: - if tagname is input and classname is user
 * input.user OR .user
 * 
 * 3. Write css based on any attribute:
 * 
 * [attribute = 'value'] - Ex: - [type='username']
 *  
 * 
 * 4. Write css traversing from parent to child:
 * 
 * parenttagename >> childtagname or parenttagname childtagname
 * 
 * Ex: - input >> div (OR) input div (by just provide a space between parent and child)
 * 
 * 5. By writing the locators based on the test:
 * 
 * Ex: - ("text= Add to cart")
 * 
 * 
 *  
 * 
 * 
 */


test.describe.configure({mode:'parallel', timeout: 20_000})

test('Launch URL', async ({browser})=>{

    const context = await browser.newContext()
    const page  =   await context.newPage()
    await page.goto("https://google.com")

})

test('Launch URL in default way', async ({page}) =>{
    await page.goto("https://amazon.com")
})

test('Correct Login Test for Admin', async function({page}){
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning")
    await page.locator("#terms").check()
    await expect(page.locator("#terms")).toBeChecked()
    await page.locator("#signInBtn").click()
    await expect(page.locator(".navbar-brand").first()).toBeVisible()

})

test('Correct Login Test for User', async function({page}){
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning")
    await page.locator(".radiotextsty").last().check()
    await page.locator("#okayBtn").click()
    await page.locator("#terms").check()
    await expect(page.locator("#terms")).toBeChecked()
    await page.locator("#signInBtn").click()
    await expect(page.locator(".navbar-brand").first()).toBeVisible()

})

test('Incorrect Login Test', async function({page}){
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("Praveen")
    await page.locator("#password").fill("learning")
    await page.locator("#terms").check()
    await expect(page.locator("#terms")).toBeChecked()
    await page.locator("#signInBtn").click()
    const errorMessage = await page.locator("[style*='block']").textContent()
    expect(errorMessage).toBe("Incorrect username/password.")
    expect(errorMessage).toContain("Incorrect")

})

test('Get Text of all the products', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning")
    await page.locator("#terms").check()
    await expect(page.locator("#terms")).toBeChecked()
    await page.locator("#signInBtn").click()
    await page.locator(".card-title a").first().waitFor()
    const allTextContents = await page.locator(".card-title a").allTextContents()
    console.log(allTextContents)
})

test('Select Teacher from static dropdown', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning")
    await page.selectOption('select.form-control', 'teach')
    const teacher = await page.locator("select.form-control").textContent()
    expect(teacher).toContain("Teacher")
})

test('Handling Child Tab', async ({browser})=>{
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    const username = page.locator("#username")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const linkUrl = page.locator("body a.blinkingText")
    const [newPage] = await Promise.all([
        browserContext.waitForEvent('page'),
        linkUrl.click()
        ])
    await newPage.waitForLoadState('networkidle')
    const newPageTitle = await newPage.title()
    expect(newPageTitle).toBe("RS Academy")
    const text = await newPage.locator("p.red").textContent()
    console.log(text)
    const email = text.split("@")[1].split(".")[0]
    await page.locator("#username").fill(email)
    const firstPageEmailText = await username.inputValue();
   expect(firstPageEmailText).toBe(email)
    


   
})



test('Select from static dropdown', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.fill("#username", "abcd")
    await page.click("#signInBtn")
    await page.waitForTimeout(10000)
})
