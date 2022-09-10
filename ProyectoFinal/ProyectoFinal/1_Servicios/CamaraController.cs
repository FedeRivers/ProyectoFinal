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
    public class CamaraController : ApiController
    {
        [HttpGet]
        public ListarCamarasOut ListarCamaras([FromUri]ListarCamarasIn input)
        {
            return new CRUDCamara().ListarCamaras(input);
        }
    }
}
