package tt.amazon.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.amazon.pageAction.AmazonLoginActions;


public class AmazonPrimeMouseHoverSteps {

	AmazonLoginActions AmazonLoginActionsObj = new AmazonLoginActions();

	@When("^Mouse Hover to Prime$")
	
	public void mouse_Hover_to_Prime() throws Throwable {
		
		
		AmazonLoginActionsObj.mouseHoverPrime();
	}

	@Then("^Click on Try Prime$")
	public void click_on_Try_Prime() throws Throwable {
		
		System.out.println("IN Try PRIME STEP");

		Thread.sleep(10000);
		AmazonLoginActionsObj.clickTryPrime();
	}
	
}	
	

