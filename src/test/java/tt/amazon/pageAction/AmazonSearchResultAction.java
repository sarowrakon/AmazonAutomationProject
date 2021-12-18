package tt.amazon.pageAction;

import org.openqa.selenium.support.PageFactory;

import tt.amazon.pageElements.AmazonSearchResultLocators;
import tt.utilities.ReadExcelSheet;
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

	//Reading excel for search
	public void searchFromExcel() throws Exception {
		String xlData = ReadExcelSheet.getMapData("Search");
		System.out.println("Excel Data ------->>>>>>>>>>>> "+ xlData);
		AmazonSearchResultLocatorsObj.txtbxSearch.sendKeys(xlData);
		AmazonSearchResultLocatorsObj.btnSearch.click();
		Thread.sleep(5000);
	}
	
}
