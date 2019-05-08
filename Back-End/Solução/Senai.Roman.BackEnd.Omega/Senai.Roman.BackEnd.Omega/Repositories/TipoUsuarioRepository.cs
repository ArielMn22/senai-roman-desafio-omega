using Senai.Roman.BackEnd.Omega.Domains;
using Senai.Roman.BackEnd.Omega.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.BackEnd.Omega.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        public List<TipoUsuario> ListarTodos()
        {
            using (RomanContext ctx = new RomanContext())
            {
                return ctx.TipoUsuario.ToList();
            }
        }
    }
}
