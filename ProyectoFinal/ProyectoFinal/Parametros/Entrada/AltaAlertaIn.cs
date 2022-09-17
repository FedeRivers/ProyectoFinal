using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal.Parametros.Entrada
{
    public class AltaAlertaIn
    {
        public DateTime FechaDeEjecucion { get; set; }

        public int NumeroLote { get; set; }

        public int IdSemilla { get; set; }

        public int IdCamara { get; set; }

        public int IdTipoDeUsuario { get; set; }
    }
}