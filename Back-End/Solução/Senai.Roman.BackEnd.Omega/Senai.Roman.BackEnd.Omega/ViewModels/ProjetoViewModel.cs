using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.BackEnd.Omega.ViewModels
{
    public class ProjetoViewModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        public string IdTema { get; set; }
        public string TemaNome { get; set; }

        public string IdUsuario { get; set; }
        public string UsuarioEmail { get; set; }
        public string UsuarioNome { get; set; }
    }
}
