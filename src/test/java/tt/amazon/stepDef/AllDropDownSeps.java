package tt.amazon.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.amazon.pageAction.AllDropDownActions;
import tt.amazon.pageAction.AmazonLoginActions;

public class AllDropDownSeps {
    AmazonLoginActions AmazonLoginActionsobj = new AmazonLoginActions();
    AllDropDownActions AllDropDownActionsobj = new AllDropDownActions();


    @When("^user clicks on All$")
    public void user_clicks_on_All() throws Throwable {
        AllDropDownActionsobj.clickAllDD();

    }

    @When("^user clicks on best sellers$")
    public void user_clicks_on_best_sellers() throws Throwable {
        AllDropDownActionsobj.clickBestSeller();
    }

    @Then("^user should able to land on Amazon Best Sellers$")
    public void user_should_able_to_land_on_Amazon_Best_Sellers() throws Throwable {
        AllDropDownActionsobj.AmznBestSlrValidation();
    }
}
