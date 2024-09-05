const {test, expect, request} = require('@playwright/test')

const {ApiUtil} = require('../APiUtils/ApiUtil')

const productName = "ADIDAS ORIGINAL"

const payload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}
const orderPayload = {orders: [{country: "China", productOrderedId: "6581ca979fd99c85e8ee7faf"}]}

let response
test.beforeAll(async ()=>{
   const apiContext = await request.newContext()
   const apiUtil = new ApiUtil(apiContext, payload, orderPayload)
   response = await apiUtil.orderProduct()

})



test("E2E validation of product order", async ({page})=>{
//token
    await page.addInitScript((value) =>{
        window.localStorage.setItem('token',value)
    }, response.token)


await page.goto("https://rahulshettyacademy.com/client")
   

await page.locator("//button[@routerlink='/dashboard/myorders']").click()
await page.locator("tbody").waitFor()
await expect(page.locator("tbody")).toBeVisible()
const rows = await page.locator("tbody tr")
const rowsCount = await rows.count() //100
for(let i=0; i<rowsCount; i++){
    const orderIDText = await rows.nth(i).locator("th").textContent()
    if(response.orderID.includes(orderIDText)){
        await rows.nth(i).locator("button").first().click()
        break
    }
}

const orderSumarryOrderID = await page.locator(".col-text").first().textContent()
expect(response.orderID.includes(orderSumarryOrderID)).toBeTruthy()


})

// 1. How to take the screenshot (Page or element)
// 2. Visual testing

// Page Object Model

// Page layer

// Consists of locators and methods (Actions)

// Test Layer

// Test case and assertions


// Login Page, Dashboard

// POM

// Page layer

// LoginPage.js
// locators only related login page
// Methods related to login page
// validLogin()
// invalidLogin()


//Test Layer

// LoginPageTest.spec.js
// Validation of valid login
// login.validLogin()
// Assertion will always go inside test layer
// Check with the invalid creds for login
// 

// Package - data

// Generate the report - Extent , Allure

// StepDefinition

// feature

