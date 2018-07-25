# With data table only
Feature: Create contact with examples 

Scenario: Create multiple contacts 

	Given User is already on login page 
	When Title of login page is freeCRM 
	Then User enters username and passsword 
		|Username|Password|
		|modichetan89|ttlsh!wwur1|
	Then User clicks on Login button 
	Then User is on homepage 
	Then User opens the new contact page 
	Then User added firstName and lastName and position and saving data 
		|FirstName|LastName|Position|
		|Cruise|Tom|MI|
		|Modi|Chetan|THBS|
		|Puria|Ankita|RGPV|
	Then Close the browser 
	
	
	
