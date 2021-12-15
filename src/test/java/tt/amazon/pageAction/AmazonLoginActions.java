package tt.amazon.pageAction;

import gherkin.formatter.model.Scenario;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import tt.amazon.pageElements.AmazonLoginLocators;
import tt.utilities.SetupDrivers;

import java.io.File;
import java.util.concurrent.TimeUnit;


public class AmazonLoginActions {
	AmazonLoginLocators AmazonLoginLocatorsObj;


	public AmazonLoginActions (){
	
		AmazonLoginLocatorsObj= new AmazonLoginLocators();
		PageFactory.initElements(SetupDrivers.driver, AmazonLoginLocatorsObj);	
		
		
	}
	
	public void loadAmazonHomePage(){
		SetupDrivers.driver.get("https://www.amazon.com/");
//		AmazonLoginLocatorsObj.acntSignIn.click();

	}
	
	public void input_email(){
		AmazonLoginLocatorsObj.emailBx.sendKeys("mirazakon@outlook.com");
		AmazonLoginLocatorsObj.contBtn.click();
		
	}
	
	public void input_password(){
		AmazonLoginLocatorsObj.passBx.sendKeys("TalentTech777");
		AmazonLoginLocatorsObj.signInBtn.click();
	}
	
	public void userProfile(){
		AmazonLoginLocatorsObj.acntName.isDisplayed();
	}

	public void screenShot() throws Exception{
		//Screenshot:
		File screenshot = ((TakesScreenshot)SetupDrivers.driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(screenshot, new File(".//ScreenShots/scenarioName.png"));
	}
	
	
 
	
}

	
