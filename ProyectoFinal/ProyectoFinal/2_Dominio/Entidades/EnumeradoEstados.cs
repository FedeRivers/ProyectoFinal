using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Entidades
{
    public enum EnumeradoEstados
    {               
        Recibido = 1,
        AnalizandoHumedad = 2,
        Germinando = 3,
	    Destruido = 4,
	    EsperandoHumedad = 5,
	    HumedadIngresada = 6,
	    EsperandoGerminacion = 7,
	    GerminacionIngresada = 8,
	    EsperandoHumedadYGerminacion = 9,
	    ListoParaSecar = 10,
	    Secando = 11,
	    Devuelto = 12,
        EsperandoPesaje = 13,
        ListoParaExportar = 14,
        Almacenado = 15
    }
}