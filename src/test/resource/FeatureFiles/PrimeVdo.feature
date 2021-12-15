@regression
Feature: All button Funtionality

  Scenario: User ability to click and land by All Functionality
    Given user in Amazon Home page
    When user clicks All
    When user clicks on Prime Video
    And user clicks on Prime Video again
    Then user should able to land on Amazon Prime Video