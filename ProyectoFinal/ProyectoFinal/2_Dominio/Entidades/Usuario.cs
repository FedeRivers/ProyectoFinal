using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio
{
    public class Usuario
    {
        public int IdUsuario { get; set; }

        public string Nombre { get; set; }

        public string Apellido { get; set; }

        public string Contrasena { get; set; }

        public string Mail { get; set; }

        public string Cedula { get; set; }

        public DateTime FechaDeIngreso { get; set; }

        public DateTime FechaDeModificacion { get; set; }

        public bool Activo { get; set; }
    }
}