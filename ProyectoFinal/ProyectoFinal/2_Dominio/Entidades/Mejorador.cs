using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Entidades
{
    public class Mejorador
    {
        public int IdMejorador { get; set; }

        public string Nombre { get; set; }

        public string Mail { get; set; }

        public string Direccion { get; set; }

        public DateTime FechaDeIngreso { get; set; }
        
        public bool Activo { get; set; }
    }
}