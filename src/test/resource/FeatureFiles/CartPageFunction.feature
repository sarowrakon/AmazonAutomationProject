@regression

  Feature: Cart Page Functionality
    Scenario: User can add item into cart
      Given User in homepage
      When User search for item
      And User add item to card
      Then User able to see in the cart
