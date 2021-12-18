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
  "duration": 7657753200,
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
  "duration": 2399947000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonBasicsstepDef.user_select_Work_from_Home()"
});
formatter.result({
  "duration": 5374959000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonBasicsstepDef.user_should_able_to_land_on_work_from_Home_page()"
});
formatter.result({
  "duration": 118976600,
  "status": "passed"
});
formatter.after({
  "duration": 220674900,
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
  "duration": 5849685800,
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
  "name": "Open Amazon Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse Hover to Prime",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Try Prime",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearchSteps.open_Amazon_Homepage()"
});
formatter.result({
  "duration": 2167663700,
  "status": "passed"
});
formatter.match({
  "location": "AmazonPrimeMouseHoverSteps.mouse_Hover_to_Prime()"
});
formatter.result({
  "duration": 3362673100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonPrimeMouseHoverSteps.click_on_Try_Prime()"
});
formatter.result({
  "duration": 6445985100,
  "status": "passed"
});
formatter.after({
  "duration": 186731000,
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
  "duration": 8917556500,
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
  "name": "Open Amazon Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for toys",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only toys related products",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should return back to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearchSteps.open_Amazon_Homepage()"
});
formatter.result({
  "duration": 2129628300,
  "status": "passed"
});
formatter.match({
  "location": "AmazonReturnSteps.search_for_toys()"
});
formatter.result({
  "duration": 4333701600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonReturnSteps.item_list_should_have_only_toys_related_products()"
});
formatter.result({
  "duration": 481518600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonReturnSteps.user_should_return_back_to_the_homepage()"
});
formatter.result({
  "duration": 1349681100,
  "status": "passed"
});
formatter.after({
  "duration": 223686900,
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
  "duration": 6422737700,
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
  "name": "Open Amazon Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for diapers",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only diapers related products",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearchSteps.open_Amazon_Homepage()"
});
formatter.result({
  "duration": 1770646400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonSearchSteps.search_for_diapers()"
});
formatter.result({
  "duration": 3888435900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonSearchSteps.item_list_should_have_only_diapers_related_products()"
});
formatter.result({
  "duration": 190401500,
  "status": "passed"
});
formatter.after({
  "duration": 230413200,
  "status": "passed"
});
formatter.uri("CartPageFunction.feature");
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
  "duration": 4869543300,
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
  "duration": 1765498700,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_search_for_item()"
});
formatter.result({
  "duration": 9521075100,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_add_item_to_card()"
});
formatter.result({
  "duration": 40564767700,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_able_to_see_in_the_cart()"
});
formatter.result({
  "duration": 294696000,
  "status": "passed"
});
formatter.after({
  "duration": 220678600,
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
  "duration": 6895665300,
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
  "duration": 3442496100,
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
  "duration": 40093468300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027ap_email\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-9L5U5K8V\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\mahin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60492}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6463c12464aa9cc847ee0afcccf7f638\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027ap_email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat tt.amazon.pageAction.AmazonLoginActions.input_email(AmazonLoginActions.java:41)\r\n\tat tt.amazon.stepDef.AmazonLoginSteps.user_input_email(AmazonLoginSteps.java:30)\r\n\tat ✽.And user input email \"\u003cmirazakon@outlook.com\u003e\"(EndtoEnd.feature:6)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "AmazonLoginSteps.user_should_able_to_land_on_his_account()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EnedToEndstepDef.user_select_a_item_on_the_search_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnedToEndstepDef.user_added_the_item_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnedToEndstepDef.user_does_not_include_the_accident_protection_plan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnedToEndstepDef.user_verifiest_that_item_is_added_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnedToEndstepDef.user_clicks_on_go_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnedToEndstepDef.user_verifies_sub_total_on_the_shopping_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 216133700,
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
  "duration": 3931410300,
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
  "duration": 3382464300,
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
  "duration": 233789200,
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
  "duration": 5087445700,
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
  "duration": 2345732800,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_All()"
});
formatter.result({
  "duration": 774743300,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_on_Prime_Video()"
});
formatter.result({
  "duration": 2366222700,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_on_Prime_Video_again()"
});
formatter.result({
  "duration": 2527302700,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_should_able_to_land_on_Amazon_Prime_Video()"
});
formatter.result({
  "duration": 1158099300,
  "status": "passed"
});
formatter.after({
  "duration": 255918400,
  "status": "passed"
});
formatter.uri("SearchFromExcel.feature");
formatter.feature({
  "line": 2,
  "name": "Read Excel file for search Funtionality",
  "description": "",
  "id": "read-excel-file-for-search-funtionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6307127100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Users continuous Functionality",
  "description": "",
  "id": "read-excel-file-for-search-funtionality;users-continuous-functionality",
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
  "name": "Search from Excel",
  "keyword": "When "
});
formatter.match({
  "location": "PrimeVideoSteps.user_in_Amazon_Home_page()"
});
formatter.result({
  "duration": 2408178100,
  "status": "passed"
});
formatter.match({
  "location": "SearchFromExcelSteps.search_from_Excel()"
});
formatter.result({
  "duration": 8798896800,
  "status": "passed"
});
formatter.after({
  "duration": 241059000,
  "status": "passed"
});
});