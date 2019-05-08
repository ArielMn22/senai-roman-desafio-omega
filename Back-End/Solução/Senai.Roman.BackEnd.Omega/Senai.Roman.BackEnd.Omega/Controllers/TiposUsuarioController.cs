using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Roman.BackEnd.Omega.Interfaces;
using Senai.Roman.BackEnd.Omega.Repositories;

namespace Senai.Roman.BackEnd.Omega.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class TiposUsuarioController : ControllerBase
    {
        private ITipoUsuarioRepository TipoUsuarioRepository { get; set; }
        public TiposUsuarioController()
        {
            TipoUsuarioRepository = new TipoUsuarioRepository();
        }

        [HttpGet]
        //[Authorize]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(TipoUsuarioRepository.ListarTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = ex
                });
            }
        }
    }
}