using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Versioning;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Models
{
    internal class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public User() { }
        public User(int id, string firstname, string lastname) 
        {
            Id = id;
            FirstName = firstname;
            LastName = lastname;
        }
    }
}
