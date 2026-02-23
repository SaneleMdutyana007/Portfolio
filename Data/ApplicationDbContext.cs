using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Portolio.Models;
using System.Reflection.Metadata.Ecma335;

namespace Portolio.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    
     public DbSet<Portfolio> Portfolio { get; set; }
    }
}
