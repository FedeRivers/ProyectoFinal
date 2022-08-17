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
    public class PTaxonomia
    {
        public AltaTaxonomiaOut AltaTaxonomia(AltaTaxonomiaIn input)
        {
            var output = new AltaTaxonomiaOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloTaxonomiaDataContext())
            {
                try
                {
                    var result = dataContext.AltaTaxonomia(input.Taxonomia.Nombre);
                    output.Status = new HttpStatusCodeResult(200);
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(404);
                }
            }
            return output;
        }

        public BajaTaxonomiaOut BajaTaxonomia(BajaTaxonomiaIn input)
        {
            var output = new BajaTaxonomiaOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloTaxonomiaDataContext())
            {
                try
                {
                    var result = dataContext.BajaTaxonomia(input.IdTaxonomia);
                    output.Status = new HttpStatusCodeResult(200);
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(400);
                }
            }
            return output;
        }

        public ModificarTaxonomiaOut ModificarTaxonomia(ModificarTaxonomiaIn input)
        {
            var output = new ModificarTaxonomiaOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloTaxonomiaDataContext())
            {
                try
                {
                    var result = dataContext.ModificarTaxonomia(input.Taxonomia.IdTaxonomia, input.Taxonomia.Nombre);
                    output.Status = new HttpStatusCodeResult(200);
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(400);
                }
            }
            return output;
        }

        public ListarTaxonomiasOut ListarTaxonomias(ListarTaxonomiasIn input)
        {
            var output = new ListarTaxonomiasOut { Taxonomias = new List<Taxonomia>(), Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloTaxonomiaDataContext())
            {
                try
                {
                    var result = dataContext.ListarTaxonomias();
                    if (result != null)
                    {
                        foreach (var taxonomia in result)
                        {
                            output.Taxonomias.Add(new Taxonomia
                            {
                                IdTaxonomia = taxonomia.idTaxonomia,
                                Nombre = taxonomia.nombre,
                                Activo = taxonomia.activo
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