package tt.amazon.pageAction;

import junit.framework.Assert;
import org.openqa.selenium.support.PageFactory;
import tt.amazon.pageElements.AllDropDownLocators;
import tt.amazon.pageElements.AmazonLoginLocators;
import tt.utilities.SetupDrivers;

public class AllDropDownActions {

    AllDropDownLocators AllDropDownLocatorsobj;
    public AllDropDownActions (){
        AllDropDownLocatorsobj= new AllDropDownLocators();
        PageFactory.initElements(SetupDrivers.driver, AllDropDownLocatorsobj);
    }

    public void clickAllDD(){
        AllDropDownLocatorsobj.allDD.click();
    }

    public void clickBestSeller(){
        AllDropDownLocatorsobj.BestSlr.click();
    }

    public void AmznBestSlrValidation(){
//        AllDropDownLocatorsobj.AmznBestSlr.isDisplayed();

        Assert.assertEquals("Amazon Best Sellers", AllDropDownLocatorsobj.AmznBestSlr.getText());
    }

}
