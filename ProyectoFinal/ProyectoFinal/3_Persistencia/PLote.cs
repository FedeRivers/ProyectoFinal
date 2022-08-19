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
    public class PLote
    {
        public AltaLoteOut AltaLote(AltaLoteIn input)
        {
            var output = new AltaLoteOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloLoteDataContext())
            {
                try
                {
                    var result = dataContext.AltaLote(input.Lote.Numero, input.Lote.Descripcion, input.Lote.Mejorador.IdMejorador);
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

        public BajaLoteOut BajaLote(BajaLoteIn input)
        {
            var output = new BajaLoteOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloLoteDataContext())
            {
                try
                {
                    var result = dataContext.BajaLote(input.IdLote);
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

        public ModificarLoteOut ModificarLote(ModificarLoteIn input)
        {
            var output = new ModificarLoteOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloLoteDataContext())
            {
                try
                {
                    var result = dataContext.ModificarLote(input.Lote.IdLote, input.Lote.Numero, input.Lote.Descripcion, input.Lote.Mejorador.IdMejorador);
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

        public ListarLotesOut ListarLotes(ListarLotesIn input)
        {
            var output = new ListarLotesOut { Lotes = new List<Lote>(), Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloLoteDataContext())
            {
                try
                {
                    var result = dataContext.ListarLotes(input.TerminoDeBusqueda);
                    if (result != null)
                    {
                        foreach (var lote in result)
                        {
                            output.Lotes.Add(new Lote
                            {
                                IdLote = lote.idLote,
                                Numero = lote.numero,
                                Descripcion = lote.descripcion,
                                FechaDeIngreso = lote.ingresoLote,
                                Activo = lote.activoLote,
                                Mejorador = new Mejorador
                                {
                                    IdMejorador = lote.idMejorador,
                                    Nombre = lote.nombre,
                                    Mail = lote.mail,
                                    Direccion = lote.direccion,
                                    FechaDeIngreso = lote.ingresoMejorador,
                                    Activo = lote.activoMejorador
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