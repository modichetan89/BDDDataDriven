/*package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepDefinition {
	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void user_is_already_on_login_page(){
	    System.setProperty("webdriver.chrome.driver", "D:\\Selenium New\\chromedriver_win32\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("https://www.freecrm.com");
	}

	
	@When("^Title of login page is freeCRM$")
	public void title_of_login_page_is_freeCRM(){
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password){
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button(){
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
				
	}


	@Then("^User is on homepage$")
	public void user_is_on_homepage(){
		String AfterLoginTitle = driver.getTitle();
		System.out.println("Home page title is : "+AfterLoginTitle);
		Assert.assertEquals("CRMPRO", AfterLoginTitle);
	}
	
	@Then("^User opens the new contact page$")
	public void user_opens_the_new_contact_page() throws InterruptedException{
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
		Thread.sleep(3000);
	}

	@Then("^User added \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_added_and_and(String firstName, String lastName, String position){
		driver.findElement(By.id("first_name")).sendKeys(firstName);
		driver.findElement(By.id("surname")).sendKeys(lastName);
		driver.findElement(By.id("company_position")).sendKeys(position);
	}

	@Then("^User saves the details by clicking on Save button\\.$")
	public void user_saves_the_details_by_clicking_on_Save_button(){
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}
	
	@Then("^Close the browser$")
	public void close_the_browser(){
		driver.quit();
	}
}
*/