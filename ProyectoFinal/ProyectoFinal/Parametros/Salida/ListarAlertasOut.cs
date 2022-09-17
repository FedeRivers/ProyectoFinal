using ProyectoFinal._2_Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal.Parametros.Salida
{
    public class ListarAlertasOut : ParametroBaseOut
    {
        public List<Alerta> Alertas { get; set; }
    }
}