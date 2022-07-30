using ProyectoFinal._2_Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal.Parametros.Salida
{
    public class LoginOut : ParametroBaseOut
    {
        public Usuario Usuario { get; set; }
    }
}