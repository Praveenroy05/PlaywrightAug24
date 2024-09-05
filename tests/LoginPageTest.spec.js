const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pageObjects/LoginPage')

const url = "https://rahulshettyacademy.com/client"

const userEmail = "test7lYM@gmail.com"
const userPassword = "Test@123"

let loginPage;

test.beforeEach(async ({page})=>{
   loginPage =  new LoginPage(page)
   await loginPage.launchURL(url)
})

test("Check the login with valid credentials" , async ()=>{

   await loginPage.validLogin(userEmail, userPassword)
   await expect(loginPage.homePageIdetifier).toBeVisible()
})


test("Check the login with invalid credentials" , async ()=>{

   await loginPage.invalidLogin(userEmail, "userPassword")
   await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
})


/*

npm install --save-dev allure-playwright - Install the allure

npx allure serve allure-results - Use to generate and access the allue report

 */