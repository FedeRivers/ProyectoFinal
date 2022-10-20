using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal.Parametros.Salida
{
    public class ModificarUsuarioOut : ParametroBaseOut
    {
        public bool ExisteMail { get; set; }

        public bool ExisteCedula { get; set; }
    }
}