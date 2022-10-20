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
    public class SemillaController : ApiController
    {
        [HttpPost]
        public AltaSemillaOut AltaSemilla([FromBody]AltaSemillaIn input)
        {
            return new CRUDSemilla().AltaSemilla(input);
        }

        // DELETE: api/Semilla/5
        [HttpPost]
        public BajaSemillaOut BajaSemilla(BajaSemillaIn input)
        {
            return new CRUDSemilla().BajaSemilla(input);
        }

        // PUT: api/Semilla/5
        [HttpPost]
        public ModificarSemillaOut ModificarSemilla([FromBody]ModificarSemillaIn input)
        {
            return new CRUDSemilla().ModificarSemilla(input);
        }

        [HttpGet]
        public ListarSemillasOut ListarSemillas([FromUri]ListarSemillasIn input)
        {
            return new CRUDSemilla().ListarSemillas(input);
        }

        [HttpPost]
        public ExisteSemillaOut ExisteSemilla([FromBody]ExisteSemillaIn input)
        {
            return new CRUDSemilla().ExisteSemilla(input);
        }
    }
}
