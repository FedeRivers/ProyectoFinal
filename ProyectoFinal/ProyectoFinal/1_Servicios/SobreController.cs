﻿using ProyectoFinal._2_Dominio.Logica;
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
    public class SobreController : ApiController
    {
        [HttpPost]
        public AltaSobreOut AltaSobre([FromBody]AltaSobreIn input)
        {
            return new CRUDSobre().AltaSobre(input);
        }

        // DELETE: api/Sobre/5
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

        [HttpPost]
        public DevolverSobresOut DevolverSobres([FromBody]DevolverSobresIn input)
        {
            return new CRUDSobre().DevolverSobres(input);
        }

        [HttpGet]
        public ListarSobresOut ListarSobres([FromUri]ListarSobresIn input)
        {
            return new CRUDSobre().ListarSobres(input);
        }

        [HttpGet]
        public ListarSobresParaDevolucionOut ListarSobresParaDevolucion([FromUri]ListarSobresParaDevolucionIn input)
        {
            return new CRUDSobre().ListarSobresParaDevolucion(input);
        }

        [HttpPost]
        public ExisteSobreOut ExisteSobre([FromBody]ExisteSobreIn input)
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
        }
    }
}
