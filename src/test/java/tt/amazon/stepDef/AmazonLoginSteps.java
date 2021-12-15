package tt.amazon.stepDef;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.amazon.pageAction.AmazonLoginActions;
import tt.amazon.pageElements.AmazonLoginLocators;
import tt.utilities.SetupDrivers;

import java.util.concurrent.TimeUnit;

public class AmazonLoginSteps {
	AmazonLoginActions AmazonLoginActionsobj= new AmazonLoginActions();
	AmazonLoginLocators AmazonLoginLocatorsobj = new AmazonLoginLocators();
	
	@Given("^user open Amazon Home page$")
	public void user_open_Amazon_Home_page() throws Throwable {

		try {
			AmazonLoginActionsobj.loadAmazonHomePage();
		}catch (Exception e){
			e.printStackTrace();
			System.out.println("loaded amazon homepage");
		}

	}


	@When("^user input email \"([^\"]*)\"$")
	public void user_input_email(String arg1) throws Throwable {
		AmazonLoginActionsobj.input_email();
	}

	@When("^user enter passwords \"([^\"]*)\"$")
	public void user_enter_passwords(String arg1) throws Throwable {
		AmazonLoginActionsobj.input_password();

	}

	@Then("^user should able to land on his account$")
	public void user_should_able_to_land_on_his_account() throws Throwable {
		try {
			AmazonLoginActionsobj.userProfile();
		}catch (Exception e){
			e.printStackTrace();
		}
	}



}



/*@When("^user input email “<mirazakon@outlook\\.com>”$")
public void user_input_email_mirazakon_outlook_com() throws Throwable {
	AmazonLoginActionsobj.input_email();
}

@When("^user enter passwords “<TalentTech(\\d+)>\"$")
public void user_enter_passwords_TalentTech(int arg1) throws Throwable {
	AmazonLoginActionsobj.input_password();*/