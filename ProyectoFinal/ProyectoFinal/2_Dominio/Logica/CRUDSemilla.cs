using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDSemilla
    {
        public AltaSemillaOut AltaSemilla(AltaSemillaIn input)
        {
            return new PSemilla().AltaSemilla(input);
        }

        public BajaSemillaOut BajaSemilla(BajaSemillaIn input)
        {
            return new PSemilla().BajaSemilla(input);
        }

        public ModificarSemillaOut ModificarSemilla(ModificarSemillaIn input)
        {
            return new PSemilla().ModificarSemilla(input);
        }

        public ListarSemillasOut ListarSemillas(ListarSemillasIn input)
        {
            return new PSemilla().ListarSemillas(input);
        }

        public ExisteSemillaOut ExisteSemilla(ExisteSemillaIn input)
        {
            return new PSemilla().ExisteSemilla(input);
        }
    }
}