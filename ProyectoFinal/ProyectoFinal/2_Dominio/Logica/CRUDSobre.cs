using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
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
            return new PSobre().AltaSobre(input);
        }

        public BajaSobreOut BajaSobre(BajaSobreIn input)
        {
            return new PSobre().BajaSobre(input);
        }

        public ModificarSobreOut ModificarSobre(ModificarSobreIn input)
        {
            var resultado = new ModificarSobreOut { Status = new HttpStatusCodeResult(404) };
            var existeEspacioLibreOut = new PSobre().ExisteEspacioLibre(new ExisteEspacioLibreIn { IdCamara = input.Sobre.Ubicacion.Camara.IdCamara });
            resultado.CamaraLlena = existeEspacioLibreOut.Columna == 0;
            if (!resultado.CamaraLlena)
            {
                resultado.Status = new PSobre().AsignarSobreACamara(new AsignarSobreACamaraIn
                {
                  Columna = existeEspacioLibreOut.Columna,
                  Fila = existeEspacioLibreOut.Fila,
                  IdCamara = input.Sobre.Ubicacion.Camara.IdCamara,
                  NumeroSobre = input.Sobre.NumeroSobre
                }).Status;

                if (resultado.Status != new HttpStatusCodeResult(404))
                {
                    resultado.Status = new PSobre().ModificarSobre(input).Status;
                }
            }
            return resultado;
        }

        public ListarSobresOut ListarSobres(ListarSobresIn input)
        {
            return new PSobre().ListarSobres(input);
        }

        public ExisteSobreOut ExisteSobre(ExisteSobreIn input)
        {
            return new PSobre().ExisteSobre(input);
        }
    }
}