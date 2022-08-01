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
        // GET: api/Mejorador
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Mejorador/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Mejorador
        public void Post([FromBody]string value)
        {
        }


        [HttpPost]
        public AltaMejoradorOut AltaMejorador([FromBody]AltaMejoradorIn input)
        {
            try
            {
                return new CRUDMejorador().AltaMejorador(input);
            }
            catch(Exception ex)
            {
                return new AltaMejoradorOut();
            }
        }

        // DELETE: api/Mejorador/5
        [HttpPost]
        public BajaMejoradorOut BajaMejorador(BajaMejoradorIn input)
        {
            try
            {
                return new CRUDMejorador().BajaMejorador(input);
            }
            catch (Exception ex)
            {
                return new BajaMejoradorOut();
            }
        }

        // PUT: api/Mejorador/5
        [HttpPost]
        public ModificarMejoradorOut ModificarMejorador([FromBody]ModificarMejoradorIn input)
        {
            try
            {
                return new CRUDMejorador().ModificarMejorador(input);
            }
            catch (Exception ex)
            {
                return new ModificarMejoradorOut();
            }
        }

        [HttpGet]
        public ListarMejoradorOut ListarMejoradores([FromUri]ListarMejoradorIn input)
        {
            try
            {
                return new CRUDMejorador().ListarMejorador(input);
            }
            catch (Exception ex)
            {
                return new ListarMejoradorOut();
            }
        }

    }
}
