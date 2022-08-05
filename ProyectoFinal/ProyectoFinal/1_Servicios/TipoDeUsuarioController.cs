using ProyectoFinal._2_Dominio.Logica;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProyectoFinal._1_Servicios
{
    public class TipoDeUsuarioController : ApiController
    {

        [HttpGet]
        public ListarTipoDeUsuarioOut ListarTiposDeUsuario()
        {
            return new CRUDTipoDeUsuario().ListarTiposDeUsuario();
        }

        // POST: api/TipoDeUsuario
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/TipoDeUsuario/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/TipoDeUsuario/5
        public void Delete(int id)
        {
        }
    }
}
