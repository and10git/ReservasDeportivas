using CitasWebApi.DTO;
using CitasWebApi.Interfaces;
using CitasWebApi.Properties.Models;
using Microsoft.AspNetCore.Mvc;

namespace CitasWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitaController : ControllerBase
    {
        private readonly ICitaRepository _citaRepository;

        public CitaController(ICitaRepository citaRepository)
        {
            this._citaRepository = citaRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var citas = this._citaRepository.Get();

                return Ok(citas);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet("View/{id}")]
        public IActionResult View(int id)
        {
            try
            {
                var citaDto = _citaRepository.View(id);

                return Ok(citaDto);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet("Actividades")]
        public IActionResult GetActividades()
        {
            try
            {
                var actividades = this._citaRepository.GetActividades();                

                return Ok(actividades);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var citaDto = _citaRepository.Get(id);

                return Ok(citaDto);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _citaRepository.Delete(id);
                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }


        [HttpPost]
        public IActionResult Post(CitaReturnDTO cita)
        {
            try
            {
               _citaRepository.Post(cita);
                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, CitaReturnDTO citaDto)
        {
            try
            {
                _citaRepository.Put(id, citaDto);

                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
