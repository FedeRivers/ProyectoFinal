using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDLote
    {
        public AltaLoteOut AltaLote(AltaLoteIn input)
        {
            return new PLote().AltaLote(input);
        }

        public BajaLoteOut BajaLote(BajaLoteIn input)
        {
            return new PLote().BajaLote(input);
        }

        public ModificarLoteOut ModificarLote(ModificarLoteIn input)
        {
            return new PLote().ModificarLote(input);
        }

        public ListarLotesOut ListarLotes(ListarLotesIn input)
        {
            return new PLote().ListarLotes(input);
        }

        public ExisteLoteOut ExisteLote(ExisteLoteIn input)
        {
            return new PLote().ExisteLote(input);
        }
    }
}