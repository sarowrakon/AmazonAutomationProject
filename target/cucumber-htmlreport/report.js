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
  "duration": 9267509400,
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
  "name": "user open Amazon Home page",
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
  "location": "AmazonLoginSteps.user_open_Amazon_Home_page()"
});
formatter.result({
  "duration": 3399201400,
  "status": "passed"
});
formatter.match({
  "location": "AllDropDownSeps.user_clicks_on_All()"
});
formatter.result({
  "duration": 2646798200,
  "status": "passed"
});
formatter.match({
  "location": "AllDropDownSeps.user_clicks_on_best_sellers()"
});
formatter.result({
  "duration": 1248934400,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/gp/bestsellers/?ref_\u003dnav_cs_bestsellers_8a080d3d7b55497ea1bdd97b7cff8b7b\" class\u003d\"nav-a  \" tabindex\u003d\"0\" data-csa-c-type\u003d\"link\" data-csa-c-slot-id\u003d\"nav_cs_0\" data-csa-c-content-id\u003d\"nav_cs_bestsellers_8a080d3d7b55497ea1bdd97b7cff8b7b\" data-csa-c-id\u003d\"c61fe6-ybzr0u-619k1-e1fmvn\"\u003e...\u003c/a\u003e is not clickable at point (114, 79). Other element would receive the click: \u003cdiv class\u003d\"hmenu-item hmenu-title \"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-9L5U5K8V\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\mahin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59453}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5351cc78f09864925f66a6ac778b860c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat tt.amazon.pageAction.AllDropDownActions.clickBestSeller(AllDropDownActions.java:22)\r\n\tat tt.amazon.stepDef.AllDropDownSeps.user_clicks_on_best_sellers(AllDropDownSeps.java:22)\r\n\tat ✽.And user clicks on best sellers(AllDropDownFunction.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AllDropDownSeps.user_should_able_to_land_on_Amazon_Best_Sellers()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 321024100,
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
  "duration": 7594507000,
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
  "duration": 2804847800,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_search_for_item()"
});
formatter.result({
  "duration": 4036064400,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_add_item_to_card()"
});
formatter.result({
  "duration": 40117037900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u00272021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Sil\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-9L5U5K8V\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\mahin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59573}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 548dadbf10988894947b3506e3e8f851\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u00272021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Sil\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat tt.amazon.pageAction.CartPageActions.clickOnItem(CartPageActions.java:24)\r\n\tat tt.amazon.stepDef.CartPageSteps.user_add_item_to_card(CartPageSteps.java:28)\r\n\tat ✽.And User add item to card(CartPageFunction.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CartPageSteps.user_able_to_see_in_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 294566600,
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
  "duration": 6937410900,
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
  "duration": 3264432600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_input_email_mirazakon_outlook_com()"
});
formatter.result({
  "duration": 40099451800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027ap_email\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-9L5U5K8V\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\mahin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59703}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5e2f0e9e58625b08524523cb5a34b73f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027ap_email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat tt.amazon.pageAction.AmazonLoginActions.input_email(AmazonLoginActions.java:27)\r\n\tat tt.amazon.stepDef.AmazonLoginSteps.user_input_email_mirazakon_outlook_com(AmazonLoginSteps.java:22)\r\n\tat ✽.When user input email “\u003cmirazakon@outlook.com\u003e”(LoginFunctionality.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "777",
      "offset": 33
    }
  ],
  "location": "AmazonLoginSteps.user_enter_passwords_TalentTech(int)"
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
formatter.after({
  "duration": 272696500,
  "status": "passed"
});
});