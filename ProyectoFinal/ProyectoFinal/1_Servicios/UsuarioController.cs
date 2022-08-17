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
        [HttpPost]
        public AltaUsuarioOut AltaUsuario([FromBody]AltaUsuarioIn input)
        {
            return new CRUDUsuario().AltaUsuario(input);
        }

        [HttpPost]
        public BajaUsuarioOut BajaUsuario(BajaUsuarioIn input)
        {
            return new CRUDUsuario().BajaUsuario(input);
        }

        [HttpPost]
        public ModificarUsuarioOut ModificarUsuario([FromBody]ModificarUsuarioIn input)
        {
            return new CRUDUsuario().ModificarUsuario(input);
        }

        [HttpGet]
        public LoginOut Login([FromUri]LoginIn input)
        {
            return new CRUDUsuario().Login(input);
        }

        [HttpGet]
        public ListarUsuariosOut ListarUsuarios([FromUri]ListarUsuariosIn input)
        {
            return new CRUDUsuario().ListarUsuarios(input);
        }
    }
}
