@regression
Feature: 

  Scenario: Sign in  Functionality
    Given user open Amazon Home page
    When user input email "<mirazakon@outlook.com>"
    And user enter passwords "<TalentTech777#>"
    Then user should able to land on his account

