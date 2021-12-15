package tt.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EndToEndLocators {
	
	@FindBy(id="twotabsearchtextbox")
	public WebElement txtSearch;
	
	@FindBy(xpath="//div[@class='s-main-slot s-result-list s-search-results sg-row']/div[4]")
	public WebElement linkSearchResult;
	
	@FindBy(id="add-to-cart-button")
	public WebElement btnAddToCart;
	
	@FindBy(xpath="//input[@class='a-button-input' and @type='submit' and @aria-labelledby='attachSiNoCoverage-announce']")
	public WebElement btnNoThanks;
	
	@FindBy(xpath="//span[contains(text(),'Added to Cart')]")
	public WebElement lblAddedToCart;
	
	@FindBy(xpath="//input[@name='proceedToRetailCheckout']")
	public WebElement btnProceedToCheckout;
	
	
	@FindBy(xpath="//span[@id='sw-gtc']/span/a")
	public WebElement btnGoTocart;
	
	@FindBy(id="sc-subtotal-label-activecart")
	public WebElement lblSubTotal;
	

}
