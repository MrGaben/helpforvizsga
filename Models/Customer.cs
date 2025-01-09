using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Models
{
    internal class Customer
    {
        public int CustomerId { get; set; }
        public string név { get; set; }




        private string _email;
        public string Email
        {
            get => _email;
            set
            {
                if (string.IsNullOrEmpty(value))
                    throw new ArgumentException("Email cannot be empty.");

                _email = value;
            }
        }


        public DateTime CreatedAt { get; private set; }


        public List<Orders> Orders { get; set; } = new List<Orders>();


        public Customer(int id, string name)
        {
            CustomerId = id;
            Name = name;
            CreatedAt = DateTime.Now; 
            Orders = new List<Orders>();
        }

        public Customer(string name, string email)
        {
            Name = name;
            Email = email;
            CreatedAt = DateTime.Now; 
            Orders = new List<Orders>();
        }

        public Customer() { }

    }
}
