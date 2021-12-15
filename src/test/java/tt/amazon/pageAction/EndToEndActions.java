package tt.amazon.pageAction;

import org.openqa.selenium.Keys;
import org.openqa.selenium.support.PageFactory;

import tt.amazon.pageElements.EndToEndLocators;
import tt.utilities.SetupDrivers;

public class EndToEndActions {

	EndToEndLocators EndtoEndLocatorsObj;
	

	public EndToEndActions() {
		EndtoEndLocatorsObj = new EndToEndLocators();
		PageFactory.initElements(SetupDrivers.driver, EndtoEndLocatorsObj);
		
	}

	/**
	 * @summary This method is used to enter the search text in the text box
	 * @param searchTxt
	 */
	public void enterSearchText(String searchTxt) {

		// enter the value in the search text box to search
		EndtoEndLocatorsObj.txtSearch.sendKeys(searchTxt);
		System.out.println("Search text is entered as :" + searchTxt);

		// press enter key on the search box

		EndtoEndLocatorsObj.txtSearch.sendKeys(Keys.ENTER);
		System.out.println("Clicked on Enter key on the search tex box");

	}

	/**
	 * @summary This method selects an item from the search results and clicks
	 *          on it
	 */
	public void selectItemFromsearchResults() {
		EndtoEndLocatorsObj.linkSearchResult.click();

		System.out.println("Selected the item");

	}

	/**
	 * @summary This method clicks on the add to Cart button
	 * @author Akon
	 * @throws InterruptedException
	 */
	public void clickToAddtoCartBtn() throws InterruptedException {
		Thread.sleep(1000);		
		EndtoEndLocatorsObj.btnAddToCart.click();
		System.out.println("Clicked on 'Add to Cart' button");
	
	}

	/**
	 * @autor Akon
	 * @summary This method clicks on 'No Thanks' button on the 'Accident
	 *          Protection Plan' page
	 */
	public void clickToNoThanksBtn() {
			EndtoEndLocatorsObj.btnNoThanks.click();
			System.out.println("No Thanks button is clicked on");
		
	}

	/**
	 * @author Akon
	 * @summary This method verifies the text on the 'Add to cart' page to
	 *          ensure the item is added to the cart
	 */
	public void getAddedToCartText() {
		String text = "";
		if (EndtoEndLocatorsObj.lblAddedToCart.isDisplayed()) {
			text = EndtoEndLocatorsObj.lblAddedToCart.getText();
		}

		if (text.contains("Added to Cart")) {
			System.out.println("Itme is added to the cart");
		}
	}

	/**
	 * @author Akon
	 * @summary This method clicks on 'go To Cart' button on the added to cart
	 *          page
	 */
	public void clickToGoToCartBtn() {
		EndtoEndLocatorsObj.btnGoTocart.click();
		System.out.println("Clicked on 'Go to cart' button ");
	}

	/**
	 * @author Akon
	 * @summary This method check if sub total label is displayed on 'Shopping
	 *          Cart' page
	 */
	public void checkifSubTotalisAvailable() {
		Boolean flag = EndtoEndLocatorsObj.lblSubTotal.isDisplayed();
		if (flag) {
			System.out.println("Sub total is displayed");
		} else {
			System.out.println("Sub total is not displayed");
		}
	}

}
