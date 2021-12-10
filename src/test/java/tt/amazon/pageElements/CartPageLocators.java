package tt.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CartPageLocators {


    @FindBy(xpath= "//*[@id=\'twotabsearchtextbox\']")
    public WebElement searchBx;

    @FindBy(xpath= "//*[@id=\'nav-search-submit-button\']")
    public WebElement submitBtn;

    @FindBy(xpath= "//span[contains(text(),'2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Sil')]")
    public WebElement itemMacBk;

    @FindBy(xpath= "//*[@id=\"a-autoid-0-announce\"]/span[1]")
    public WebElement qntyBtn;

    @FindBy(xpath= "//*[@id=\'attachSiNoCoverage\']/span/input")
    public WebElement noPrtectionBtn;

    @FindBy(xpath= "//*[@id=\'add-to-cart-button\']")
    public WebElement addToCartBtn;

    @FindBy(xpath= "//*[@id=\"attachDisplayAddBaseAlert\"]/div/h4")
    public WebElement cartPageValidation;

}
