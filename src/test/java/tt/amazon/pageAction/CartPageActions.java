package tt.amazon.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import tt.amazon.pageElements.CartPageLocators;
import tt.utilities.SetupDrivers;

public class CartPageActions {

    CartPageLocators CartPageLocatorsobj;
    public CartPageActions(){
        CartPageLocatorsobj = new CartPageLocators();
        PageFactory.initElements(SetupDrivers.driver, CartPageLocatorsobj);
    }

    public void searchForItem(){
        CartPageLocatorsobj.searchBx.sendKeys("macbook pro");
        CartPageLocatorsobj.submitBtn.click();

    }

    public void clickOnItem(){
        CartPageLocatorsobj.itemMacBk.click();
        Select myDD = new Select(CartPageLocatorsobj.qntyBtn);
        myDD.selectByVisibleText("2");
        CartPageLocatorsobj.addToCartBtn.click();
        CartPageLocatorsobj.noPrtectionBtn.click();

    }

    public void validateCartPage(){
        Assert.assertEquals("Added to Cart", CartPageLocatorsobj.cartPageValidation.getText());
        //SetupDrivers.driver.getTitle();
    }

}
