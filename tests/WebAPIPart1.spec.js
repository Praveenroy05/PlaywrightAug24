const {test, expect} = require('@playwright/test')

//const productName = "ADIDAS ORIGINAL"

test.beforeAll( async ()=>{
    await console.log("Before All")
}) 
test.beforeEach(async ()=>{
    await console.log("Before Each")

})
test.afterEach(async ()=>{
    await console.log("After Each")
})
test.afterAll(async ()=>{
    await console.log("After All")

})

// test1, test2, test3

test("one", async ({page})=>{
    await console.log("First one")
})

test("Two", async ({page})=>{
    await console.log("Second one")
})

test("Three", async ({page})=>{
    await console.log("THird one")
})

