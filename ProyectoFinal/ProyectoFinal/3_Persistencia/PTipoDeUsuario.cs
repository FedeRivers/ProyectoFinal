using ProyectoFinal._2_Dominio.Entidades;
using ProyectoFinal._3_Persistencia.Models;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProyectoFinal._3_Persistencia
{
    public class PTipoDeUsuario
    {
        public ListarTipoDeUsuarioOut ListarTiposDeUsuario()
        {
            var output = new ListarTipoDeUsuarioOut { Status = new HttpStatusCodeResult(404) , TiposDeUsuario=new List<TipoDeUsuario>()};
            using (var dataContext = new ModeloTipoDeUsuarioDataContext())
            {
                var result = dataContext.ListarTiposDeUsuario();
                if (result != null)
                {
                    
                    foreach (var tipoDeUsuario in result)
                    {
                        output.TiposDeUsuario.Add(new TipoDeUsuario
                        {
                            IdTipoDeUsuario = tipoDeUsuario.idTipoDeUsuario,
                            Nombre = tipoDeUsuario.nombre,
                            Activo = tipoDeUsuario.activo
                        });
                    }
                    output.Status = new HttpStatusCodeResult(200);
                }
            }

            return output;
        }
    }
}