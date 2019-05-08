using Microsoft.EntityFrameworkCore;
using Senai.Roman.BackEnd.Omega.Domains;
using Senai.Roman.BackEnd.Omega.Interfaces;
using Senai.Roman.BackEnd.Omega.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.BackEnd.Omega.Repositories
{
    public class ProjetoRepository : IProjetoRepository
    {
        public void AtualizarProjeto(Projetos projeto)
        {
            using (RomanContext ctx = new RomanContext())
            {
                ctx.Projetos.Update(projeto);
                ctx.SaveChanges();
            }
        }

        public Projetos BuscarPorId(int id)
        {
            using (RomanContext ctx = new RomanContext())
            {
                return ctx.Projetos.Find(id);
            }
        }

        public void CadastrarProjeto(Projetos projeto)
        {
            using (RomanContext ctx = new RomanContext())
            {
                ctx.Projetos.Add(projeto);
                ctx.SaveChanges();
            }
        }

        public List<ProjetoViewModel> ListarPorIdTema(int idTema)
        {
            List<Projetos> projetos;

            using (RomanContext ctx = new RomanContext())
            {

                projetos = ctx.Projetos
                    .Include(x => x.IdUsuarioNavigation)
                    .Include(x => x.IdTemaNavigation)
                    .Where(x => x.IdTema == idTema)
                    .ToList();
            }

            return TransformaEmProjetoViewModel(projetos);
        }

        public List<ProjetoViewModel> ListarTodos()
        {
            List<Projetos> projetos;

            using (RomanContext ctx = new RomanContext())
            {
                projetos =  ctx.Projetos
                    .Include(x => x.IdUsuarioNavigation)
                    .Include(x => x.IdTemaNavigation)
                    .ToList();
            }

            return TransformaEmProjetoViewModel(projetos);
        }

        public List<ProjetoViewModel> TransformaEmProjetoViewModel(List<Projetos> projetos)
        {
            List<ProjetoViewModel> projetosViewModel = new List<ProjetoViewModel>();

            foreach (Projetos projeto in projetos)
            {
                ProjetoViewModel projetoViewModel = new ProjetoViewModel()
                {
                    Id = projeto.Id,
                    Nome = projeto.Nome,

                    IdTema = projeto.IdTema.ToString(),
                    TemaNome = projeto.IdTemaNavigation.Nome,

                    IdUsuario = projeto.IdUsuario.ToString(),
                    UsuarioEmail = projeto.IdUsuarioNavigation.Email,
                    UsuarioNome = projeto.IdUsuarioNavigation.Nome
                };

                projetosViewModel.Add(projetoViewModel);
            }

            return projetosViewModel;
        }
    }
}
