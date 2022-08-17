using ProyectoFinal._2_Dominio.Entidades;
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
    public class PEstado
    {
        public ListarEstadosOut ListarEstados(ListarEstadosIn input)
        {
            var output = new ListarEstadosOut { Estados = new List<Estado>(), Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloEstadoDataContext())
            {
                try
                {
                    var result = dataContext.ListarEstados();
                    if (result != null)
                    {
                        foreach (var Estado in result)
                        {
                            output.Estados.Add(new Estado
                            {
                                IdEstado = Estado.idEstado,
                                Nombre = Estado.nombre
                            });
                        }
                        output.Status = new HttpStatusCodeResult(200);
                    }
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(404);
                }
            }

            return output;
        }
    }
}