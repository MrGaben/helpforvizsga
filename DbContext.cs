﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ConsoleApp1.Models;

namespace ConsoleApp1
{
    internal class AppDbContext : DbContext
    {
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Orders> Orders { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Mysql adatbázis kapcsolat
        optionsBuilder.UseMySql("server = localhost; database = asd3; user = root;",new
        MySqlServerVersion(new Version(8, 0, 30)));
    }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>()
                .Property(e => e.név)
                .HasMaxLength(100)
                .HasColumnType("varchar(100)")
                .UseCollation("utf8mb4_hungary_ci");

            modelBuilder.Entity<Customer>()
                .Property(e => e.CreatedAt)
                .HasDefaultValue("CURRENT_TIMESTAMP");

            modelBuilder.Entity<Orders>()
               .Property(e => e.Price)
               .HasColumnType("int(5)")
               .HasDefaultValueSql("10");
        }
    }
}