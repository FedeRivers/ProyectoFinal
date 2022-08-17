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
    public class EstadoController : ApiController
    {
        [HttpGet]
        public ListarEstadosOut ListarEstadoss([FromUri]ListarEstadosIn input)
        {
            return new CRUDEstado().ListarEstados(input);
        }
    }
}
