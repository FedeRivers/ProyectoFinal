using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDUsuario
    {
        public AltaUsuarioOut AltaUsuario(AltaUsuarioIn input)
        {
            var resultado = new PUsuario().AltaUsuario(input);
            /*if (resultado.Status.StatusCode == 200) {

                Mail mail = new Mail();
                mail.EnviarMail(input.Usuario.Mail, "Alta de usuario: " + input.Usuario.Nombre, "Para ingresar a su cuenta ingrese la siguiente contraseña: ");           
            }*/
            return resultado;

        }

        public LoginOut Login(LoginIn input)
        {
            return new PUsuario().Login(input);
        }

        public ListarUsuariosOut ListarUsuarios(ListarUsuariosIn input)
        {
            return new PUsuario().ListarUsuarios(input);
        }
    }
}