package tt.amazon.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.formatter.model.Scenario;
import tt.amazon.pageAction.AmazonLoginActions;
import tt.amazon.pageAction.CartPageActions;
import tt.utilities.SetupDrivers;

import java.util.concurrent.TimeUnit;

public class CartPageSteps {
    AmazonLoginActions AmazonLoginActionsobj = new AmazonLoginActions();
    CartPageActions CartPageActionsobj = new CartPageActions();

    @Given("^User in homepage$")
    public void user_in_homepage() throws Throwable {
        try {
            AmazonLoginActionsobj.loadAmazonHomePage();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @When("^User search for item$")
    public void user_search_for_item() throws Throwable {
        try {
            CartPageActionsobj.searchForItem();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @When("^User add item to card$")
    public void user_add_item_to_card() throws Throwable {
        try {
            CartPageActionsobj.clickOnItem();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Then("^User able to see in the cart$")
    public void user_able_to_see_in_the_cart() throws Throwable {

        try {
            CartPageActionsobj.validateCartPage();
        }catch (Exception e){
            e.printStackTrace();
        }

        AmazonLoginActionsobj.screenShot();
    }
}
