using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProyectoFinal.Parametros.Salida
{
    public class AltaUsuarioOut : ParametroBaseOut
    {
        public bool ExisteMail { get; set; }

        public bool ExisteCedula { get; set; }
    }
}