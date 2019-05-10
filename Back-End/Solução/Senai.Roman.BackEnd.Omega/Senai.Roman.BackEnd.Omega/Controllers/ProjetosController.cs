using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
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
    public class ProjetosController : ControllerBase
    {
        private  IProjetoRepository ProjetoRepository { get; set; }

        public ProjetosController()
        {
            ProjetoRepository = new ProjetoRepository();
        }

        [HttpGet]
        //[Authorize]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(ProjetoRepository.ListarTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = ex
                });
            }
        }

        [HttpGet("{id}")]
        //[Authorize]
        public IActionResult ListarPorTema(int id)
        {
            try
            {
                return Ok(ProjetoRepository.ListarPorIdTema(id));
            }
            catch (Exception ex)
            {
                return BadRequest(new {
                    mensagem = ex
                });
            }
        }

        [HttpPost]
        //[Authorize]
        public IActionResult Cadastrar(Projetos projeto)
        {
            try
            {
                //int usuarioId = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                //projeto.IdUsuario = usuarioId;

                ProjetoRepository.CadastrarProjeto(projeto);

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

        [HttpPut]
        //[Authorize]
        public IActionResult Atualizar(Projetos novoProjeto)
        {
            try
            {
                Projetos projetoProcurado = ProjetoRepository.BuscarPorId(novoProjeto.Id);

                if (projetoProcurado == null)
                {
                    return BadRequest(new
                    {
                        mensagem = "Projeto a ser atualizado não encontrado."
                    });
                }

                // Checando valores a serem atualizados
                if (novoProjeto.Nome != null)
                {
                    projetoProcurado.Nome = novoProjeto.Nome;
                }

                 if (novoProjeto.IdTema != null)
                {
                    projetoProcurado.IdTema = novoProjeto.IdTema;
                }

                ProjetoRepository.AtualizarProjeto(projetoProcurado);

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