﻿using ProyectoFinal._2_Dominio.Entidades;
using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using QRCoder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDSobre
    {
        public AltaSobreOut AltaSobre(AltaSobreIn input)
        {
            input.Sobre.CodigoQR = GenerarQR(input.Sobre);
            return new PSobre().AltaSobre(input);
        }

        public BajaSobreOut BajaSobre(BajaSobreIn input)
        {
            return new PSobre().BajaSobre(input);
        }

        public ModificarSobreOut ModificarSobre(ModificarSobreIn input)
        {
            PSobre instancia = new PSobre();
            var resultado = new ModificarSobreOut { Status = new HttpStatusCodeResult(404) };
            input.Sobre.CodigoQR = GenerarQR(input.Sobre);
            new CRUDAlerta().AltaAlerta(new AltaAlertaIn() { Sobre = input.Sobre, IdTipoDeUsuario = input.IdTipoDeUsuario });
            if (input.Sobre.Ubicacion.Camara.IdCamara != 0)
            {
                var existeEspacioLibreOut = instancia.ExisteEspacioLibre(new ExisteEspacioLibreIn { IdCamara = (int)input.Sobre.Ubicacion.Camara.IdCamara });
                resultado.CamaraLlena = existeEspacioLibreOut.Columna == 0;
                if (!resultado.CamaraLlena || input.Sobre.Estado.IdEstado == (int)EnumeradoEstados.Destruido)
                {
                    resultado.Status = instancia.AsignarSobreACamara(new AsignarSobreACamaraIn
                    {
                        Columna = existeEspacioLibreOut.Columna,
                        Fila = existeEspacioLibreOut.Fila,
                        IdCamara = (int)input.Sobre.Ubicacion.Camara.IdCamara,
                        IdSobre = input.Sobre.IdSobre,
                        IdEstado = input.Sobre.Estado.IdEstado
                    }).Status;

                    if (resultado.Status.StatusCode != new HttpStatusCodeResult(404).StatusCode)
                    {
                        resultado.Status = instancia.ModificarSobre(input).Status;
                    }
                }
            }
            else
            {
                resultado.Status = instancia.ModificarSobre(input).Status;
            }
            if (resultado.Status.StatusCode == new HttpStatusCodeResult(200).StatusCode && input.Sobre.Estado.IdEstado != (int)EnumeradoEstados.Secando)
            {
                resultado.Status = ModificarEstados(new ModificarEstadosIn
                {
                    Sobre = input.Sobre
                }).Status;
            }
            return resultado;
        }

        public DevolverSobresOut DevolverSobres(DevolverSobresIn input)
        {
            return new PSobre().DevolverSobres(input);
        }

        public ListarSobresOut ListarSobres(ListarSobresIn input)
        {
            return new PSobre().ListarSobres(input);
        }

        public ListarSobresParaDevolucionOut ListarSobresParaDevolucion(ListarSobresParaDevolucionIn input)
        {
            return new PSobre().ListarSobresParaDevolucion(input);
        }

        public ExisteSobreOut ExisteSobre(ExisteSobreIn input)
        {
            return new PSobre().ExisteSobre(input);
        }

        public BuscarDuplicadosOut BuscarDuplicados(BuscarDuplicadosIn input)
        {
            var buscarDuplicadosOut = new PSobre().BuscarDuplicados(input);
            foreach (var sobre in buscarDuplicadosOut.Sobres)
            {
                sobre.Germinacion = new Estimaciones().EstimarGerminacion(sobre.Semilla.FechaDeIngreso);
            }
            return buscarDuplicadosOut;
        }

        public ModificarEstadosOut ModificarEstados(ModificarEstadosIn input)
        {
            ObtenerSobreIn obtenerSobreIn = new ObtenerSobreIn
            {
                NumeroLote = input.Sobre.Lote.NumeroLote,
                IdSemilla = input.Sobre.Semilla.IdSemilla
            };

            Sobre sobre = new PSobre().ObtenerSobre(obtenerSobreIn).Sobre;
            if (sobre != null && input.Sobre.Estado.IdEstado != (int)EnumeradoEstados.ListoParaExportar)
            {

                if (sobre.Estado.IdEstado == (int)EnumeradoEstados.Recibido
                    || (sobre.Estado.IdEstado == (int)EnumeradoEstados.HumedadIngresada && sobre.Germinacion == 0)
                    || (sobre.Estado.IdEstado == (int)EnumeradoEstados.GerminacionIngresada && sobre.Humedad == 0)
                    || (sobre.Estado.IdEstado == (int)EnumeradoEstados.EsperandoGerminacion && sobre.Vigor > 0 && sobre.Germinacion == 0)) //.
                {
                    if (input.Sobre.Estado.IdEstado == (int)EnumeradoEstados.Germinando)
                    {
                        input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.EsperandoGerminacion;
                    }
                    else if (input.Sobre.Estado.IdEstado == (int)EnumeradoEstados.AnalizandoHumedad)
                    {
                        input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.EsperandoHumedad;
                    }
                }
                else if ((sobre.Estado.IdEstado == (int)EnumeradoEstados.EsperandoGerminacion && input.Sobre.Estado.IdEstado == (int)EnumeradoEstados.AnalizandoHumedad)
                    || (sobre.Estado.IdEstado == (int)EnumeradoEstados.EsperandoHumedad && input.Sobre.Estado.IdEstado == (int)EnumeradoEstados.Germinando))
                {
                    input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.EsperandoHumedadYGerminacion;
                }
                else if (sobre.Estado.IdEstado == (int)EnumeradoEstados.EsperandoHumedadYGerminacion && sobre.Vigor > 0 && sobre.Humedad == 0)
                {
                    if (sobre.Germinacion > 0)
                    {
                        if (sobre.Germinacion < 85)
                        {
                            input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.Devolver;
                        }
                        else
                        {
                            input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.EsperandoHumedad;
                        }
                    }
                    else
                    {
                        input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.EsperandoHumedadYGerminacion;
                    }
                }
                else if (sobre.Estado.IdEstado == (int)EnumeradoEstados.EsperandoHumedadYGerminacion && sobre.Humedad > 0 && sobre.Germinacion == 0)
                {
                    input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.EsperandoGerminacion;
                }
                else if (sobre.Estado.IdEstado == (int)EnumeradoEstados.EsperandoGerminacion && sobre.Germinacion > 0 && sobre.Humedad == 0)
                {
                    if (sobre.Germinacion < 85)
                    {
                        input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.Devolver;
                    }
                    else
                    {
                        input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.GerminacionIngresada;
                    }
                }
                else if (sobre.Estado.IdEstado == (int)EnumeradoEstados.EsperandoHumedad && sobre.Humedad > 0 && sobre.Germinacion == 0)
                {
                    input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.HumedadIngresada;
                }
                else if (sobre.Estado.IdEstado == (int)EnumeradoEstados.Secando && input.Sobre.Estado.IdEstado == (int)EnumeradoEstados.AnalizandoHumedad)//Sí el sobre de base de datos esta secando y el que te envían es analizando humedad
                {
                    input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.EsperandoHumedad;
                }
                else if (input.Sobre.Estado.IdEstado == (int)EnumeradoEstados.Secando)
                {
                    input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.Secando;
                }
                else if (sobre.Humedad <= 6 && sobre.Germinacion > 84 && input.Sobre.Peso == 0)//Si la humedad y la germinación son óptimas
                {
                    input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.EsperandoPesaje;//el estado de los sobres es esperando pesaje.
                }
                else if (sobre.Humedad > 0 && sobre.Germinacion > 0 && input.Sobre.Peso == 0)
                {
                    if (input.Sobre.Germinacion < 85)
                    {
                        input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.Devolver;
                    }
                    else
                    {
                        input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.ListoParaSecar;
                    }
                }
                else if (sobre.Estado.IdEstado == (int)EnumeradoEstados.Devolver)
                {
                    input.Sobre.Estado.IdEstado = (int)EnumeradoEstados.Devolver;
                }
                return new PSobre().ModificarEstados(input);
            }
            return new ModificarEstadosOut
            {
                Status = new HttpStatusCodeResult(200)
            };
        }

        public ExportarExcelOut ExportarExcel(ExportarExcelIn input)
        {
            return new PSobre().ExportarExcel(input);
        }

        public string GenerarQR(Sobre input)
        {
            string qrCodeImageBase64 = string.Empty;
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode("Número de lote: "+input.Lote.NumeroLote.ToString()+ "\n" + "Número de sobre: "+input.NumeroSobre.ToString(), QRCodeGenerator.ECCLevel.Q);
            Base64QRCode qrCode = new Base64QRCode(qrCodeData);
            return qrCodeImageBase64 = "data:image/png;base64," + qrCode.GetGraphic(5);  
        }

    }
}