using CitasWebApi.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CitasWebApi.Properties.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Cita> Citas { get; set; }

        public DbSet<Actividad> Actividad { get; set; }
        
    }
}
