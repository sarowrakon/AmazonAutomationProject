$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonBasics.feature");
formatter.feature({
  "line": 2,
  "name": "Amazon Basics Functionality",
  "description": "",
  "id": "amazon-basics-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5484708600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Amazon Basics Work from Home page",
  "description": "",
  "id": "amazon-basics-functionality;amazon-basics-work-from-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user click on Amazon Basic",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user select Work from Home",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should able to land on work from Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonBasicsstepDef.user_click_on_amazon_basic()"
});
formatter.result({
  "duration": 1555259500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonBasicsstepDef.user_select_Work_from_Home()"
});
formatter.result({
  "duration": 6207417100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonBasicsstepDef.user_should_able_to_land_on_work_from_Home_page()"
});
formatter.result({
  "duration": 78283100,
  "status": "passed"
});
formatter.after({
  "duration": 4179608800,
  "status": "passed"
});
formatter.uri("AmazonPrimeMouseHover.feature");
formatter.feature({
  "line": 2,
  "name": "Amazon Prime MouseHover",
  "description": "",
  "id": "amazon-prime-mousehover",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3952968100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Amazon Mousehover to Prime",
  "description": "",
  "id": "amazon-prime-mousehover;amazon-mousehover-to-prime",
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
  "name": "user input email \"\u003cmirazakon@outlook.com\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter passwords \"\u003cTalentTech777#\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should able to land on his account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Mouse Hover to Prime",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonLoginSteps.user_open_Amazon_Home_page()"
});
formatter.result({
  "duration": 3074091300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmirazakon@outlook.com\u003e",
      "offset": 18
    }
  ],
  "location": "AmazonLoginSteps.user_input_email(String)"
});
formatter.result({
  "duration": 581270100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cTalentTech777#\u003e",
      "offset": 22
    }
  ],
  "location": "AmazonLoginSteps.user_enter_passwords(String)"
});
formatter.result({
  "duration": 216740600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_should_able_to_land_on_his_account()"
});
formatter.result({
  "duration": 2272006800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonPrimeMouseHoverSteps.mouse_Hover_to_Prime()"
});
formatter.result({
  "duration": 6483957100,
  "status": "passed"
});
formatter.after({
  "duration": 4167401100,
  "status": "passed"
});
formatter.uri("AmazonReturn.feature");
formatter.feature({
  "line": 2,
  "name": "Amazon Return Functionality",
  "description": "",
  "id": "amazon-return-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4928427100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for toys",
  "description": "",
  "id": "amazon-return-functionality;search-for-toys",
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
  "name": "user input email \"\u003cmirazakon@outlook.com\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter passwords \"\u003cTalentTech777#\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should able to land on his account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Search for toys",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Item list should have only toys related products",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should return back to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLoginSteps.user_open_Amazon_Home_page()"
});
formatter.result({
  "duration": 2992239000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmirazakon@outlook.com\u003e",
      "offset": 18
    }
  ],
  "location": "AmazonLoginSteps.user_input_email(String)"
});
formatter.result({
  "duration": 863251300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cTalentTech777#\u003e",
      "offset": 22
    }
  ],
  "location": "AmazonLoginSteps.user_enter_passwords(String)"
});
formatter.result({
  "duration": 199541700,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_should_able_to_land_on_his_account()"
});
formatter.result({
  "duration": 2171747500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonReturnSteps.search_for_toys()"
});
formatter.result({
  "duration": 3191665800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonReturnSteps.item_list_should_have_only_toys_related_products()"
});
formatter.result({
  "duration": 192844000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonReturnSteps.user_should_return_back_to_the_homepage()"
});
formatter.result({
  "duration": 990475000,
  "status": "passed"
});
formatter.after({
  "duration": 211495900,
  "status": "passed"
});
formatter.uri("AmazonSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Amazon Search Functionality",
  "description": "",
  "id": "amazon-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3018651100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for diapers",
  "description": "",
  "id": "amazon-search-functionality;search-for-diapers",
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
  "name": "user input email \"\u003cmirazakon@outlook.com\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter passwords \"\u003cTalentTech777#\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should able to land on his account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Search for diapers",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Item list should have only diapers related products",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLoginSteps.user_open_Amazon_Home_page()"
});
formatter.result({
  "duration": 3108146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmirazakon@outlook.com\u003e",
      "offset": 18
    }
  ],
  "location": "AmazonLoginSteps.user_input_email(String)"
});
formatter.result({
  "duration": 834920600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cTalentTech777#\u003e",
      "offset": 22
    }
  ],
  "location": "AmazonLoginSteps.user_enter_passwords(String)"
});
formatter.result({
  "duration": 217979600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_should_able_to_land_on_his_account()"
});
formatter.result({
  "duration": 2274194900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonSearchSteps.search_for_diapers()"
});
formatter.result({
  "duration": 3103153600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonSearchSteps.item_list_should_have_only_diapers_related_products()"
});
formatter.result({
  "duration": 120169500,
  "status": "passed"
});
formatter.after({
  "duration": 209222000,
  "status": "passed"
});
formatter.uri("CartPageFunction.feature");
formatter.feature({
  "line": 2,
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
  "duration": 4600836800,
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
  "name": "user open Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user input email \"\u003cmirazakon@outlook.com\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter passwords \"\u003cTalentTech777#\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should able to land on his account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User search for item",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User add item to card",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User able to see in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLoginSteps.user_open_Amazon_Home_page()"
});
formatter.result({
  "duration": 2673081600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmirazakon@outlook.com\u003e",
      "offset": 18
    }
  ],
  "location": "AmazonLoginSteps.user_input_email(String)"
});
formatter.result({
  "duration": 932034400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cTalentTech777#\u003e",
      "offset": 22
    }
  ],
  "location": "AmazonLoginSteps.user_enter_passwords(String)"
});
formatter.result({
  "duration": 186615300,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_should_able_to_land_on_his_account()"
});
formatter.result({
  "duration": 3016133000,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_search_for_item()"
});
formatter.result({
  "duration": 2484676800,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_add_item_to_card()"
});
formatter.result({
  "duration": 40162852100,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_able_to_see_in_the_cart()"
});
formatter.result({
  "duration": 171652600,
  "status": "passed"
});
formatter.after({
  "duration": 191859700,
  "status": "passed"
});
formatter.uri("EndtoEnd.feature");
formatter.feature({
  "line": 2,
  "name": "User End to End Functionality",
  "description": "",
  "id": "user-end-to-end-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4295906400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user order flow end to end",
  "description": "",
  "id": "user-end-to-end-functionality;user-order-flow-end-to-end",
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
  "name": "user input email \"\u003cmirazakon@outlook.com\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter passwords \"\u003cTalentTech777#\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should able to land on his account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user input \"mobile\" in search box and click on it",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user select a item on the search result",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user added the item to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user does not include the accident protection plan",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user verifies that item is added to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on go to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user verifies sub total on the shopping cart page",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLoginSteps.user_open_Amazon_Home_page()"
});
formatter.result({
  "duration": 2997321100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmirazakon@outlook.com\u003e",
      "offset": 18
    }
  ],
  "location": "AmazonLoginSteps.user_input_email(String)"
});
formatter.result({
  "duration": 600812300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cTalentTech777#\u003e",
      "offset": 22
    }
  ],
  "location": "AmazonLoginSteps.user_enter_passwords(String)"
});
formatter.result({
  "duration": 210403000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_should_able_to_land_on_his_account()"
});
formatter.result({
  "duration": 2296062500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 12
    }
  ],
  "location": "EnedToEndstepDef.user_input_in_search_box_and_click_on_it(String)"
});
formatter.result({
  "duration": 3225541600,
  "status": "passed"
});
formatter.match({
  "location": "EnedToEndstepDef.user_select_a_item_on_the_search_result()"
});
formatter.result({
  "duration": 4380227600,
  "status": "passed"
});
formatter.match({
  "location": "EnedToEndstepDef.user_added_the_item_to_the_cart()"
});
formatter.result({
  "duration": 1177641000,
  "status": "passed"
});
formatter.match({
  "location": "EnedToEndstepDef.user_does_not_include_the_accident_protection_plan()"
});
formatter.result({
  "duration": 713455400,
  "status": "passed"
});
formatter.match({
  "location": "EnedToEndstepDef.user_verifiest_that_item_is_added_to_the_cart()"
});
formatter.result({
  "duration": 85903900,
  "status": "passed"
});
formatter.match({
  "location": "EnedToEndstepDef.user_clicks_on_go_to_cart_button()"
});
formatter.result({
  "duration": 3641849800,
  "status": "passed"
});
formatter.match({
  "location": "EnedToEndstepDef.user_verifies_sub_total_on_the_shopping_cart_page()"
});
formatter.result({
  "duration": 58319700,
  "status": "passed"
});
formatter.after({
  "duration": 4168066900,
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
  "duration": 4040219400,
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
  "duration": 3037419500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "duration": 4140383700,
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
  "duration": 4456850700,
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
  "name": "user open Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user input email \"\u003cmirazakon@outlook.com\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter passwords \"\u003cTalentTech777#\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should able to land on his account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks All",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Prime Video",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Prime Video again",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should able to land on Amazon Prime Video",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLoginSteps.user_open_Amazon_Home_page()"
});
formatter.result({
  "duration": 2928213800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmirazakon@outlook.com\u003e",
      "offset": 18
    }
  ],
  "location": "AmazonLoginSteps.user_input_email(String)"
});
formatter.result({
  "duration": 861629400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cTalentTech777#\u003e",
      "offset": 22
    }
  ],
  "location": "AmazonLoginSteps.user_enter_passwords(String)"
});
formatter.result({
  "duration": 197729800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_should_able_to_land_on_his_account()"
});
formatter.result({
  "duration": 2832615100,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_All()"
});
formatter.result({
  "duration": 175385100,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_on_Prime_Video()"
});
formatter.result({
  "duration": 2514244300,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_on_Prime_Video_again()"
});
formatter.result({
  "duration": 5075641700,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_should_able_to_land_on_Amazon_Prime_Video()"
});
formatter.result({
  "duration": 640487800,
  "status": "passed"
});
formatter.after({
  "duration": 216249200,
  "status": "passed"
});
});