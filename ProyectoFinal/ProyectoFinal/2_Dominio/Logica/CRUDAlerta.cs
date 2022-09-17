using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDAlerta
    {
        public void AltaSobre(AltaAlertaIn input)
        {
            new PAlerta().AltaAlerta(input);
        }

        public ListarAlertasOut ListarAlertas(ListarAlertasIn input)
        {
            return new PAlerta().ListarAlertas(input);
        }
    }
}