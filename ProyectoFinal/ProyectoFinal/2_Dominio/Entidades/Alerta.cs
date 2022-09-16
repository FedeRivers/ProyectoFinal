using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Entidades
{
    public class Alerta
    {
        public int IdAlerta { get; set; }

        public DateTime FechaDeCreacion { get; set; }

        public int NumeroLote { get; set; }

        public int IdSemilla { get; set; }

        public int IdCamara { get; set; }

        public int IdTipoDeUsuario { get; set; }

        public bool Activo { get; set; }
    }
}