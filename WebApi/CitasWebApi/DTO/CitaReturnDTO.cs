namespace CitasWebApi.DTO
{
    public class CitaReturnDTO
    {
        public int id { get; set; }
        public string actividad { get; set; }
        public int actividadId { get; set; }
        public string nombre { get; set; }
        public int numPista { get; set; }
        public string fechaCita { get; set; }
        public int tiempoHoras { get; set; }
        public string observaciones { get; set; }
    }
}
