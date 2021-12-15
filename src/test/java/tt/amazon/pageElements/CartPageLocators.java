package tt.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CartPageLocators {


    @FindBy(xpath= "//*[@id=\'twotabsearchtextbox\']")
    public WebElement searchBx;

    @FindBy(xpath= "//*[@id=\'nav-search-submit-button\']")
    public WebElement submitBtn;

    @FindBy(xpath= "//*[contains(text(),'Apple 13.3 inches MacBook Air with Retina Display')]")
    public WebElement itemMacBk;

    @FindBy(xpath= "//*[@id=\'a-autoid-0-announce\']")
    public WebElement qntyBtn;

    @FindBy(xpath= "//*[@id=\'quantity_1\']")
    public WebElement qntyTwo;



    @FindBy(xpath= "//*[@id=\'attachSiNoCoverage\']/span/input")
    public WebElement noPrtectionBtn;

    @FindBy(xpath= "//*[@id=\"add-to-cart-button\"]")
    public WebElement addToCartBtn;

    @FindBy(xpath= "//*[@id=\"attachDisplayAddBaseAlert\"]/div/h4")
    public WebElement cartPageValidation;

}
