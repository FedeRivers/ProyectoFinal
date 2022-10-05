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
    public class EstadisticaController : ApiController
    {
        [HttpPost]
        public ObtenerEstadisticasOut ObtenerEstadisticas([FromBody]ObtenerEstadisticasIn input)
        {
            return new CRUDEstadistica().ObtenerEstadisticas(input);
        }

       /* // DELETE: api/Sobre/5
        [HttpPost]
        public BajaSobreOut BajaSobre(BajaSobreIn input)
        {
            return new CRUDSobre().BajaSobre(input);
        }

        // PUT: api/Sobre/5
        [HttpPost]
        public ModificarSobreOut ModificarSobre([FromBody]ModificarSobreIn input)
        {
            return new CRUDSobre().ModificarSobre(input);
        }

        [HttpGet]
        public ListarSobresOut ListarSobres([FromUri]ListarSobresIn input)
        {
            return new CRUDSobre().ListarSobres(input);
        }

        [HttpGet]
        public ExisteSobreOut ExisteSobre(ExisteSobreIn input)
        {
            return new CRUDSobre().ExisteSobre(input);
        }

        [HttpPost]
        public BuscarDuplicadosOut BuscarDuplicados([FromBody]BuscarDuplicadosIn input)
        {
            return new CRUDSobre().BuscarDuplicados(input);
        }

        [HttpPost]
        public ExportarExcelOut ExportarExcel([FromBody]ExportarExcelIn input)
        {
            return new CRUDSobre().ExportarExcel(input);
        }*/
    }
}
