using Senai.Roman.BackEnd.Omega.Domains;
using Senai.Roman.BackEnd.Omega.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.BackEnd.Omega.Interfaces
{
    public interface IUsuarioRepository
    {
        List<Usuarios> ListarTodos();

        void CadastrarUsuario(Usuarios usuario);

        Usuarios BuscarPorEmailESenha(LoginViewModel login);
    }
}
