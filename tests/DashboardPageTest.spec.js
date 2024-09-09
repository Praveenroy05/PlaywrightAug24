const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { DashboardPage } = require('../pageObjects/DashboardPage');

const url = "https://rahulshettyacademy.com/client"

const userEmail = "test7lYM@gmail.com"
const userPassword = "Test@123"
const productName = "IPHONE 13 PRO"

let loginPage;
let dashboardPage

//test.describe.configure({ retries: 2, timeout: 20_000 , mode : 'serial'})

test.beforeEach(async ({page})=>{
    loginPage =  new LoginPage(page)
    dashboardPage = new DashboardPage(page)
   await loginPage.launchURL(url)
   await loginPage.validLogin(userEmail, userPassword)


})

test("Validate add to cart", {tag : '@pom'}, async ()=>{
    await dashboardPage.searchProductAndAddToCart(productName)
    await expect(dashboardPage.addToCartSuccessMessage).toHaveText("Product Added To Cart")
})

test("View product details", {tag : '@pom'}, async ()=>{
    await dashboardPage.searchProductAndViewDetails(productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(productName)
})


//// npm run <scriptname>
// npm run fulltest


// Few of the annontations that we can use for test



// Getting the data from json/excel