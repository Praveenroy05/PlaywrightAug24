const {test, expect, request} = require('@playwright/test')

const productName = "ADIDAS ORIGINAL"

const payload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}
let token
test.beforeAll(async ()=>{
    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {

        data : payload
    })
    const loginResponseJson = await loginResponse.json()

    token = await loginResponseJson.token
    console.log(token)

})



test("E2E validation of product order", {tag : '@api'}, async ({page})=>{
//token
    page.addInitScript((value) =>{
        window.localStorage.setItem('token',value)
    }, token)


    await page.goto("https://rahulshettyacademy.com/client")
    // // await page.getByPlaceholder("email@example.com").fill("test7lYM@gmail.com")
    // // await page.locator("#userPassword").fill("Test@123")
    // // await page.getByRole('button', {name:'Login'}).click()
    // await expect(page.getByRole('button', {name:'HOME'})).toBeVisible()
    const products = page.locator("div.card-body")
    await products.first().waitFor()
    const productText = await products.locator("b").allTextContents()
    console.log(productText)
    // count() - it is use to provide the count of matching element for the locators
    const countOfTheProducts = await products.count()
    for(let i=0; i<countOfTheProducts; i++){
        //first, last, nth
        const productText = await products.nth(i).locator("b").textContent() // 
        if(productText === productName){
           await products.nth(i).getByRole('button',{name:" Add To Cart"}).click()
            break;
    }
}

await expect(page.locator("#toast-container")).toBeVisible()
await page.locator("[routerlink='/dashboard/cart']").click()
await page.getByRole('button', {name:'Checkout'}).click()
await page.getByPlaceholder("Select Country").pressSequentially("ind")
const dropdownvalues = await page.locator(".ta-results button")
await dropdownvalues.first().waitFor()
const countOfDropDownValues = await dropdownvalues.count()
for(let i=0; i<countOfDropDownValues; i++){
    const textvalue = await dropdownvalues.nth(i).textContent()
    if(textvalue === " Indonesia"){
        await dropdownvalues.nth(i).click()
        break
    }
}

await page.getByText("Place Order ").click()
await expect(page.locator(".hero-primary")).toBeVisible()
const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
console.log(orderID)// | |
await page.locator("//button[@routerlink='/dashboard/myorders']").click()
await page.locator("tbody").waitFor()
await expect(page.locator("tbody")).toBeVisible()
const rows = await page.locator("tbody tr")
const rowsCount = await rows.count() //100
for(let i=0; i<rowsCount; i++){
    const orderIDText = await rows.nth(i).locator("th").textContent()
    if(orderID.includes(orderIDText)){
        await rows.nth(i).locator("button").first().click()
        break
    }
}

const orderSumarryOrderID = await page.locator(".col-text").first().textContent()
expect(orderID.includes(orderSumarryOrderID)).toBeTruthy()

})