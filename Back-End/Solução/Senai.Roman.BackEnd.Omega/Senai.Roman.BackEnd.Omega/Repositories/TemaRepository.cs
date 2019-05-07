using Senai.Roman.BackEnd.Omega.Domains;
using Senai.Roman.BackEnd.Omega.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.BackEnd.Omega.Repositories
{
    public class TemaRepository : ITemaRepository
    {
        public void Atualizar(Temas tema)
        {
            using (RomanContext ctx = new RomanContext())
            {
                ctx.Temas.Update(tema);
                ctx.SaveChanges();
            }
        }

        public Temas BuscarPorId(int id)
        {
            using (RomanContext ctx = new RomanContext())
            {
                return ctx.Temas.Find(id);
            }
        }

        public void Cadastrar(Temas tema)
        {
            using (RomanContext ctx = new RomanContext())
            {
                ctx.Temas.Add(tema);
                ctx.SaveChanges();
            }
        }

        public List<Temas> ListarTodos()
        {
            using (RomanContext ctx = new RomanContext())
            {
                return ctx.Temas.ToList();
            }
        }
    }
}
