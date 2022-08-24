using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Entidades
{
    public class Semilla
    {
        public int IdSemilla { get; set; }

        public string Nombre { get; set; }

        public DateTime? FechaDeIngreso { get; set; }

        public bool? Activo { get; set; }

        public Taxonomia Taxonomia { get; set; }
    }
}