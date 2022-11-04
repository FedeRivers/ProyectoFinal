using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal.Parametros.Salida
{
    public class AltaMejoradorOut : ParametroBaseOut
    {
        public bool ExisteMail { get; set; }
        public bool ExisteCelular { get; set; }
    }
}