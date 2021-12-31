@regression
Feature: Amazon Return Functionality

  Scenario: Search for toys
    Given user open Amazon Home page
    And user input email "<mirazakon@outlook.com>"
    And user enter passwords "<TalentTech777#>"
    And user should able to land on his account
    When Search for toys
    And Item list should have only toys related products
    Then User should return back to the homepage
