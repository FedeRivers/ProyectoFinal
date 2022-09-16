using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class Estimaciones
    {
        public DateTime EstimarHumedad(double? pHumedad)
        {
            //Variables De Entrada
            double a, b, fx, Sxy = 0, Sxx = 0, n = 7, Px = 0, Py = 0;

            //Vectores para los datos.
            double[] x = new double[14];
            double[] y = new double[14];

            //Vamos a inicializar valores:
            #region xvalores
            x[0] = 12;
            x[1] = 9;
            x[2] = 8.2;
            x[3] = 7.5;
            x[4] = 7.3;
            x[5] = 6.8;
            x[6] = 6.78;

            #endregion
            #region yvalores
            y[0] = 43719;
            y[1] = 43739;
            y[2] = 43759;
            y[3] = 43779;
            y[4] = 43799;
            y[5] = 43819;
            y[6] = 43839;


            #endregion

            //Metodos para sumatorias

            for (int i = 0; i <= 6; i++)
            {
                //Sumatoria de XY
                Sxy = Sxy + (x[i] * y[i]);
                Sxx = Sxx + (x[i] * x[i]);
            }

            //Metodos para promedio:
            for (int i = 0; i <= 6; i++)
            {
                Px = Px + x[i];
                Py = Py + y[i];
            }
            Px = Px / n;
            Py = Py / n;

            //Calculamos a y b para obtener la funcion lineal
            a = (Sxy - (n * Px * Py)) / (Sxx - (n * Px * Px));
            b = Py - (a * Px);

            fx = a * Convert.ToDouble(pHumedad) + b;

            double resultado = y[6] - fx;
            double dias = double.Parse(resultado.ToString().Substring(0,5));
            DateTime fechaActual = DateTime.Now;
            return fechaActual.AddDays(dias);
        }
    }
}