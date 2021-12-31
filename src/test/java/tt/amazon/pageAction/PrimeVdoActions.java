package tt.amazon.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import tt.amazon.pageElements.PrimeVdoLocators;
import tt.utilities.SetupDrivers;

import static tt.utilities.SetupDrivers.driver;

public class PrimeVdoActions {

	PrimeVdoLocators primeVdoLocatorsobj;

	public PrimeVdoActions() {
		primeVdoLocatorsobj = new PrimeVdoLocators();
		PageFactory.initElements(driver, primeVdoLocatorsobj);
	}

	public void clickAll() {
		primeVdoLocatorsobj.all.click();
	}

	public void primeVdo() throws Exception {
		primeVdoLocatorsobj.primeVdo.click();
		Thread.sleep(2000);

	}

	public void clickIncluddPrime() throws InterruptedException {
		primeVdoLocatorsobj.includedPrime.click();
		Thread.sleep(2000);
	}

	public void PrimeVdoActionsValidation() {
		// AllDropDownLocatorsobj.AmznBestSlr.isDisplayed();

		String actualTitle = driver.getTitle();
		String expectedTitle = "Amazon.com: Prime Video: Prime Video";
		Assert.assertTrue(actualTitle.contains(expectedTitle));
	}

}
