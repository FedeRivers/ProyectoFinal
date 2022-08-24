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
    public class PSobre
    {
        public AltaSobreOut AltaSobre(AltaSobreIn input)
        {
            var output = new AltaSobreOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    var result = dataContext.AltaSobre
                        (
                        input.Sobre.Ubicacion, 
                        input.Sobre.Humedad, 
                        input.Sobre.Germinacion, 
                        input.Sobre.Lote.IdLote, 
                        input.Sobre.Semilla.IdSemilla, 
                        input.Sobre.Estado.IdEstado
                        );
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

        public BajaSobreOut BajaSobre(BajaSobreIn input)
        {
            var output = new BajaSobreOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    var result = dataContext.BajaSobre(input.IdSobre);
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

        public ModificarSobreOut ModificarSobre(ModificarSobreIn input)
        {
            var output = new ModificarSobreOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    var result = dataContext.ModificarSobre
                        (
                        input.Sobre.IdSobre,
                        input.Sobre.Ubicacion,
                        input.Sobre.Humedad,
                        input.Sobre.Germinacion,
                        input.Sobre.Lote.IdLote,
                        input.Sobre.Semilla.IdSemilla,
                        input.Sobre.Estado.IdEstado
                        );
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

        public ListarSobresOut ListarSobres(ListarSobresIn input)
        {
            var output = new ListarSobresOut { Sobres = new List<Sobre>(), Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    var result = dataContext.ListarSobres(input.TerminoDeBusqueda);
                    if (result != null)
                    {
                        foreach (var sobre in result)
                        {
                            output.Sobres.Add(new Sobre
                            {
                                IdSobre = sobre.idSobre,
                                Ubicacion = sobre.ubicacion,
                                Activo = sobre.activoSobre,
                                FechaDeIngreso = sobre.ingresoSobre,
                                FechaDeDevolucion = sobre.fechaDeDevolucion,
                                Humedad = sobre.humedad,
                                Germinacion = sobre.germinacion,
                                Lote = new Lote
                                {
                                    IdLote = sobre.idLote,
                                    Numero = sobre.numero,
                                    Descripcion = sobre.descripcion,
                                    FechaDeIngreso = sobre.ingresoLote,
                                    Activo = sobre.activoLote
                                },
                                Semilla = new Semilla
                                {
                                    IdSemilla = sobre.idSemilla,
                                    Nombre = sobre.nombreSemilla,
                                    FechaDeIngreso = sobre.ingresoSemilla,
                                    Activo = sobre.activoSobre
                                },
                                Estado = new Estado
                                {
                                    IdEstado = sobre.idEstado,
                                    Nombre = sobre.nombreEstado
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