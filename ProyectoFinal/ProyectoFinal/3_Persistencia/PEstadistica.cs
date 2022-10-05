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
    public class PEstadistica
    {

        public ObtenerEstadisticasOut ObtenerEstadisticas(ObtenerEstadisticasIn input)
        {
            var output = new ObtenerEstadisticasOut { Datos = new List<ItemValor>(), Status = new HttpStatusCodeResult(400) };
            using (var dataContext = new ModeloEstadisticaDataContext())
            {
                try
                {
                    var result = dataContext.ObtenerEstadisticas(input.FechaDesde, input.FechaHasta);
                    if (result != null)
                    {
                        foreach (var item in result)
                        {
                            output.Datos.Add(new ItemValor()
                            {
                                Value = item.valor,
                                Name = item.nombre
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