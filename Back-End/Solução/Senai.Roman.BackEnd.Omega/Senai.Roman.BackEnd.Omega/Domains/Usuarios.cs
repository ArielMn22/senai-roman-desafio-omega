using System;
using System.Collections.Generic;

namespace Senai.Roman.BackEnd.Omega.Domains
{
    public partial class Usuarios
    {
        public Usuarios()
        {
            Projetos = new HashSet<Projetos>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public int? IdTipoUsuario { get; set; }

        public TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public ICollection<Projetos> Projetos { get; set; }
    }
}
