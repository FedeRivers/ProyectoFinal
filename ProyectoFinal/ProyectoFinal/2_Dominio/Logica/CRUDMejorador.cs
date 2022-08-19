using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDMejorador
    {
        public AltaMejoradorOut AltaMejorador(AltaMejoradorIn input)
        {
            return new PMejorador().AltaMejorador(input);
        }

        public BajaMejoradorOut BajaMejorador(BajaMejoradorIn input)
        {
            return new PMejorador().BajaMejorador(input);
        }

        public ModificarMejoradorOut ModificarMejorador(ModificarMejoradorIn input)
        {
            return new PMejorador().ModificarMejorador(input);
        }

        public ListarMejoradorOut ListarMejoradores(ListarMejoradorIn input)
        {
            return new PMejorador().ListarMejoradores(input);
        }
    }
}