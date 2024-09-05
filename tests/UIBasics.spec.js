const  {test, expect} = require('@playwright/test')

test("Login into the app", {tag : '@Smoke'}, async ({page})=>{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    // locator() - is use to help in the writing the locators in PW
    // fill() - 
    // click() - is use to perform click on element
    // title() - It will just return the title of the page
    // expect() - 
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    const title = await page.title()
    await expect(title).toContain("LoginPage Practise")
    await page.locator('#username').fill("rahulshettyacademy")
    await page.locator('#password').fill("learning")
    await page.locator("//input[@type='submit']").click()

})

// By default paywright will wait for 30 second for any of the method that identify the element uniquely.
// For assertion that is expect() will have by default a waiting time of 5 seconds

test("Checkbox, radio button and drop down", {tag : '@Smoke'}, async function({page}){

    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    // first()  -  This will identify 1st matching element inside the webpage
    //, last() - 
    // nth()
    // check() - To check/click a checkbox or radio button

    await page.locator("[name='name']").nth(0).fill("Test")
    //await page.locator("[name='email']").fill("Case")
    await page.fill("[name='email']", "Case")
    await page.locator("#exampleInputPassword1").fill("Password")
    await page.locator("//label[@for='exampleCheck1']").check()
    await page.locator("#inlineRadio2").check()
    // selectOption() - Select the values from the static drop down
    await page.selectOption("#exampleFormControlSelect1", "Male")
    await page.waitForTimeout(5000)

})

test("Drop down", {tag : '@Smoke'}, async ({page})=>{
    // selectOption() - Select the values from the static drop down
    await page.goto("https://practice.expandtesting.com/dropdown")
    await page.selectOption("//select[@id='country']", {value : "US"})
    await page.waitForTimeout(2000)
    await page.selectOption("//select[@id='country']", {label : "Afghanistan"})
    await page.waitForTimeout(2000)
    await page.selectOption("//select[@id='country']", {index : 6})
    await page.waitForTimeout(2000)

    await page.locator("//select[@id='country']").selectOption({value : "US"})
    await page.waitForTimeout(2000)

})

// dbl click, right click

test("Mouse operation",{tag : '@Smoke'},  async ({page})=>{
    // dblclick() - Double click on the element
    await page.locator('text=right click me').click({button : "right"})
    await page.waitForTimeout(3000)
    //hover() - It will do a mouse over an element
    await page.goto("https://www.spicejet.com/")
    await page.locator('text=Add-ons').first().hover()
    await page.waitForTimeout(2000)
    // drag and drop
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")

    await page.locator(".ui-draggable").dragTo(page.locator("//*[@id='droppable']"))
    await page.waitForTimeout(2000)
    
})

test("Double click", {tag : '@Smoke'}, async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    page.on('dialog', (dialog) =>{
        console.log(dialog.message())
        dialog.accept()
    })
    await page.locator('text=Double-Click Me To See Alert').dblclick()
    await page.waitForTimeout(3000)
})

test("Upload file test" , {tag : '@Smoke'}, async ({page})=>{
    //setInputFiles("path of the file") - Which is use to upload the file on the app
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")
    await page.locator("[name='upfile']").setInputFiles("C:\\Users\\prave\\OneDrive\\Desktop\\Docker.txt")
    await page.locator("[value='Press']").setInputFiles("C:\\Users\\prave\\OneDrive\\Desktop\\Docker.txt")
    await page.waitForTimeout(3000)

    // textContent() - WHich is use get the text from an element
    //const result = await page.locator('text=File Upload Results').textContent()
    //await expect(result).toContain("File Upload Results")
    await expect(page.locator('text=File Upload Results')).toHaveText("File Upload Results")

   // const result = await page.locator('text=File Upload Results').isVisible()
    //console.log(result)

    page.getByRole()
})

















