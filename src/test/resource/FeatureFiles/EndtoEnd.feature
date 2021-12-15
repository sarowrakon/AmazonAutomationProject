@regression
Feature: User End to End Functionality

  Scenario: user order flow end to end
    Given user open Amazon Home page
    And user input email "<mirazakon@outlook.com>"
    And user enter passwords "<TalentTech777#>"
    And user should able to land on his account
    When user input "mobile" in search box and click on it
    And user select a item on the search result
    And user added the item to the cart
    And user does not include the accident protection plan
    Then user verifies that item is added to the cart
    And user clicks on go to cart button
    And user verifies sub total on the shopping cart page
