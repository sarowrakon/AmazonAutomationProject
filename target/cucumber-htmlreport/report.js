$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AllDropDownFunction.feature");
formatter.feature({
  "line": 2,
  "name": "All drop down Funtionality",
  "description": "",
  "id": "all-drop-down-funtionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6916652200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User ability to click and land by All dropdown Functionality",
  "description": "",
  "id": "all-drop-down-funtionality;user-ability-to-click-and-land-by-all-dropdown-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on All",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on best sellers",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should able to land on Amazon Best Sellers",
  "keyword": "Then "
});
formatter.match({
  "location": "AllDropDownSeps.user_in_homepage()"
});
formatter.result({
  "duration": 2293067400,
  "status": "passed"
});
formatter.match({
  "location": "AllDropDownSeps.user_clicks_on_All()"
});
formatter.result({
  "duration": 1959800,
  "error_message": "java.lang.NullPointerException\r\n\tat tt.amazon.pageAction.AllDropDownActions.clickAllDD(AllDropDownActions.java:18)\r\n\tat tt.amazon.stepDef.AllDropDownSeps.user_clicks_on_All(AllDropDownSeps.java:20)\r\n\tat ✽.When user clicks on All(AllDropDownFunction.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AllDropDownSeps.user_clicks_on_best_sellers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AllDropDownSeps.user_should_able_to_land_on_Amazon_Best_Sellers()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 191654000,
  "status": "passed"
});
formatter.uri("LoginFunctionality.feature");
formatter.feature({
  "line": 2,
  "name": "Log in Funtionality",
  "description": "",
  "id": "log-in-funtionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3624819400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Sign in  Functionality",
  "description": "",
  "id": "log-in-funtionality;sign-in--functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user open Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user input email “\u003cmirazakon@outlook.com\u003e”",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter passwords “\u003cTalentTech777\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should able to land on his account",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLoginSteps.user_open_Amazon_Home_page()"
});
formatter.result({
  "duration": 1426894600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_input_email_mirazakon_outlook_com()"
});
