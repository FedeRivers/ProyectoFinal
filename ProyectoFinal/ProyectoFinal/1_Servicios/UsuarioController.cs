using ProyectoFinal._2_Dominio.Logica;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProyectoFinal._1_Servicios
{
    public class UsuarioController : ApiController
    {
        // GET: api/Usuario
       /* public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Usuario/5
        public string Get(int id)
        {
            return "value";
        }
        */
       /* // POST: api/Usuario
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Usuario/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Usuario/5
        public void Delete(int id)
        {
        }*/

        [HttpPost]
        public AltaUsuarioOut AltaUsuario([FromBody]AltaUsuarioIn input)
        {
            try
            {
                return new CRUDUsuario().AltaUsuario(input);
            }
            catch
            {
                return new AltaUsuarioOut();  
            }
        }

        [HttpGet]
        public LoginOut Login([FromUri]LoginIn input)
        {
            try
            {
                return new CRUDUsuario().Login(input);
            }
            catch
            {
                return new LoginOut();
            }
        }

    }
}
