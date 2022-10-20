using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDUsuario
    {
        public AltaUsuarioOut AltaUsuario(AltaUsuarioIn input)
        {
            var resultado = new AltaUsuarioOut { Status = new HttpStatusCodeResult(500) };
            var existe = new PUsuario().ExisteUsuario(input.Usuario);
            if (existe == 0)
            {
                var contrasena = GenerarContrasena();
                input.Usuario.Contrasena = ComputeSha256Hash(contrasena);
                resultado.Status = new PUsuario().AltaUsuario(input).Status;
                if (resultado.Status.StatusCode == 200)
                {
                    Mail mail = new Mail();
                    mail.Enviar(input.Usuario.Mail, input.Usuario.Nombre, contrasena);
                }
            }
            else
            {
                resultado.ExisteMail = existe == 1 || existe == 2;
                resultado.ExisteCedula = existe == 1 || existe == 3; 
            }
            return resultado;

        }

        public ModificarUsuarioOut ModificarUsuario(ModificarUsuarioIn input)
        {
            var resultado = new ModificarUsuarioOut { Status = new HttpStatusCodeResult(500) };
            var existe = new PUsuario().ExisteUsuario(input.Usuario);
            if (existe == 0)
            {
                return new PUsuario().ModificarUsuario(input);
            }
            else
            {
                resultado.ExisteMail = existe == 1 || existe == 2;
                resultado.ExisteCedula = existe == 1 || existe == 3;
            }
            return resultado;
        }

        public BajaUsuarioOut BajaUsuario(BajaUsuarioIn input)
        {
            return new PUsuario().BajaUsuario(input);
        }

        public LoginOut Login(LoginIn input)
        {
            var output = new PUsuario().Login(input);
            if (output.Usuario != null)
            {
                output.Usuario.TipoDeUsuario.Modulos = new PTipoDeUsuario().ListarModulosPorTipoDeUsuario(new ListarModulosPorTipoDeUsuarioIn
                {
                    IdTipoDeUsuario = output.Usuario.TipoDeUsuario.IdTipoDeUsuario
                }).Modulos;
            }
            return output;
        }

        public ListarUsuariosOut ListarUsuarios(ListarUsuariosIn input)
        {
            return new PUsuario().ListarUsuarios(input);
        }

        private string GenerarContrasena()
        {
            Random rdn = new Random();
            string caracteres = WebConfigurationManager.AppSettings["Caracteres"];
            int longitud = caracteres.Length;
            char letra;
            int longitudContrasena = int.Parse(WebConfigurationManager.AppSettings["LargoContrasena"]);
            string contrasenaAleatoria = string.Empty;
            for (int i = 0; i < longitudContrasena; i++)
            {
                letra = caracteres[rdn.Next(longitud)];
                contrasenaAleatoria += letra.ToString();
            }
            return contrasenaAleatoria;
        }

        private static string ComputeSha256Hash(string rawData)
        {
            // Create a SHA256   
            using (SHA256 sha256Hash = SHA256.Create())
            {
                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }
    }
}