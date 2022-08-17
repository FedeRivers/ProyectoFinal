using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDTaxonomia
    {
        public AltaTaxonomiaOut AltaTaxonomia(AltaTaxonomiaIn input)
        {
            return new PTaxonomia().AltaTaxonomia(input);
        }

        public BajaTaxonomiaOut BajaTaxonomia(BajaTaxonomiaIn input)
        {
            return new PTaxonomia().BajaTaxonomia(input);
        }

        public ModificarTaxonomiaOut ModificarTaxonomia(ModificarTaxonomiaIn input)
        {
            return new PTaxonomia().ModificarTaxonomia(input);
        }
    }
}