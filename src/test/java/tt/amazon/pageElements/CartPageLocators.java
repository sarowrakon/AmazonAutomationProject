package tt.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CartPageLocators {


    @FindBy(xpath= "//*[@id=\'twotabsearchtextbox\']")
    public WebElement searchBx;

    @FindBy(xpath= "//*[@id=\'nav-search-submit-button\']")
    public WebElement submitBtn;

    @FindBy(partialLinkText= "//span[contains(text(),'Apple MacBook Air 13.3\" MQD32LL/A, Intel Core i5-5')]")
    public WebElement itemMacBk;

    @FindBy(xpath= "//span[contains(text(),'Qty:')]")
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


////*[@id='a-autoid-0-announce']