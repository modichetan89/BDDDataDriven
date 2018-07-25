$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Workspace/FreeCrmBDDDataDriven/src/main/java/Features/createContactDataTableWithMap.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# With data table only"
    }
  ],
  "line": 2,
  "name": "Create contact with examples",
  "description": "",
  "id": "create-contact-with-examples",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Create multiple contacts",
  "description": "",
  "id": "create-contact-with-examples;create-multiple-contacts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is freeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters username and passsword",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 9
    },
    {
      "cells": [
        "modichetan89",
        "ttlsh!wwur1"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User opens the new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User added firstName and lastName and position and saving data",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Position"
      ],
      "line": 15
    },
    {
      "cells": [
        "Cruise",
        "Tom",
        "MI"
      ],
      "line": 16
    },
    {
      "cells": [
        "Modi",
        "Chetan",
        "THBS"
      ],
      "line": 17
    },
    {
      "cells": [
        "Puria",
        "Ankita",
        "RGPV"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactDataTableWithMap.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 11554627329,
  "status": "passed"
});
formatter.match({
  "location": "ContactDataTableWithMap.title_of_login_page_is_freeCRM()"
});
formatter.result({
  "duration": 17399384,
  "status": "passed"
});
formatter.match({
  "location": "ContactDataTableWithMap.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 365147982,
  "status": "passed"
});
formatter.match({
  "location": "ContactDataTableWithMap.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 7697407450,
  "status": "passed"
});
formatter.match({
  "location": "ContactDataTableWithMap.user_is_on_homepage()"
});
formatter.result({
  "duration": 18186067,
  "status": "passed"
});
formatter.match({
  "location": "ContactDataTableWithMap.user_opens_the_new_contact_page()"
});
formatter.result({
  "duration": 690549488,
  "status": "passed"
});
formatter.match({
  "location": "ContactDataTableWithMap.user_added_and_and(DataTable)"
});
formatter.result({
  "duration": 11641009031,
  "status": "passed"
});
formatter.match({
  "location": "ContactDataTableWithMap.close_the_browser()"
});
formatter.result({
  "duration": 608046256,
  "status": "passed"
});
});