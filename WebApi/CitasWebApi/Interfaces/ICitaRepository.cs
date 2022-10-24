using CitasWebApi.DTO;
using CitasWebApi.Properties.Models;

namespace CitasWebApi.Interfaces
{
    public interface ICitaRepository
    {
        List<CitaReturnDTO> Get();

        CitaReturnDTO Get(int id);

        CitaReturnDTO View(int id);

        void Delete(int id);

        void Post(CitaReturnDTO cita);

        void Put(int id, CitaReturnDTO citaDto);

        List<Actividad> GetActividades();
    }
}
