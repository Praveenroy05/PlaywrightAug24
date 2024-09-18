Feature: Login page test

    This test suite file will ensure that the login page is working as expected

Scenario: Check the login is working with Valid creds
Given I am on the login page
When I enter valid username as "testnHNk@gmail.com" and password as "Test@123"
Then I should be able to login successfully
