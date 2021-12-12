package tt.utilities;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class SetupDrivers {
	public static WebDriver driver;
	
	public static void setupDriver() {
		// System.setProperty("webdriver.chrome.driver",
		// "C:\\TTSoftware\\chromedriver.exe");
		WebDriverManager.chromedriver().setup();
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--start-maximized");
		options.addArguments("--disable-notifications");
		
		driver = new ChromeDriver(options);
		System.out.println("Chrome browser is launched");	
		
		driver.manage().window().maximize();
		System.out.println("Browser window is maximized");
		
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);		
		System.out.println("Pageload timout is given");
		
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		System.out.println("Implicit wait is mentioned");
		
		driver.get("https://www.amazon.com/");
		System.out.println("Amazon application is launched");
	}
	public static WebDriver getDriver() {
		return driver;// We will connecting set up driver with locator by initialized Page Factory in the Constructor, in Action Class 
	}

	public static void tearDownDriver() {
		if(driver!=null){
//		driver.quit();
		driver.close();

		System.out.println("Browser is closed");
		
		}

}
}
