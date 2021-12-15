package tt.amazon.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.amazon.pageAction.AmazonLoginActions;
import tt.amazon.pageAction.AmazonSearchResultAction;

public class AmazonReturnSteps {
	
	AmazonLoginActions  AmazonLoginActionsObj = new  AmazonLoginActions();
	AmazonSearchResultAction AmazonSearchResultActionObj = new AmazonSearchResultAction();

	@When("^Search for toys$")
	public void search_for_toys() throws Throwable {
		AmazonSearchResultActionObj.searchToys();
}

	@When("^Item list should have only toys related products$")
	public void item_list_should_have_only_toys_related_products() throws Throwable {
		AmazonSearchResultActionObj.verifyToysItems();
}

	@Then("^User should return back to the homepage$")
	public void user_should_return_back_to_the_homepage() throws Throwable {
		AmazonSearchResultActionObj.returnPage();
}
	
}
