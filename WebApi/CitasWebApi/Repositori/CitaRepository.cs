using CitasWebApi.DTO;
using CitasWebApi.Interfaces;
using CitasWebApi.Properties.Models;
using Microsoft.Extensions.Configuration;
using System;

namespace CitasWebApi.Repositori
{
    public class CitaRepository : ICitaRepository
    {
        private readonly ApplicationDbContext _context;

        public CitaRepository(ApplicationDbContext context, IConfiguration configuration)
        {
            this._context = context;
        }

        public List<CitaReturnDTO> Get()
        {
            var citas = _context.Citas.Select(x =>
                   new CitaReturnDTO()
                   {
                       id = x.Id,
                       actividad = x.Actividad.Nombre,
                       actividadId = x.Actividad.Id,
                       nombre = x.Nombre,
                       numPista = x.NumeroPista,
                       fechaCita = $"{x.Fecha.ToShortDateString()} {x.Fecha.ToShortTimeString()}",
                       tiempoHoras = x.TiempoHoras,
                       observaciones = x.Observaciones
                   }).ToList();

            return citas;
        }

        public List<Actividad> GetActividades()
        {
            List<Actividad> actividades;
            actividades = _context.Actividad.ToList();

            if(actividades.Count == 0)
            {
                //CREAMOS ACTIVIDADES PARA TENER DE EJEMPLO
                string[] listaActividadesInsert = { "Tenis", "Padel", "Futbol", "Basket", "GYM" };

                foreach (var actividad in listaActividadesInsert)
                {
                    var nuevaActividad = new Actividad() { Nombre = actividad };
                    _context.Actividad.Add(nuevaActividad);
                    actividades.Add(nuevaActividad);
                }
                _context.SaveChanges();              
            }

            return actividades;
        }

        public CitaReturnDTO Get(int id)
        {
            var cita = _context.Citas.FirstOrDefault(x => x.Id == id);

            if (cita == null)
                return null;

            var actividad = _context.Actividad.FirstOrDefault(x => x.Id == cita.ActividadId);

            var citaDto = new CitaReturnDTO()
            {
                id = cita.Id,
                actividad = cita.ActividadId.ToString(),
                actividadId = cita.ActividadId,
                nombre = cita.Nombre,
                numPista = cita.NumeroPista,
                fechaCita = $"{cita.Fecha.ToShortDateString()} {cita.Fecha.ToShortTimeString()}",
                tiempoHoras = cita.TiempoHoras,
                observaciones = cita.Observaciones
            };

            return citaDto;
        }

        public CitaReturnDTO View(int id)
        {
            var cita = _context.Citas.FirstOrDefault(x => x.Id == id);

            if (cita == null)
                return null;

            var actividad = _context.Actividad.FirstOrDefault(x => x.Id == cita.ActividadId);

            var citaDto = new CitaReturnDTO()
            {
                id = cita.Id,
                actividad = actividad != null ? actividad.Nombre : "",
                actividadId = cita.ActividadId,
                nombre = cita.Nombre,
                numPista = cita.NumeroPista,
                fechaCita = $"{cita.Fecha.ToShortDateString()} {cita.Fecha.ToShortTimeString()}",
                tiempoHoras = cita.TiempoHoras,
                observaciones = cita.Observaciones
            };

            return citaDto;
        }

        public void Delete(int id)
        {
            var cita = _context.Citas.FirstOrDefault(x => x.Id == id);

            if (cita != null)
            {
               _context.Citas.Remove(cita);
               _context.SaveChanges();
            }
            else
            {
                throw new Exception("No se encontro una cinta con el id: " + id.ToString());
            }
        }

        public void Post(CitaReturnDTO cita)
        {           
            var nuevaCita = new Cita()
            {
                ActividadId = int.Parse(cita.actividad),
                Fecha = DateTime.Parse(cita.fechaCita),
                Nombre = cita.nombre,
                NumeroPista = cita.numPista,
                TiempoHoras = cita.tiempoHoras,
                Observaciones = cita.observaciones
            };

            _context.Citas.Add(nuevaCita);
            _context.SaveChanges();
        }


        public void Put(int id, CitaReturnDTO citaDto) 
        {
            if(citaDto == null)
                throw new Exception("Error al editar la cita");


            var citaFilter = _context.Citas.FirstOrDefault(x => x.Id == id);

            if (citaFilter == null)
                throw new Exception("Error al editar la cita con id " + id.ToString());
           
            //EDITAR
            citaFilter.ActividadId = int.Parse(citaDto.actividad);
            citaFilter.Nombre = citaDto.nombre;
            citaFilter.NumeroPista = citaDto.numPista;
            citaFilter.Fecha = DateTime.Parse(citaDto.fechaCita);
            citaFilter.TiempoHoras = citaDto.tiempoHoras;
            citaFilter.Observaciones = citaDto.observaciones;

            _context.SaveChanges();
        }
    }
}
