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
            try
            {
                return new CRUDUsuario().AltaUsuario(input);
            }
            catch (Exception ex)
            {
                return new AltaUsuarioOut();  
            }
        }

        [HttpPost]
        public BajaUsuarioOut BajaUsuario(BajaUsuarioIn input)
        {
            try
            {
                return new CRUDUsuario().BajaUsuario(input);
            }
            catch (Exception ex)
            {
                return new BajaUsuarioOut();
            }
        }

        [HttpPost]
        public ModificarUsuarioOut ModificarUsuario([FromBody]ModificarUsuarioIn input)
        {
            try
            {
                return new CRUDUsuario().ModificarUsuario(input);
            }
            catch
            {
                return new ModificarUsuarioOut();
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

        [HttpGet]
        public ListarUsuariosOut ListarUsuarios([FromUri]ListarUsuariosIn input)
        {
            return new CRUDUsuario().ListarUsuarios(input);
        }


    }
}
