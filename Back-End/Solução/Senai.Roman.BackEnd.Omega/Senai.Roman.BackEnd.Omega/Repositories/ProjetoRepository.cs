using Senai.Roman.BackEnd.Omega.Domains;
using Senai.Roman.BackEnd.Omega.Interfaces;
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

        public List<Projetos> ListarPorIdTema(int idTema)
        {
            using (RomanContext ctx = new RomanContext())
            {
                return ctx.Projetos.Where(x => x.IdTema == idTema).ToList();
            }
        }

        public List<Projetos> ListarTodos()
        {
            using (RomanContext ctx = new RomanContext())
            {
                return ctx.Projetos.ToList();
            }
        }
    }
}
