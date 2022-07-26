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
    public class TipoDeUsuarioController : ApiController
    {

        [HttpGet]
        public ListarTiposDeUsuarioOut ListarTiposDeUsuario(ListarTiposDeUsuarioIn input)
        {
            return new CRUDTipoDeUsuario().ListarTiposDeUsuario(input);
        }

        [HttpGet]
        public ListarModulosPorTipoDeUsuarioOut ListarModulosPorTipoDeUsuario([FromUri]ListarModulosPorTipoDeUsuarioIn input)
        {
            return new CRUDTipoDeUsuario().ListarModulosPorTipoDeUsuario(input);
        }

        [HttpPost]
        public AgregarModuloOut AgregarModulo(AgregarModuloIn input)
        {
            return new CRUDTipoDeUsuario().AgregarModulo(input);
        }

        [HttpPost]
        public EliminarModuloOut EliminarModulo(EliminarModuloIn input)
        {
            return new CRUDTipoDeUsuario().EliminarModulo(input);
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
