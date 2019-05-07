using Senai.Roman.BackEnd.Omega.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.BackEnd.Omega.Interfaces
{
    public interface IProjetoRepository
    {
        List<Projetos> ListarTodos();

        List<Projetos> ListarPorIdTema(int idTema);

        void CadastrarProjeto(Projetos projeto);

        void AtualizarProjeto(Projetos projeto);

        Projetos BuscarPorId(int id);
    }
}
