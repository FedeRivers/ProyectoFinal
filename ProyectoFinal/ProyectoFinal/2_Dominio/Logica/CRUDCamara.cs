using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDCamara
    {
        public ListarCamarasOut ListarCamaras(ListarCamarasIn input)
        {
            return new PCamara().ListarCamaras(input);
        }
    }
}