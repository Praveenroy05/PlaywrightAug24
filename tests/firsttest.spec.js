//import {test} from '@playwright/test'

const {test, expect} = require('@playwright/test')

test("First Test Case",  async function({browser}) {
    // Your test code here
    // browser - fixture
    // Create a browser instance - 
    // Create a page to work with
    // launch the url
    // async- await

    // Step 1 - await launch a URL
    // Step 2 - await Fill the username and password
    // Step 3 - await Click on the login button

    const context =  await browser.newContext() // Fresh browser instance - 
    const page =  await context.newPage() // page inside the browser

    //goto() - Lunch the url

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")


    

});

// page - 

test("Without using browser fixture", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   
})

// How do we write in Playwright

// 1. id

// cssSelector - 
// 1. id -  #id - 
// Ex: - #username

// 2. tagname#id
// Ex: - input#username

// 3. id=value
// Ex: - id=username

// 4. xpath - Syntax - //*[@attribute='value'] OR //tagname[@attribute='value']
// //*[@id='username'] OR //input[@id='username']



//, xpath

// 2. class

// .className - cssSelector
// .form-control
// - tagname.className
// input.form-control
// - tagname[@class='className']

// page.locator('text=Username:')
// //*[text()='Username:']


// 3. text - text=value
// 4. xpath
