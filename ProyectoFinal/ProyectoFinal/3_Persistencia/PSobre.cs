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
                        input.Sobre.NumeroSobre,
                        input.Sobre.Lote.NumeroLote, 
                        input.Sobre.Semilla.IdSemilla,
                        input.Sobre.CodigoQR
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
                        input.Sobre.Ubicacion.Camara.IdCamara,
                        input.Sobre.Humedad,
                        input.Sobre.Germinacion,
                        input.Sobre.Vigor,
                        input.Sobre.Lote.NumeroLote,
                        input.Sobre.Semilla.IdSemilla,
                        input.Sobre.Estado.IdEstado,
                        input.Sobre.FechaEstimada,
                        input.Sobre.Peso,
                        input.Sobre.CodigoQR
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

        public DevolverSobresOut DevolverSobres(DevolverSobresIn input)
        {
            var output = new DevolverSobresOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    dataContext.Connection.Open();
                    dataContext.Transaction = dataContext.Connection.BeginTransaction();
                    foreach (var sobre in input.Sobres)
                    {
                        var result = dataContext.DevolverSobres(sobre.IdSobre, sobre.Lote.NumeroLote);
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
                                IdSobre = sobre.idsobre,
                                NumeroSobre = sobre.numeroSobre,
                                Activo = sobre.activoSobre,
                                FechaDeIngreso = sobre.ingresoSobre,
                                FechaDeDevolucion = sobre.fechaDeDevolucion,
                                FechaEstimada = sobre.fechaEstimada,
                                Humedad = sobre.humedad,
                                Germinacion = sobre.germinacion,
                                Vigor = sobre.vigor,
                                Peso = sobre.peso,
                                CodigoQR = sobre.codigoQR,
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

        public ListarSobresParaDevolucionOut ListarSobresParaDevolucion(ListarSobresParaDevolucionIn input)
        {
            var output = new ListarSobresParaDevolucionOut { Sobres = new List<Sobre>(), Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    var result = dataContext.ListarSobresParaDevolucion();
                    if (result != null)
                    {
                        foreach (var sobre in result)
                        {
                            output.Sobres.Add(new Sobre
                            {
                                IdSobre = sobre.idsobre,
                                NumeroSobre = sobre.numeroSobre,
                                Activo = sobre.activo,
                                FechaDeIngreso = sobre.fechaDeIngreso,
                                FechaDeDevolucion = sobre.fechaDeDevolucion,
                                FechaEstimada = sobre.fechaEstimada,
                                Humedad = sobre.humedad,
                                Germinacion = sobre.germinacion,
                                Vigor = sobre.vigor,
                                Peso = sobre.peso,
                                Lote = new Lote
                                {
                                    NumeroLote = sobre.numeroLote
                                },
                                Semilla = new Semilla
                                {
                                    IdSemilla = sobre.idSemilla,
                                    Nombre = sobre.nombre,
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
                    var result = dataContext.AsignarSobreACamara(input.IdCamara, input.Fila, input.Columna, input.IdSobre, input.IdEstado);
                    output.Status = new HttpStatusCodeResult(200);
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(404);
                }
            }
            return output;
        }


        public BuscarDuplicadosOut BuscarDuplicados(BuscarDuplicadosIn input)
        {
            var output = new BuscarDuplicadosOut { Status = new HttpStatusCodeResult(404), Sobres = new List<Sobre>() };       
            using (var dataContext = new ModeloBuscarDuplicadosDataContext())
            {
                try
                {
                    foreach (var semilla in input.NombresDeSemillas)
                    {

                        var result = dataContext.BuscarDuplicados(semilla.Nombre).FirstOrDefault();
                        if (result != null)
                        {
                            output.Sobres.Add(new Sobre
                            {
                                Semilla = new Semilla
                                {
                                    Nombre = result.plant_name,
                                    FechaDeIngreso = result.tested_date,
                                    Taxonomia = new Taxonomia
                                    {
                                        Nombre = result.species_name
                                    }
                                },
                                Germinacion = result.percent_viable,
                                Peso = result.quantity_on_hand,
                            });
                        }
                        else
                        {
                            output.Sobres.Add(new Sobre
                            {
                                Semilla = new Semilla
                                {
                                    Nombre = semilla.Nombre,
                                    Taxonomia = new Taxonomia()   
                                },
                                Germinacion = 0,
                                Peso = 0,
                            });
                        }
                    }
                            output.Status = new HttpStatusCodeResult(200);
                }
                catch (Exception ex)
                {
                }
            }
            return output;
        }


        public ObtenerSobreOut ObtenerSobre(ObtenerSobreIn input)
        {
            var output = new ObtenerSobreOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    var result = dataContext.ObtenerSobre(input.NumeroLote,input.IdSemilla).FirstOrDefault();
                    if (result != null)
                    {
                        output.Sobre = new Sobre
                        {
                            NumeroSobre = result.numeroSobre,
                            Activo = result.activo,
                            FechaDeDevolucion = result.fechaDeDevolucion,
                            FechaDeIngreso = result.fechaDeIngreso,
                            Humedad = result.humedad,
                            Germinacion = result.germinacion,
                            Vigor = result.vigor,
                            Lote = new Lote
                            {
                                NumeroLote = result.numeroLote
                            },
                            Semilla = new Semilla
                            {
                                IdSemilla = result.idSemilla
                            },
                            Estado = new Estado
                            {
                                IdEstado = int.Parse(result.idEstado.ToString())
                            },
                            Peso = result.peso                  
                        };
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

        public ModificarEstadosOut ModificarEstados(ModificarEstadosIn input)
        {
            var output = new ModificarEstadosOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    var result = dataContext.ModificarEstados(input.Sobre.Lote.NumeroLote, input.Sobre.Semilla.IdSemilla,input.Sobre.Estado.IdEstado);               
                    output.Status = new HttpStatusCodeResult(200);
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(404);
                }
            }
            return output;
        }

        public ExportarExcelOut ExportarExcel(ExportarExcelIn input)
        {
            var output = new ExportarExcelOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloSobreDataContext())
            {
                try
                {
                    dataContext.Connection.Open();
                    dataContext.Transaction = dataContext.Connection.BeginTransaction();
                    foreach (var sobre in input.Sobres)
                    {
                        var result = dataContext.ExportarExcel(sobre.IdSobre);
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
    }
}