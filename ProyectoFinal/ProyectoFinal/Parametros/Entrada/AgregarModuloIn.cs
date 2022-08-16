using ProyectoFinal._2_Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal.Parametros.Entrada
{
    public class AgregarModuloIn
    {
        public TipoDeUsuario TipoDeUsuario { get; set; }

        public Modulo Modulo { get; set; }
    }
}