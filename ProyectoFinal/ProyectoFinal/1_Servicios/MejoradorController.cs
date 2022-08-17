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
    public class MejoradorController : ApiController
    {
        [HttpPost]
        public AltaMejoradorOut AltaMejorador([FromBody]AltaMejoradorIn input)
        {
            return new CRUDMejorador().AltaMejorador(input);
        }

        // DELETE: api/Mejorador/5
        [HttpPost]
        public BajaMejoradorOut BajaMejorador(BajaMejoradorIn input)
        {
            return new CRUDMejorador().BajaMejorador(input);
        }

        // PUT: api/Mejorador/5
        [HttpPost]
        public ModificarMejoradorOut ModificarMejorador([FromBody]ModificarMejoradorIn input)
        {
            return new CRUDMejorador().ModificarMejorador(input);
        }

        [HttpGet]
        public ListarMejoradorOut ListarMejoradores([FromUri]ListarMejoradorIn input)
        {
            return new CRUDMejorador().ListarMejorador(input);
        }

    }
}
