using ProyectoFinal._2_Dominio;
using ProyectoFinal._3_Persistencia.Models;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProyectoFinal._3_Persistencia
{
    public class PUsuario
    {
        public AltaUsuarioOut AltaUsuario(AltaUsuarioIn input)
        {
            var output = new AltaUsuarioOut{ Status = new HttpStatusCodeResult(404)};
            using (var dataContext = new ModeloUsuarioDataContext())
            {
               var result =  dataContext.AltaUsuario(input.Usuario.Nombre, input.Usuario.Apellido);
                if (result != -1)
                {
                    output.Status = new HttpStatusCodeResult(200);
                }
            }
            
            return output;
        }

        public LoginOut Login(LoginIn input)
        {
            var output = new LoginOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloUsuarioDataContext())
            {
                var result = dataContext.Login(input.Mail, input.Contrasena).FirstOrDefault();
                if (result != null)
                {
                    output.Status = new HttpStatusCodeResult(200);
                    output.Usuario = new Usuario
                    {
                        Id = result.id,
                        Nombre = result.nombre,
                        Apellido = result.apellido,
                        Mail = result.mail,
                        Contrasena = result.contrasena   
                    };
                }
            }

            return output;
        }
    }
}