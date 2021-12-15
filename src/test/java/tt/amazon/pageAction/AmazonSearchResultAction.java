package tt.amazon.pageAction;

import org.openqa.selenium.support.PageFactory;

import tt.amazon.pageElements.AmazonSearchResultLocators;
import tt.utilities.SetupDrivers;

public class AmazonSearchResultAction {
	
	AmazonSearchResultLocators AmazonSearchResultLocatorsObj;
	
	public AmazonSearchResultAction(){
		AmazonSearchResultLocatorsObj = new AmazonSearchResultLocators();
		PageFactory.initElements(SetupDrivers.driver, AmazonSearchResultLocatorsObj);
	}
	
	public void searchDiapers(){
		AmazonSearchResultLocatorsObj.txtbxSearch.sendKeys("Diapers");
		AmazonSearchResultLocatorsObj.btnSearch.click();
	}
	
	
	public void verifyDiapersItems(){
		AmazonSearchResultLocatorsObj.txtDiapers.isDisplayed();
		}
	
	public void searchToys(){
		AmazonSearchResultLocatorsObj.txtbxSearch.sendKeys("Toys");
		AmazonSearchResultLocatorsObj.btnSearch.click();
	}
	
	
	public void verifyToysItems(){
		AmazonSearchResultLocatorsObj.txtToys.isDisplayed();
		}
	
	public void returnPage(){
		SetupDrivers.driver.navigate().back();
	}
	
}
