@regression
Feature: All button Funtionality

  Scenario: User ability to click and land by All Functionality
    Given user open Amazon Home page
    And user input email "<mirazakon@outlook.com>"
    And user enter passwords "<TalentTech777#>"
    And user should able to land on his account
    When user clicks All
    When user clicks on Prime Video
    And user clicks on Prime Video again
    Then user should able to land on Amazon Prime Video
