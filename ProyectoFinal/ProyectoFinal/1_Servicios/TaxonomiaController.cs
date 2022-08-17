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
    public class TaxonomiaController : ApiController
    {
        [HttpPost]
        public AltaTaxonomiaOut AltaTaxonomia([FromBody]AltaTaxonomiaIn input)
        {
            return new CRUDTaxonomia().AltaTaxonomia(input);
        }

        [HttpPost]
        public BajaTaxonomiaOut BajaTaxonomia(BajaTaxonomiaIn input)
        {
            return new CRUDTaxonomia().BajaTaxonomia(input);
        }

        [HttpPost]
        public ModificarTaxonomiaOut ModificarTaxonomia([FromBody]ModificarTaxonomiaIn input)
        {
            return new CRUDTaxonomia().ModificarTaxonomia(input);
        }

        [HttpGet]
        public ListarTaxonomiasOut ListarTaxonomiases([FromUri]ListarTaxonomiasIn input)
        {
            return new CRUDTaxonomia().ListarTaxonomias(input);
        }
    }
}
