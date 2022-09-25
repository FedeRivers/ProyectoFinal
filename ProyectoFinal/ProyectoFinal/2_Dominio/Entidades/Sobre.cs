using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Entidades
{
    public class Sobre
    {
        public int NumeroSobre { get; set; }

        public Ubicacion Ubicacion { get; set; }

        public bool? Activo { get; set; }

        public DateTime? FechaDeIngreso { get; set; }

        public DateTime? FechaDeDevolucion { get; set; }

        public DateTime? FechaEstimada { get; set; }

        public double? Humedad { get; set; }

        public double? Germinacion { get; set; }

        public double? Vigor { get; set; }

        public Lote Lote { get; set; }

        public decimal? Peso { get; set; }

        public Semilla Semilla { get; set; }

        public Estado Estado { get; set; }
    }
}