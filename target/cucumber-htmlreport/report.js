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
  "duration": 4884908500,
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
  "duration": 1765969500,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_search_for_item()"
});
formatter.result({
  "duration": 2437880800,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.user_add_item_to_card()"
});
formatter.result({
  "duration": 23991313000,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-9L5U5K8V\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\mahin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57503}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0b8757c756f0f939a7dd13ffd947a78b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat tt.amazon.pageAction.CartPageActions.clickOnItem(CartPageActions.java:32)\r\n\tat tt.amazon.stepDef.CartPageSteps.user_add_item_to_card(CartPageSteps.java:28)\r\n\tat ✽.And User add item to card(CartPageFunction.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CartPageSteps.user_able_to_see_in_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 193198400,
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
  "duration": 5668567400,
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
  "duration": 1620646800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_input_email_mirazakon_outlook_com()"
});
formatter.result({
  "duration": 8806867400,
  "status": "passed"
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
  "duration": 151280100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginSteps.user_should_able_to_land_on_his_account()"
});
formatter.result({
  "duration": 10015905300,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat tt.amazon.pageAction.AmazonLoginActions.userProfile(AmazonLoginActions.java:38)\r\n\tat tt.amazon.stepDef.AmazonLoginSteps.user_should_able_to_land_on_his_account(AmazonLoginSteps.java:32)\r\n\tat ✽.Then user should able to land on his account(LoginFunctionality.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4131119900,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-9L5U5K8V\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\mahin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57678}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4e9b0acfa7a7eee643a6a7038f943d48\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:433)\r\n\tat tt.utilities.SetupDrivers.tearDownDriver(SetupDrivers.java:44)\r\n\tat tt.utilities.AfterActions.afterActions(AfterActions.java:13)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:80)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:714)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1198)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1123)\r\n\tat org.testng.TestNG.run(TestNG.java:1031)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:379)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:340)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:413)\r\n",
  "status": "failed"
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
  "duration": 3889052100,
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
  "duration": 1836161300,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_All()"
});
formatter.result({
  "duration": 512870000,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_on_Prime_Video()"
});
formatter.result({
  "duration": 2352302300,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_clicks_on_Prime_Video_again()"
});
formatter.result({
  "duration": 2417645200,
  "status": "passed"
});
formatter.match({
  "location": "PrimeVideoSteps.user_should_able_to_land_on_Amazon_Prime_Video()"
});
formatter.result({
  "duration": 47000,
  "status": "passed"
});
formatter.after({
  "duration": 120285500,
  "status": "passed"
});
});