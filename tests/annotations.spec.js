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
// scrolling


// To clone the repository we have to use the below command
// git clone https://github.com/Praveenroy05/PlaywrightAug24.git

// To check the branch
// git branch

// We have to first pull the lates changes from the main branch

// git pull

// To create a new branch

// git checkout -b <branchname> Ex;- "sept09"

 
//Clone the repository

// git clone https://github.com/Praveenroy05/PlaywrightAug24.git - clone the repository in local system

// git status  - This will provide all the latest changes made in the local system

// git branch - This will return us the current branch that we are on in the local system

// git checkout -b <branch name> EX: - git checkout -b "newbeanch"

// git checkout master - moving from one branch to another

// git pull - To pull all the latest code/changes from remote git to local


/**
 * 1. To check the status - git status
 * 2. To add all the changes to the local git first - git add .
 * 3. To commit all the changes  - git commit -m "added login page test script"
 * 
 * 
 * 
 * 
 */

