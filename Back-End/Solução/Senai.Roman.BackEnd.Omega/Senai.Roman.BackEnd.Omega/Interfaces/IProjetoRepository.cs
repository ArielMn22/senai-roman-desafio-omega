using Senai.Roman.BackEnd.Omega.Domains;
using Senai.Roman.BackEnd.Omega.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.BackEnd.Omega.Interfaces
{
    public interface IProjetoRepository
    {
        List<ProjetoViewModel> ListarTodos();

        List<ProjetoViewModel> ListarPorIdTema(int idTema);

        void CadastrarProjeto(Projetos projeto);

        void AtualizarProjeto(Projetos projeto);

        Projetos BuscarPorId(int id);

        List<ProjetoViewModel> TransformaEmProjetoViewModel(List<Projetos> projetos);
    }
}
