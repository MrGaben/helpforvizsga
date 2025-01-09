
using MySqlConnector;
namespace ConsoleApp1
{
    public class Program
    {
       
        static void Main(string[] args)
        {
            try
            {
                string connstr = "server = localhost; database = ingatlan; user = root;";
                using (MySqlConnection conn = new MySqlConnection(connstr))
                {
                    conn.Open();
                    Console.WriteLine("sikeres.");
                    string selectQ = "SELECT `ingatlanok`.*, `kategoriak`.`nev` FROM `kategoriak` inner JOIN `ingatlanok` ON `ingatlanok`.`kategoria` = `kategoriak`.`id`";
                    using (MySqlCommand cmd = new MySqlCommand(selectQ,conn))
                    {
                        using(MySqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read()) 
                            {
                                Console.WriteLine($"Id:{reader["id"]}, Leiras: {reader["leiras"]}");
                            }
                        }
                    }
                    string insertQ = "INSERT INTO `ingatlanok`(`kategoria`, `leiras`, `hirdertesDatuma`, `tehermentes`, `ar`, `kepUrl`) VALUES (1, \"asc\" , now() ,true,25100,'https://fazsom')";
                    using (MySqlCommand cmd = new MySqlCommand(insertQ, conn))
                    {
                        int rowIn = cmd.ExecuteNonQuery();
                        Console.WriteLine($"{rowIn} sor benne van");
                    }
                    string updateQ = "UPDATE `ingatlanok` SET ar = ar + 5000000 WHERE id = 9";
                    using(MySqlCommand updatecomm = new MySqlCommand(updateQ, conn))
                    {
                        int rowsUpd = updatecomm.ExecuteNonQuery();
                        Console.WriteLine($"{rowsUpd} done and dusted");
                    }
                    string deleteQ = "DELETE FROM `ingatlanok` WHERE id = 10";
                    using (MySqlCommand deletecmd = new MySqlCommand(deleteQ, conn))
                    {
                        int rowDel = deletecmd.ExecuteNonQuery();
                        Console.WriteLine($"{rowDel} done and dusted");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Hiba: {ex.Message}");
            }
        }
    }
}