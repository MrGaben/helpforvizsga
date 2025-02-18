using System;
using System.IO;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        string filePath = @"C:\path\to\diakok.txt"; // A fájl elérési útvonala
        List<Diak> diakok = new List<Diak>();

        foreach (var line in File.ReadLines(filePath))
        {
            string[] parts = line.Split('\t'); // Tabulátor mentén szétbontás
            if (parts.Length == 6) // Ellenőrizzük, hogy minden oszlop megvan-e
            {
                diakok.Add(new Diak
                {
                    Nev = parts[0],
                    Evfolyam = int.Parse(parts[1]),
                    Osztaly = parts[2],
                    Adat1 = int.Parse(parts[3]),
                    Adat2 = int.Parse(parts[4]),
                    Azonosito = int.Parse(parts[5])
                });
            }
        }

        // Példa kiíratás
        foreach (var diak in diakok)
        {
            Console.WriteLine($"{diak.Nev}, {diak.Evfolyam}. évfolyam, {diak.Osztaly} osztály, Adat1: {diak.Adat1}, Adat2: {diak.Adat2}, Azonosító: {diak.Azonosito}");
        }
    }
}

class Diak
{
    public string Nev { get; set; }
    public int Evfolyam { get; set; }
    public string Osztaly { get; set; }
    public int Adat1 { get; set; }
    public int Adat2 { get; set; }
    public int Azonosito { get; set; }
}