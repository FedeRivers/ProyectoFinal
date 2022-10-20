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
    public class CRUDMejorador
    {
        public AltaMejoradorOut AltaMejorador(AltaMejoradorIn input)
        {
            var resultado = new AltaMejoradorOut { Status = new HttpStatusCodeResult(500) };
            var existe = new PMejorador().ExisteMejorador(input.Mejorador);
            if (existe == 0)
            {
                return new PMejorador().AltaMejorador(input);
            }
            else
            {
                resultado.ExisteMail = existe == 1;
                return resultado;
            }
        }

        public BajaMejoradorOut BajaMejorador(BajaMejoradorIn input)
        {
            return new PMejorador().BajaMejorador(input);
        }

        public ModificarMejoradorOut ModificarMejorador(ModificarMejoradorIn input)
        {
            var resultado = new ModificarMejoradorOut { Status = new HttpStatusCodeResult(500) };
            var existe = new PMejorador().ExisteMejorador(input.Mejorador);
            if (existe == 0)
            {
                return new PMejorador().ModificarMejorador(input);
            }
            else
            {
                resultado.ExisteMail = existe == 1;
                return resultado;
            }
        }

        public ListarMejoradorOut ListarMejoradores(ListarMejoradorIn input)
        {
            return new PMejorador().ListarMejoradores(input);
        }
    }
}