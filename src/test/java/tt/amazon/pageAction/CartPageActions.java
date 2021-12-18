package tt.amazon.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import tt.amazon.pageElements.CartPageLocators;
import tt.utilities.SetupDrivers;

import java.util.concurrent.TimeUnit;

public class CartPageActions {

    CartPageLocators CartPageLocatorsobj;
    public CartPageActions(){
        CartPageLocatorsobj = new CartPageLocators();
        PageFactory.initElements(SetupDrivers.driver, CartPageLocatorsobj);
    }

    public void searchForItem(){
        CartPageLocatorsobj.searchBx.sendKeys("macbook");
        CartPageLocatorsobj.submitBtn.click();

    }

    public void clickOnItem() throws Exception {
        CartPageLocatorsobj.itemMacBk.click();
//        Select myDD = new Select(CartPageLocatorsobj.qntyBtn);
//        myDD.selectByValue("2");
//        myDD.selectByVisibleText("2");
//        TimeUnit wait = TimeUnit.SECONDS;
//        wait.sleep(3);
        CartPageLocatorsobj.qntyBtn.click();
        CartPageLocatorsobj.qntyTwo.click();
//        Select myDD = new Select(CartPageLocatorsobj.qntyBtn);
//        myDD.selectByValue("2");
        CartPageLocatorsobj.addToCartBtn.click();
        CartPageLocatorsobj.noPrtectionBtn.click();
        SetupDrivers.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

    }

    public void validateCartPage(){
//        Assert.assertEquals("Added to Cart", CartPageLocatorsobj.cartPageValidation.getText());
        String cartTitle = SetupDrivers.driver.getTitle();
        System.out.println("title:  "+cartTitle);
        String actual = "Amazon.com : macbook";
        Assert.assertEquals(cartTitle,actual);
    }

}
