using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal.Parametros.Salida
{
    public class ExisteEspacioLibreOut : ParametroBaseOut
    {
        public int Fila { get; set; }

        public int Columna { get; set; }
    }
}