package tt.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AmazonLoginLocators {
	
	@FindBy(xpath= "//*[@id='nav-link-accountList']/span")
	public WebElement acntSignIn;
	
	@FindBy(xpath= "//*[@id='ap_email']")
	public WebElement emailBx;
	
	@FindBy(xpath= "//*[@class='a-button-input']")
	public WebElement contBtn;
	
	@FindBy(xpath= "//*[@id='ap_password']")
	public WebElement passBx;
	
	@FindBy(xpath= "//*[@id='signInSubmit']")
	public WebElement signInBtn;
	
	@FindBy(xpath= "//*[contains(text(),'Hello, Miraz')]")
	public WebElement acntName;

}
