using ProyectoFinal._3_Persistencia.Models;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace ProyectoFinal._3_Persistencia
{
    public class PUsuario
    {
        public AltaUsuarioOut AltaUsuario(AltaUsuarioIn input)
        {
            using (var dataContext = new ModeloUsuarioDataContext())
            {
                dataContext.AltaUsuario(input.Usuario.Nombre, input.Usuario.Apellido);
            }
            return AltaUsuarioOut;
        }
    }
}