package tt.utilities;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class ReadOracleDB {
public Statement st;
public Connection con;

    public ReadOracleDB(){
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            System.out.println("--->OracleDriver Loaded<---");
            this.con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","hr","hr");
            this.st = con.createStatement();
        }catch (Exception e){
            System.out.println("!Database Connectivity Failed!");
            e.printStackTrace();
        }

    }
}
