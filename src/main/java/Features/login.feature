Feature: Free CRM login feature

# Without examples keyword
Scenario: Free CRM Login test scenario

Given User is already on login page
When Title of login page is freeCRM
Then User enters "modichetan89" and "ttlsh!wwur1"
Then User clicks on Login button
Then User is on homepage
Then Close the browser


## With Examples keyword
#Scenario Outline: Free CRM Login test scenario
#
#Given User is already on login page
#When Title of login page is freeCRM
#Then User enters "<usernameHeading>" and "<passwordHeading>"
#Then User clicks on Login button
#Then User is on homepage 
#Then Close the browser
#
#Examples:
#	|	usernameHeading	|	passwordHeading	 |
#	|	modichetan89|	ttlsh!wwur1	 |
#	|	modi		|	123			 |
