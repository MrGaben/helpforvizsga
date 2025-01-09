using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Windows;

namespace WpfApp1
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            BetoltesKategoriak();
        }
        private void BetoltesKategoriak()
        {
            string connstr = "server=localhost;database=ingatlan;user=root;";
            try
            {
                using (MySqlConnection conn = new MySqlConnection(connstr))
                {
                    conn.Open();
                    string selectQ = "SELECT * FROM `kategoriak` ORDER BY `id` ASC";
                    using (MySqlCommand cmd = new MySqlCommand(selectQ, conn))
                    {
                        using (MySqlDataReader reader = cmd.ExecuteReader())
                        {
                            List<Kategoria> kategoriak = new List<Kategoria>();
                            while (reader.Read())
                            {
                                kategoriak.Add(new Kategoria
                                {
                                    Id = Convert.ToInt32(reader["id"]),
                                    Nev = reader["nev"].ToString()
                                });
                            }
                            KategoriaComboBox.ItemsSource = kategoriak;
                            KategoriaComboBox.DisplayMemberPath = "Nev";
                            KategoriaComboBox.SelectedValuePath = "Id";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Hiba történt a kategóriák betöltésekor: {ex.Message}");
            }
        }

        private void RogzitesButton_Click(object sender, RoutedEventArgs e)
        {
            if (
                string.IsNullOrEmpty(ArTextBox.Text) ||
                !decimal.TryParse(ArTextBox.Text, out var ar) ||
                KategoriaComboBox.SelectedItem == null)
            {
                MessageBox.Show("Kérem ellenőrizze az adatokat! Valamit nem töltött ki megfelelően.");
                return;
            }
            if (ar <= 0)
            {
                MessageBox.Show("Az árnak pozitív számnak kell lennie.");
                return;
            }

            try
            {
                string connstr = "server=localhost;database=ingatlan;user=root;";
                using (MySqlConnection conn = new MySqlConnection(connstr))
                {
                    conn.Open();
                    string insertQ = "INSERT INTO `ingatlanok`(`kategoria`, `leiras`, `hirdertesDatuma`, `tehermentes`, `ar`, `kepUrl`) " +
                                     "VALUES (@kategoria, @leiras, NOW(), @tehermentes, @ar, @kepUrl)";
                    using (MySqlCommand cmd = new MySqlCommand(insertQ, conn))
                    {
                        cmd.Parameters.AddWithValue("@kategoria", ((Kategoria)KategoriaComboBox.SelectedItem).Id);
                        cmd.Parameters.AddWithValue("@leiras", LeirasTextBox.Text);
                        cmd.Parameters.AddWithValue("@tehermentes", Tehermentescheckbox.IsChecked); 
                        cmd.Parameters.AddWithValue("@ar", ar);
                        cmd.Parameters.AddWithValue("@kepUrl", kepurl.Text); 

                        int rowsAffected = cmd.ExecuteNonQuery();
                        MessageBox.Show($"{rowsAffected} ingatlan rögzítve.");
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Hiba történt az ingatlan rögzítésekor: {ex.Message}");
            }
        }
    }

    public class Kategoria
    {
        public int Id { get; set; }
        public string Nev { get; set; }
    }
}
