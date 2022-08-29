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
    public class LoteController : ApiController
    {
        [HttpPost]
        public AltaLoteOut AltaLote([FromBody]AltaLoteIn input)
        {
            return new CRUDLote().AltaLote(input);
        }

        // DELETE: api/Lote/5
        [HttpPost]
        public BajaLoteOut BajaLote(BajaLoteIn input)
        {
            return new CRUDLote().BajaLote(input);
        }

        // PUT: api/Lote/5
        [HttpPost]
        public ModificarLoteOut ModificarLote([FromBody]ModificarLoteIn input)
        {
            return new CRUDLote().ModificarLote(input);
        }

        [HttpGet]
        public ListarLotesOut ListarLotes([FromUri]ListarLotesIn input)
        {
            return new CRUDLote().ListarLotes(input);
        }

        [HttpGet]
        public ExisteLoteOut ExisteLote([FromUri]ExisteLoteIn input)
        {
            return new CRUDLote().ExisteLote(input);
        }
    }
}
