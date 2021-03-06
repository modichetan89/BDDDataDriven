Feature: Create contact with examples testing

Scenario Outline: Create multiple contacts 

Given User is already on login page test
When Title of login page is freeCRM
Then User enters "<username>" and "<password>"
Then User clicks on Login button
Then User is on homepage
Then User opens the new contact page
Then User added "<firstName>" and "<lastName>" and "<position>"
Then User saves the details by clicking on Save button.
Then Close the browser

Examples:
	|username|password|firstName|lastName|position|
	|modichetan89|ttlsh!wwur1|tom|cruise|MI|
	|modichetan89|ttlsh!wwur1|chetan|modi|SE|
	
	
