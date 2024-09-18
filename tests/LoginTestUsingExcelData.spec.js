const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pageObjects/LoginPage')

const {ExcelUtils} = require("../Utils/ExcelUtils")

let loginPage
let testData

const filePath = "C:\\Users\\prave\\OneDrive\\Documents\\Praveen-PW\\PWAug20241\\TestData\\LoginExcelData.xlsx"

try{
testData = ExcelUtils.getDataFromExcel(filePath, "Login")
}
catch(error){
    console.log("File not found")
}



//for(let data of testData){
test(`Check the login with valid credentials for ${testData[1].name}` , {tag : '@pom'}, async ({page})=>{
    loginPage = new LoginPage(page)
   await  loginPage.launchURL(testData[1].url)
   await loginPage.validLogin(testData[1].username, testData[1].userpassword)
   await expect(loginPage.homePageIdetifier).toBeVisible()
})
//}