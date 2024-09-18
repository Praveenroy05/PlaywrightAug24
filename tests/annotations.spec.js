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

// donwload a file
// scrolling
// Jenkins


 // - We need to have java install in our system.

// 1. download jenkins war file
// 2. Start the jenkins - Admin - Generate a password - It will ask us to create a new
// 3. Install few of the plugins - Recommended plugins and Customized plugin
// 4. Jenkins dashboard
// 5. We have to setup the project to run the code



// Cucumber framework

// STep - 1 : TO install cucumber in playwright -jS
// npm install --save-dev @cucumber/cucumber

// STep -2:
// We have to create a page layer - Page classes

// STep -3 :
// We have to create  feature files

// features - folder
// loginPage.feature extension

// STep - 4
// Create step definitions to map all the steps inside the feature file





// Test cases in a plane english  - Gherkin language
// Given, When Then and But

// Given - We are on the login page - Application has  - Preconditions - 
// When - Whatever the action we need to perform we will be writing using When 
// And - 
// Then - Go for the assertion - We will redirect to the Home page


// Page layer - Initialize the locators and methods
// Feature file - This file will consitst of all the TCs  - Gherkin language
// Step definition file - This file will have the code for the step definitions - Javascript

// cucumber-js





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
 * 4. After creating new branch if you want to push the code for the first time we have to use below command:
 *  git push --set-upstream origin branchname. Ex:- loginpagesept24
 * 
 * 
 * 
 * 
 */

