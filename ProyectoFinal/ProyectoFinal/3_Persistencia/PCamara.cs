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
    public class PCamara
    {
        public ListarCamarasOut ListarCamaras(ListarCamarasIn input)
        {
            var output = new ListarCamarasOut { Camaras = new List<Camara>(), Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloCamaraDataContext())
            {
                try
                {
                    var result = dataContext.ListarCamaras();
                    if (result != null)
                    {
                        foreach (var Camara in result)
                        {
                            output.Camaras.Add(new Camara
                            {
                                IdCamara = Camara.idCamara,
                                Nombre = Camara.nombre
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