package tt.amazon.stepDef;

	import cucumber.api.java.en.Given;
	import cucumber.api.java.en.Then;
	import cucumber.api.java.en.When;
	import tt.amazon.pageAction.AmazonLoginActions;
	import tt.amazon.pageAction.AmazonSearchResultAction;
	
	public class AmazonSearchSteps {
		
		AmazonLoginActions  AmazonLoginActionsObj = new  AmazonLoginActions();
		AmazonSearchResultAction AmazonSearchResultActionObj = new AmazonSearchResultAction();
		
		@Given("^Open Amazon Homepage$")
		public void open_Amazon_Homepage(){
			AmazonLoginActionsObj.loadAmazonHomePage();
		}

		@When("^Search for diapers$")
		public void search_for_diapers() throws Throwable {
			AmazonSearchResultActionObj.searchDiapers();
		}

		@Then("^Item list should have only diapers related products$")
		public void item_list_should_have_only_diapers_related_products() throws Throwable {
			AmazonSearchResultActionObj.verifyDiapersItems();
		}
	

}



