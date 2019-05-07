using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Roman.BackEnd.Omega.Domains;
using Senai.Roman.BackEnd.Omega.Interfaces;
using Senai.Roman.BackEnd.Omega.Repositories;

namespace Senai.Roman.BackEnd.Omega.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UsuariosController : ControllerBase
    {
        private  IUsuarioRepository UsuarioRepository { get; set; }
        public UsuariosController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        [HttpGet]
        //[Authorize]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(UsuarioRepository.ListarTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = ex
                });
            }
        }

        [HttpPost]
        //[Authorize]
        public IActionResult Cadastrar(Usuarios usuario)
        {
            try
            {
                UsuarioRepository.CadastrarUsuario(usuario);
                return Ok();
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