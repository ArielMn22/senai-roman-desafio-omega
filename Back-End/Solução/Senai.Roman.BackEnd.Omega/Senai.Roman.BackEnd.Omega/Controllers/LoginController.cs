using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Senai.Roman.BackEnd.Omega.Domains;
using Senai.Roman.BackEnd.Omega.Interfaces;
using Senai.Roman.BackEnd.Omega.Repositories;
using Senai.Roman.BackEnd.Omega.ViewModels;

namespace Senai.Roman.BackEnd.Omega.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository { get; set; }
        public LoginController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            Usuarios usuarioProcurado = UsuarioRepository.BuscarPorEmailESenha(login);

            if (usuarioProcurado == null)
            {
                return BadRequest(new
                {
                    mensagem = "Usuário não encontrado, e-mail ou senha incorretos."
                });
            }

            var claims = new[]
               {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioProcurado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioProcurado.Id.ToString()),
                    new Claim(ClaimTypes.Role, usuarioProcurado.IdTipoUsuarioNavigation.Nome),
                    new Claim("tipoUsuario", usuarioProcurado.IdTipoUsuarioNavigation.Nome)
                };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("roman-chave-autenticacao"));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "Roman.WebApi",
                audience: "Roman.WebApi",
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds
            );

            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }
    }
}