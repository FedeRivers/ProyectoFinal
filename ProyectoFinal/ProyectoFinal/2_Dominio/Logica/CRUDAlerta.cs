using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros;
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
  
        public void AltaAlerta(AltaAlertaIn input)
        {
            if (input.Sobre.Ubicacion.Camara.IdCamara == 3)//Cuando se envía un sobre a germinar.
            {
                input.FechaDeEjecucion = DateTime.Now.AddDays(7);
            }
            else if (input.Sobre.Vigor > 0 && input.IdTipoDeUsuario == 3)//Cuando se ingresa vigor.
            {
                input.FechaDeEjecucion = DateTime.Now.AddDays(7);
                input.Sobre.Ubicacion.Camara.IdCamara = 3;
            }
            else if (input.Sobre.Humedad > 7 && input.IdTipoDeUsuario == 4)//Cuando se ingresa la humedad al sobre.
            {
                input.FechaDeEjecucion = Convert.ToDateTime(new Estimaciones().EstimarHumedad(input.Sobre.Humedad));//Cálculo para estimar la fecha
                input.Sobre.Ubicacion.Camara.IdCamara = 1;
            }
            if (input.FechaDeEjecucion > DateTime.Now)//No crear alerta repetida.
            {
                new PAlerta().AltaAlerta(input);
            }
        }

        public ListarAlertasOut ListarAlertas(ListarAlertasIn input)
        {           
            return new PAlerta().ListarAlertas(input);
        }

        public DesactivarAlertaOut DesactivarAlerta(DesactivarAlertaIn input)
        {
            return new PAlerta().DesactivarAlerta(input);
        }

    }
}