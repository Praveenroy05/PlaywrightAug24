const {test, expect} = require('@playwright/test');


// test.describe - 
// test.only - 
// test.skip
// test.fail
// test.failme
// test.slow

// test.describe.configuration



test("Only", ()=>{
    console.log("Only")
})

test.skip("Skip", ()=>{
    console.log("Skip")
})

// test.fail("Fail", async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/client")
//     await page.getByPlaceholder("email@example.com").fill("test7lYM@gmail.com")
//     await page.locator("#userPassword").fill("Test@")
//     await page.getByRole('button', {name:'Login'}).click()
//     await expect(page.getByRole('button', {name:'HOME'})).toBeVisible()
// })

test.fixme("Fixme", ()=>{
    console.log("Failme")
})

test("Slow",async({page})=>{
    test.slow();
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill("test7lYM@gmail.com")
    await page.locator("#userPassword").fill("Test@123")
    await page.getByRole('button', {name:'Login'}).click()
    await expect(page.getByRole('button', {name:'HOME'})).toBeVisible()
})

// Taking screenshot and Visual Testing
// GitHub - clone/push/pull
// Jenkins integration
// json/excel file handling
// BDD cucumber framework


// To clone the repository we have to use the below command
// git clone https://github.com/Praveenroy05/PlaywrightAug24.git

// To check the branch
// git branch

// We have to first pull the lates changes from the main branch

// git pull

// To create a new branch

// git checkout -b <branchname> Ex;- "sept09"

 


