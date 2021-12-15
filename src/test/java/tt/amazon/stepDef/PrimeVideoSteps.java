package tt.amazon.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.amazon.pageAction.PrimeVdoActions;
import tt.amazon.pageAction.AmazonLoginActions;
import tt.utilities.SetupDrivers;

import java.util.concurrent.TimeUnit;

public class PrimeVideoSteps {
    AmazonLoginActions AmazonLoginActionsobj = new AmazonLoginActions();
    PrimeVdoActions PrimeVdoActionsobj = new PrimeVdoActions();

    @Given("^user in Amazon Home page$")
    public void user_in_Amazon_Home_page() throws Throwable {
        try {
            AmazonLoginActionsobj.loadAmazonHomePage();
        }catch (Exception e){
            e.printStackTrace();
        }
    }
    @When("^user clicks All$")
    public void user_clicks_All() throws Throwable {
        try {
            PrimeVdoActionsobj.clickAll();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @When("^user clicks on Prime Video$")
    public void user_clicks_on_Prime_Video() throws Throwable {
        try {
            PrimeVdoActionsobj.primeVdo();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @When("^user clicks on Prime Video again$")
    public void user_clicks_on_Prime_Video_again() throws Throwable {
        try {
            PrimeVdoActionsobj.clickIncluddPrime();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Then("^user should able to land on Amazon Prime Video$")
    public void user_should_able_to_land_on_Amazon_Prime_Video() throws Throwable {
        try {
            PrimeVdoActionsobj.PrimeVdoActionsValidation();
        }catch (Exception e){
            e.printStackTrace();
        }
        SetupDrivers.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        AmazonLoginActionsobj.screenShot();

    }


}
