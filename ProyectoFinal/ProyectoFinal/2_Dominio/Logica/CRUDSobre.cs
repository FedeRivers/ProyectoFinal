using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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
            return new PSobre().ModificarSobre(input);
        }

        public ListarSobresOut ListarSobres(ListarSobresIn input)
        {
            return new PSobre().ListarSobres(input);
        }
    }
}