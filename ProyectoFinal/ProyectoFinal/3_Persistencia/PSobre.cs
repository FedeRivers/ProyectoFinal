﻿using ProyectoFinal._2_Dominio.Entidades;
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
                        input.Sobre.NumeroSobre,
                        input.Sobre.Lote.NumeroLote, 
                        input.Sobre.Semilla.IdSemilla
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
                    var result = dataContext.BajaSobre(input.NumeroSobre);
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
                        input.Sobre.NumeroSobre,
                        input.Sobre.Ubicacion.Camara.IdCamara,
                        input.Sobre.Humedad,
                        input.Sobre.Germinacion,
                        input.Sobre.Vigor,
                        input.Sobre.Lote.NumeroLote,
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
                    var result = dataContext.ListarSobres(input.NumeroSobre,input.NumeroLote,input.NombreSemilla,input.IdEstado,input.IdCamara);
                    if (result != null)
                    {
                        foreach (var sobre in result)
                        {
                            output.Sobres.Add(new Sobre
                            {
                                NumeroSobre = sobre.numeroSobre,
                                Activo = sobre.activoSobre,
                                FechaDeIngreso = sobre.ingresoSobre,
                                FechaDeDevolucion = sobre.fechaDeDevolucion,
                                Humedad = sobre.humedad,
                                Germinacion = sobre.germinacion,
                                Vigor = sobre.vigor,
                                Lote = new Lote
                                {
                                    NumeroLote = sobre.numeroLote,
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
                                },
                                Ubicacion = new Ubicacion
                                {
                                    Camara = new Camara
                                    {
                                        Nombre = sobre.nombre
                                    },
                                    Fila = sobre.fila,
                                    Columna = sobre.columna,                               
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

        public ExisteSobreOut ExisteSobre(ExisteSobreIn input)
        {
            var output = new ExisteSobreOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    var result = dataContext.ExisteSobre(input.Sobre.NumeroSobre, input.Sobre.Lote.NumeroLote);
                    output.ExisteSobre = result == 0;
                    output.Status = new HttpStatusCodeResult(200);
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(404);
                }
            }
            return output;
        }

        public ExisteEspacioLibreOut ExisteEspacioLibre(ExisteEspacioLibreIn input)
        {
            var output = new ExisteEspacioLibreOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    var result = dataContext.ExisteEspacioLibre(input.IdCamara).FirstOrDefault();
                    if (result != null)
                    {
                        output.Fila = result.fila;
                        output.Columna = result.columna;
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

        public AsignarSobreACamaraOut AsignarSobreACamara(AsignarSobreACamaraIn input)
        {
            var output = new AsignarSobreACamaraOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    var result = dataContext.AsignarSobreACamara(input.IdCamara, input.Fila, input.Columna, input.NumeroSobre);
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