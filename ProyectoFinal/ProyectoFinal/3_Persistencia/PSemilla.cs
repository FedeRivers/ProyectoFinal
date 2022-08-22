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
    public class PSemilla
    {
        public AltaSemillaOut AltaSemilla(AltaSemillaIn input)
        {
            var output = new AltaSemillaOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSemillaDataContext())
            {
                try
                {
                    var result = dataContext.AltaSemilla(input.Semilla.Nombre, input.Semilla.Taxonomia.IdTaxonomia);
                    if (result != -1)
                    {
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

        public BajaSemillaOut BajaSemilla(BajaSemillaIn input)
        {
            var output = new BajaSemillaOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSemillaDataContext())
            {
                try
                {
                    var result = dataContext.BajaSemilla(input.IdSemilla);
                    if (result != -1)
                    {
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

        public ModificarSemillaOut ModificarSemilla(ModificarSemillaIn input)
        {
            var output = new ModificarSemillaOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSemillaDataContext())
            {
                try
                {
                    var result = dataContext.ModificarSemilla(input.Semilla.IdSemilla, input.Semilla.Nombre, input.Semilla.Taxonomia.IdTaxonomia);
                    if (result != -1)
                    {
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

        public ListarSemillasOut ListarSemillas(ListarSemillasIn input)
        {
            var output = new ListarSemillasOut { Semillas = new List<Semilla>(), Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSemillaDataContext())
            {
                try
                {
                    var result = dataContext.ListarSemillas(input.TerminoDeBusqueda);
                    if (result != null)
                    {
                        foreach (var semilla in result)
                        {
                            output.Semillas.Add(new Semilla
                            {
                                IdSemilla = semilla.idSemilla,
                                Nombre = semilla.nombreSemilla,
                                FechaDeIngreso = semilla.fechaDeIngreso,
                                Activo = semilla.activoSemilla,
                                Taxonomia = new Taxonomia
                                {
                                    IdTaxonomia = semilla.idTaxonomia,
                                    Nombre = semilla.nombreTaxonomia,
                                    Activo = semilla.activoTaxonomia
                                }

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