package tt.amazon.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.amazon.pageAction.AmazonLoginActions;
import tt.amazon.pageAction.CartPageActions;

public class CartPageSteps {
    AmazonLoginActions AmazonLoginActionsobj = new AmazonLoginActions();
    CartPageActions CartPageActionsobj = new CartPageActions();

    @Given("^User in homepage$")
    public void user_in_homepage() throws Throwable {

        AmazonLoginActionsobj.loadAmazonHomePage();
    }

    @When("^User search for item$")
    public void user_search_for_item() throws Throwable {

        CartPageActionsobj.searchForItem();
    }

    @When("^User add item to card$")
    public void user_add_item_to_card() throws Throwable {

        CartPageActionsobj.clickOnItem();
    }

    @Then("^User able to see in the cart$")
    public void user_able_to_see_in_the_cart() throws Throwable {

        CartPageActionsobj.validateCartPage();
    }
}
