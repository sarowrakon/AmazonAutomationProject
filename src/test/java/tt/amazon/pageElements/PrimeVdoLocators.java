package tt.amazon.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PrimeVdoLocators {

    @FindBy(xpath= "//*[@id='nav-hamburger-menu']")
    public WebElement all;

    @FindBy(xpath= "//div[contains(text(),'Prime Video')]")
    public WebElement primeVdo;

    @FindBy(xpath= "//*[@id='hmenu-content']/ul[2]/li[4]/a")
    public WebElement includedPrime;

//    @FindBy(xpath= "//*[@id=\"hmenu-content\"]/ul[2]/li[4]/a")
//    public WebElement primeTitle;
}