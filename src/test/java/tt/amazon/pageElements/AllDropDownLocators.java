package tt.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AllDropDownLocators {

    @FindBy(xpath= "//*[@id=\'nav-hamburger-menu\']")
    public WebElement allDD;

    @FindBy(xpath= "//a[1][contains(text(),'Best Sellers')]")
    public WebElement BestSlr;

    @FindBy(xpath= "//*[@id=\"zg_banner_text\"]")
    public WebElement AmznBestSlr;

}