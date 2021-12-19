package tt.amazon.stepDef;

import cucumber.api.java.en.When;
import tt.amazon.pageAction.AmazonSearchResultAction;

public class SearchFromExcelSteps {

    AmazonSearchResultAction AmazonSearchResultActionobj = new AmazonSearchResultAction();
    @When("^Search from Excel$")
    public void search_from_Excel() throws Throwable {
        AmazonSearchResultActionobj.searchFromExcel();
    }
}
