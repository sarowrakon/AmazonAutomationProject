@regression
Feature: Cart Page Functionality

  Scenario: User can add item into cart
    Given user open Amazon Home page
    And user input email "<mirazakon@outlook.com>"
    And user enter passwords "<TalentTech777#>"
    And user should able to land on his account
    When User search for item
    And User add item to card
    Then User able to see in the cart
