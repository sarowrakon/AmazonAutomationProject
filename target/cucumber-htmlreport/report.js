$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CartPageFunction.feature");
formatter.feature({
  "line": 3,
  "name": "Cart Page Functionality",
  "description": "",
  "id": "cart-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6112767100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User can add item into cart",
  "description": "",
  "id": "cart-page-functionality;user-can-add-item-into-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search for item",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User add item to card",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User able to see in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "CartPageSteps.user_in_homepage()"
});
formatter.result({
  "duration": 2888484900,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_search_for_item()"
});
formatter.result({
  "duration": 3585848200,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_add_item_to_card()"
});
formatter.result({
  "duration": 40107527700,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_able_to_see_in_the_cart()"
});
formatter.result({
  "duration": 432428400,
  "status": "passed"
});
formatter.after({
  "duration": 293471000,
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
  "duration": 5218735000,
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
  "name": "user enter passwords “\u003cTalentTech777#\u003e\"",
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
  "duration": 2368650000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_input_email_mirazakon_outlook_com()"
});
formatter.result({
  "duration": 40109868300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "AmazonLoginSteps.user_should_able_to_land_on_his_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 130021900,
  "status": "passed"
});
formatter.uri("PrimeVdo.feature");
formatter.feature({
  "line": 2,
  "name": "All button Funtionality",
  "description": "",
  "id": "all-button-funtionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5098451500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User ability to click and land by All Functionality",
  "description": "",
  "id": "all-button-funtionality;user-ability-to-click-and-land-by-all-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user in Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks All",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Prime Video",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Prime Video again",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should able to land on Amazon Prime Video",
  "keyword": "Then "
});
formatter.match({
  "location": "PrimeVideoSteps.user_in_Amazon_Home_page()"
});
formatter.result({
  "duration": 2058055300,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_All()"
});
formatter.result({
  "duration": 2843729700,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_on_Prime_Video()"
});
formatter.result({
  "duration": 2180413100,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_on_Prime_Video_again()"
});
formatter.result({
  "duration": 5936786700,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_should_able_to_land_on_Amazon_Prime_Video()"
});
formatter.result({
  "duration": 1339043900,
  "status": "passed"
});
formatter.after({
  "duration": 221467200,
  "status": "passed"
});
});