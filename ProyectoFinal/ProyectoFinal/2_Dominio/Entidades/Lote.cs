using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Entidades
{
    public class Lote
    {
        public int IdLote { get; set; }

        public int Numero { get; set; }

        public string Descripcion { get; set; }

        public DateTime? FechaDeIngreso { get; set; }

        public Mejorador Mejorador { get; set; }

        public bool? Activo { get; set; }
    }
}