@regression
Feature: Amazon Search Functionality 

	Scenario: Search for diapers
		Given Open Amazon Homepage
		When Search for diapers
		Then Item list should have only diapers related products