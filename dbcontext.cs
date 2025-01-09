using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ConsoleApp1.Models;

namespace ConsoleApp1
{
    internal class UserDbContext:DbContext
    {
        public DbSet<User> User { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=localhost;database=entidb;user=root;", new MySqlServerVersion(new Version(8, 0, 30)));
        }
    }
}
