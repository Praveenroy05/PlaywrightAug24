const {test, expect, request} = require('@playwright/test')

const productName = "ADIDAS ORIGINAL"

const payload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}
const orderPayload = {orders: [{country: "China", productOrderedId: "6581ca979fd99c85e8ee7faf"}]}

let token
let orderID
test.beforeAll(async ()=>{
    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {

        data : payload
    })
    const loginResponseJson = await loginResponse.json()

    token = await loginResponseJson.token
    console.log(token)

    const orderresponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayload,
            headers : {
                "authorization" : token
            }
        }
     )

     const orderresponseJson = await orderresponse.json()
     orderID = await orderresponseJson.orders[0]
     console.log(orderID)

})



test(" E2E validation of product order", {tag: '@API'}, async ({page})=>{
    //token
    page.addInitScript((value) =>{
        window.localStorage.setItem('token',value)
    }, token)


await page.goto("https://rahulshettyacademy.com/client")
   

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