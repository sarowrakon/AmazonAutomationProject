package tt.amazon.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.amazon.pageAction.AmazonBasicsAction;
import tt.amazon.pageAction.AmazonLoginActions;

public class AmazonBasicsstepDef {
	
	AmazonBasicsAction AmazonBasicsActionobj= new AmazonBasicsAction();
	AmazonLoginActions AmazonLoginActionsobj= new AmazonLoginActions();

	
	/*@Given("^user loads Amazon Home page$")
	public void user_loads_Amazon_Home_page() throws Throwable {
		 AmazonLoginActions AmazonLoginActionsobj;
	}
	*/
	
	@When("^user click on Amazon Basic$")
    public void user_click_on_amazon_basic()  {
       AmazonBasicsActionobj.clickOnAmazonBasics();
   
    }

	@When("^user select Work from Home$")
	public void user_select_Work_from_Home() throws Throwable {
		AmazonBasicsActionobj.clickOnWorkFromHome();
	}

	@Then("^user should able to land on work from Home page$")
	public void user_should_able_to_land_on_work_from_Home_page() throws Throwable {
		
		AmazonBasicsActionobj.WorkFromHome();
		
		
	}

	

}

