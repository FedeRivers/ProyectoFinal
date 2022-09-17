using ProyectoFinal._2_Dominio.Logica;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoFinal._1_Servicios
{
    public class AlertaController : ApiController
    {
        [HttpGet]
        public ListarAlertasOut ListarAlertas([FromUri]ListarAlertasIn input)
        {
            return new CRUDAlerta().ListarAlertas(input);
        }
    }
}
