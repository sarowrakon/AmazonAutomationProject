@regression
Feature: Amazon Return Functionality 

	Scenario: Search for toys
		Given Open Amazon Homepage
		When Search for toys
		And Item list should have only toys related products
		Then User should return back to the homepage