@regression
Feature: Amazon Prime MouseHover

  Scenario: Amazon Mousehover to Prime
    Given user open Amazon Home page
    And user input email "<mirazakon@outlook.com>"
    And user enter passwords "<TalentTech777#>"
    And user should able to land on his account
    When Mouse Hover to Prime
   # Then Click on Try Prime
