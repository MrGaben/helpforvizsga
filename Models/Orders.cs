using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Models
{
    internal class Orders
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public int Price { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer {get; set;}
        public Orders(string proname, int custid) 
        {
            ProductName = proname;
            CustomerId = custid;
        }
        public Orders(string proname, int custid, int id)
        {
            Id = id;
            ProductName = proname;
            CustomerId = custid;

        }
        public Orders() { }
    }
}
