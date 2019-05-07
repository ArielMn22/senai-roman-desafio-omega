using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.BackEnd.Omega.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "Insira o e-mail para logar.")]
        public string Email { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5, ErrorMessage = "Insira uma senha para logar.")]
        public string Senha { get; set; }
    }
}
