package tt.utilities;

import cucumber.api.java.After;

public class AfterActions {


	//update


	@After
	public void afterActions(){
		SetupDrivers.tearDownDriver();
		System.out.println("--------- Test Complete");
	}
}



