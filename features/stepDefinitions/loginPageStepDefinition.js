
import { Given, When, Then } from "@cucumber/cucumber";

const {expect} = require('@playwright/test')
//import {expect} from '@playwright/test'

const {LoginPage} = require('../../pageObjects/LoginPage')

const playwright = require('@playwright/test')

Given('I am on the login page', async function () {
   const browser = await playwright.chromium.launch()
   this.page = await browser.newPage()

   // world constructor
});

  When('I enter valid username as {string} and password as {string}', function (string, string2) {
   
  });

  Then('I should be able to login successfully', function () {
   
  });
