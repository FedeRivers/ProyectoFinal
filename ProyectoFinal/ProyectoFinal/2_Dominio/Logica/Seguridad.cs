using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public static class Seguridad
    {
        public static string Encriptar(string cadenaDeTexto)
        {
            string result = string.Empty;
            byte[] encriptado = System.Text.Encoding.Unicode.GetBytes(cadenaDeTexto);
            result = Convert.ToBase64String(encriptado);
            return result;
        }

        public static string DesEncriptar(string cadenaDeTexto)
        {
            string result = string.Empty;
            byte[] desenciptado = Convert.FromBase64String(cadenaDeTexto);
            result = System.Text.Encoding.Unicode.GetString(desenciptado);
            return result;
        }
    }
}