using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Roman.BackEnd.Omega.Interfaces;
using Senai.Roman.BackEnd.Omega.Repositories;

namespace Senai.Roman.BackEnd.Omega.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class EquipesController : ControllerBase
    {
        private IEquipeRepository EquipeRepository { get; set; }
        public EquipesController()
        {
            EquipeRepository = new EquipeRepository();
        }

        [HttpGet]
        //[Authorize]
        public IActionResult ListarTodas()
        {
            try
            {
                return Ok(EquipeRepository.ListarTodas());
            }
            catch (Exception ex)
            {
                return BadRequest(new {
                    mensagem = ex
                });
            }
        }
    }
}