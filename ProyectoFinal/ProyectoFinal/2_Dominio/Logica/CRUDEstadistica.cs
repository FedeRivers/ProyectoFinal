using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDEstadistica
    {

        public ObtenerEstadisticasOut ObtenerEstadisticas(ObtenerEstadisticasIn input)
        {
            if (input.EnumeradoGrafica == Entidades.EnumeradoGraficas.ObtenerCantidadesPorEspecie)
            {
                return new PEstadistica().ObtenerCantidadesPorEspecie(input);
            }
            else
            {
                return new PEstadistica().ObtenerDevueltosYAlmacenados(input);
            }
        }
    }
}