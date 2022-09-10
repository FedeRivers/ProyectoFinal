using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Entidades
{
    public class Ubicacion
    {
        public int Fila { get; set; }

        public int Columna { get; set; }

        public Camara Camara { get; set; }
    }
}