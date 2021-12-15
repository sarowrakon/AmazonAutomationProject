package tt.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AmazonBasicsLocators {
	
	@FindBy(xpath= "(//a[contains(text(),'Amazon Basics')])[1]")
	public WebElement amznBasic;

	@FindBy(xpath= "//div[@role='presentation']/following-sibling::div/nav/ul/li[5]/a")
	public WebElement wrkFrmHm;

	@FindBy(xpath= "//span[@itemprop='item']/span[@itemprop='name']")
	public WebElement hWrkfrmHm;

}


// (//a/span[contains(text(),'Work From Home')]

// //body/div[@id='a-page']/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/span[1]