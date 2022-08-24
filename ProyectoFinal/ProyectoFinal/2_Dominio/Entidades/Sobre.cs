using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Entidades
{
    public class Sobre
    {
        public int IdSobre { get; set; }

        public string Ubicacion { get; set; }

        public bool? Activo { get; set; }

        public DateTime? FechaDeIngreso { get; set; }

        public DateTime? FechaDeDevolucion { get; set; }

        public int? Humedad { get; set; }

        public int? Germinacion { get; set; }

        public Lote Lote { get; set; }

        public Semilla Semilla { get; set; }

        public Estado Estado { get; set; }
    }
}