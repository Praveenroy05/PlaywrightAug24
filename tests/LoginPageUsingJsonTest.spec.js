const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pageObjects/LoginPage')


//JSON -->json String --> JS Object
const datas = (require("../TestData/multiple.json")) //- []


console.log(datas)

let loginPage;
for(const data of datas){
test.beforeEach(async ({page})=>{
   loginPage =  new LoginPage(page)
   await loginPage.launchURL(data.url)
})
test.describe("Login Test", ()=>{
test(`Check the login with valid credentials for ${data.name}` , {tag : '@pom'}, async ()=>{

   await loginPage.validLogin(data.username, data.userpassword)
   await expect(loginPage.homePageIdetifier).toBeVisible()
})

})
}

// Without JSON to JS object - need to check

/*

npm install --save-dev allure-playwright - Install the allure

npx allure serve allure-results - Use to generate and access the allue report

 */