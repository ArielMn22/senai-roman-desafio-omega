using Senai.Roman.BackEnd.Omega.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.BackEnd.Omega.Interfaces
{
    public interface IEquipeRepository
    {
        List<Equipes> ListarTodas();
    }
}
