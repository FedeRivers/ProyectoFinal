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
    public class PAlerta
    {
        public void AltaAlerta(AltaAlertaIn input)
        {
            using (var dataContext = new ModeloAlertaDataContext())
            {
                try
                {
                    var result = dataContext.AltaAlerta(input.FechaDeEjecucion,input.Sobre.Lote.NumeroLote,input.Sobre.Semilla.Nombre,input.Sobre.Ubicacion.Camara.IdCamara,input.IdTipoDeUsuario);

                }
                catch (Exception ex)
                {
                    Console.Write(ex.ToString());
                }
            }
        }

        public ListarAlertasOut ListarAlertas(ListarAlertasIn input)
        {
            var output = new ListarAlertasOut { Alertas = new List<Alerta>(), Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloAlertaDataContext())
            {
                try
                {
                    var result = dataContext.ListarAlertas(input.IdTipoDeUsuario,input.CantidadDeAlertas);
                    if (result != null)
                    {
                        foreach (var alerta in result)
                        {
                            output.Alertas.Add(new Alerta()
                            {
                                IdAlerta = alerta.idAlerta,
                                FechaDeCreacion = Convert.ToDateTime(alerta.fechaDeCreacion),
                                FechaDeEjecucion = Convert.ToDateTime(alerta.fechaDeEjecucion),
                                NumeroLote = alerta.numeroLote,
                                NombreSemilla = alerta.nombreSemilla,
                                IdCamara = alerta.idCamara,
                                IdTipoDeUsuario = alerta.idTipoDeUsuario,
                                Activo = Convert.ToBoolean(alerta.activo)
                            });
                        }
                    }
                }
                catch (Exception ex)
                {
                }
            }
            return output;
                 
        }



       /* public ListarLotesOut ListarLotes(ListarLotesIn input)
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
        }*/
    }
}