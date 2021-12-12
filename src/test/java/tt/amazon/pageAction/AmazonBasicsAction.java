package tt.amazon.pageAction;

import org.openqa.selenium.support.PageFactory;

import tt.amazon.pageElements.AmazonBasicsLocators;
import tt.utilities.SetupDrivers;

public class AmazonBasicsAction {
	AmazonBasicsLocators AmazonBasicsLocatorsObj;
	
	public AmazonBasicsAction(){
		AmazonBasicsLocatorsObj = new AmazonBasicsLocators();
		PageFactory.initElements(SetupDrivers.driver, AmazonBasicsLocatorsObj);
		
		
	}

	public void clickOnAmazonBasics(){
		AmazonBasicsLocatorsObj.amznBasic.click();
	}
	
	public void clickOnWorkFromHome() throws InterruptedException{
		Thread.sleep(3000);
		AmazonBasicsLocatorsObj.wrkFrmHm.click();		
		
	}
	
	
	
	public void WorkFromHome(){
		AmazonBasicsLocatorsObj.hWrkfrmHm.isDisplayed();
	}
	
	
	/*public String validateWorkFromHome(){
		Boolean flag=false;
		String text="";
		flag=AmazonBasicsLocatorsObj.hWrkfrmHm.isDisplayed();


		if(flag){
			 text=AmazonBasicsLocatorsObj.hWrkfrmHm.getText();
		}
		
		return text;

	}
	*/
	
		
}
	

