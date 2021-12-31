@regression
Feature: Amazon Search Functionality

  Scenario: Search for diapers   
    Given user open Amazon Home page
    And user input email "<mirazakon@outlook.com>"
    And user enter passwords "<TalentTech777#>"
    And user should able to land on his account
    When Search for diapers
    Then Item list should have only diapers related products
