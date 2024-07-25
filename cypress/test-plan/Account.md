# ✅SpaceBeyond | Account | Log-In and Log-Out

[GX-6230](https://upexgalaxy6.atlassian.net/browse/GX-6230) Created: 9/1/23 Updated: 10/1/23

*   **AS** website User of the website SpaceAndBeyond
*   **I** want to **Login and Logout**
*   **SO** that I can have control over my account

Feature: Login

  Background:
    Given: user is in the Login Page
    And: user has already a created account available in the website
    
  Scenario 1: (Happy-Path) user logs in the website
    When: the user enters a existing username and password in the form
    And: clicks on the "Log In" button
    Then: the user must be logged in and moved to the home page
    And: the Login link of the navigation bar must display "Hello" as welcome
    
  Scenario 2: user forgot to enters an username/password in the login
    When: the user forgot to insert an username/password
    And: clicks on the "Log In" button
    Then: a log message must be displayed beneath the correspondent input as:
      "Name is a required field." in case of empty username
      "Password is a required field." in case of empty password
    And: the user must not be able to log in
      // Rule:  When username is empty, that BR must be prioritize first over the another one.
    
Feature: Logout

  Scenario 1: (Happy-Path) user logs out of the website account
      Given: user is already logged in
      When: the user clicks on the "Log out" button
      Then: the user must be logged out of session immediately

INPUTS:
Username:

Should accept only from 3 characters until 255 ones (1 or 2 character is not valid)

Should accept username type that only match Master Data of the created accounts

Password:

Should accept from 5 characters until 30 ones (1,2,3,4 characters are not valids)

Should accept password type that only match Master Data of the created accounts

“*Login Button*”:

It’s always enable.

After button action, the log messages should be displayed (as the AC defined)  