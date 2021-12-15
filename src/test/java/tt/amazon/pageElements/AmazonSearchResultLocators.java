package tt.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.FindBy;

public class AmazonSearchResultLocators {

	@FindBy(xpath="//input[@id='twotabsearchtextbox']")
	public WebElement txtbxSearch;
	
	@FindBy(xpath="//*[@id='nav-search-submit-button']")
	public WebElement btnSearch;
	
	@FindBy(xpath="//span[contains(text(),'diapers')]")
	public WebElement txtDiapers;
	
	@FindBy(xpath="//span[contains(text(),'toys')]")
	public WebElement txtToys;

	
	
	
}
