using Senai.Roman.BackEnd.Omega.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.BackEnd.Omega.Interfaces
{
    public interface ITemaRepository
    {
        List<Temas> ListarTodos();

        void Cadastrar(Temas tema);

        void Atualizar(Temas tema);

        Temas BuscarPorId(int id);
    }
}
