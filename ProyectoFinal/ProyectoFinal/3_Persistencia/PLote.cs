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
                    var result = dataContext.AltaLote(input.Lote.NumeroLote, input.Lote.Descripcion, input.Lote.Mejorador.IdMejorador);
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
                    var result = dataContext.BajaLote(input.NumeroLote);
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
                    var result = dataContext.ModificarLote(input.Lote.NumeroLote, input.Lote.Descripcion, input.Lote.Mejorador.IdMejorador);
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

        public DevolverLotesOut DevolverLotes(DevolverLotesIn input)
        {
            var output = new DevolverLotesOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloLoteDataContext())
            {
                try
                {
                    dataContext.Connection.Open();
                    dataContext.Transaction = dataContext.Connection.BeginTransaction();
                    foreach (var sobre in input.Lotes)
                    {
                        var result = dataContext.DevolverLotes(sobre.NumeroLote);
                    }
                    dataContext.Transaction.Commit();
                    output.Status = new HttpStatusCodeResult(200);
                }
                catch (Exception ex)
                {
                    dataContext.Transaction.Rollback();
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
                                NumeroLote = lote.numeroLote,
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

        public ListarLotesParaDevolucionOut ListarLotesParaDevolucion(ListarLotesParaDevolucionIn input)
        {
            var output = new ListarLotesParaDevolucionOut { Lotes = new List<Lote>(), Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloLoteDataContext())
            {
                try
                {
                    var result = dataContext.ListarLotesParaDevolucion();
                    if (result != null)
                    {
                        foreach (var lote in result)
                        {
                            output.Lotes.Add(new Lote
                            {
                                NumeroLote = lote.numeroLote,
                                Descripcion = lote.descripcion,
                                FechaDeIngreso = lote.fechaDeIngreso,
                                Activo = lote.activo                
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

        public ExisteLoteOut ExisteLote(ExisteLoteIn input)
        {
            var output = new ExisteLoteOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloLoteDataContext())
            {
                try
                {
                    var result = dataContext.ExisteLote(input.Lote.NumeroLote, input.Lote.Mejorador.IdMejorador);
                    output.ExisteLote = result == 0;
                    output.Status = new HttpStatusCodeResult(200);
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