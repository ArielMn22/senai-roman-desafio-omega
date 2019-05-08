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
    public class TemasController : ControllerBase
    {
        private ITemaRepository TemaRepository { get; set; }
        public TemasController()
        {
            TemaRepository = new TemaRepository();
        }

        [HttpGet]
        //[Authorize]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(TemaRepository.ListarTodos());
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
        public IActionResult Cadastrar(Temas tema)
        {
            try
            {
                TemaRepository.Cadastrar(tema);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new {
                    mensagem = ex
                });
            }
        }

        [HttpPut]
        //[Authorize]
        public IActionResult Atualizar(Temas tema)
        {
            try
            {
                Temas temaProcurado = TemaRepository.BuscarPorId(tema.Id);
                
                if (temaProcurado == null)
                {
                    return BadRequest(new
                    {
                        mensagem = "Não foi possível encontrar o tema."
                    });
                }

                if (tema.Nome != null)
                {
                    temaProcurado.Nome = tema.Nome;
                }

                if (tema.StatusAtivo != null)
                {
                    temaProcurado.StatusAtivo = tema.StatusAtivo;
                }

                TemaRepository.Atualizar(temaProcurado);
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