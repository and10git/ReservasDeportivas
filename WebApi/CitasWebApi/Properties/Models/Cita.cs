namespace CitasWebApi.Properties.Models
{
    public class Cita
    {
        public int Id { get; set; }
        public int ActividadId { get; set; }        
        public string Nombre { get; set; }
        public int NumeroPista { get; set; }
        public DateTime Fecha { get; set; }
        public int TiempoHoras { get; set; }
        public string Observaciones { get; set; }

        public Actividad Actividad { get; set; }
    }
}
