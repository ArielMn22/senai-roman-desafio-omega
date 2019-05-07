using System;
using System.Collections.Generic;

namespace Senai.Roman.BackEnd.Omega.Domains
{
    public partial class Temas
    {
        public Temas()
        {
            Projetos = new HashSet<Projetos>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public bool? StatusAtivo { get; set; }

        public ICollection<Projetos> Projetos { get; set; }
    }
}
