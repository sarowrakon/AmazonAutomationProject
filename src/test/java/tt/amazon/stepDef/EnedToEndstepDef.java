package tt.amazon.stepDef;



import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.amazon.pageAction.EndToEndActions;

public class EnedToEndstepDef {
	EndToEndActions EndToEndActionsObj = new EndToEndActions();

	@When("^user input \"([^\"]*)\" in search box and click on it$")
	public void user_input_in_search_box_and_click_on_it(String searchTxt) throws Throwable {
		EndToEndActionsObj.enterSearchText(searchTxt);

	}

	@When("^user select a item on the search result$")
	public void user_select_a_item_on_the_search_result() throws Throwable {
		EndToEndActionsObj.selectItemFromsearchResults();
	}

	@When("^user added the item to the cart$")
	public void user_added_the_item_to_the_cart() throws Throwable {
		EndToEndActionsObj.clickToAddtoCartBtn();
	}

	@When("^user does not include the accident protection plan$")
	public void user_does_not_include_the_accident_protection_plan() throws Throwable {
		EndToEndActionsObj.clickToNoThanksBtn();
		
		
	}

	@Then("^user verifies that item is added to the cart$")
	public void user_verifiest_that_item_is_added_to_the_cart() throws Throwable {
		EndToEndActionsObj.getAddedToCartText();
	}

	@Then("^user clicks on go to cart button$")
	public void user_clicks_on_go_to_cart_button() throws Throwable {
		EndToEndActionsObj.clickToGoToCartBtn();
	}

	@Then("^user verifies sub total on the shopping cart page$")
	public void user_verifies_sub_total_on_the_shopping_cart_page() throws Throwable {
		EndToEndActionsObj.checkifSubTotalisAvailable();
	}
	

}
