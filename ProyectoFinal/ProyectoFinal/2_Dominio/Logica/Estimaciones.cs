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


        public double EstimarGerminacion(DateTime? pFecha)
        {
            //Variables De Entrada
            double a, b, fx, Sxy = 0, Sxx = 0, n = 9, Px = 0, Py = 0;

            //Vectores para los datos.
            double[] x = new double[18];
            double[] y = new double[18];

            //Vamos a inicializar valores:
            #region xvalores
            x[0] = 36791;
            x[1] = 38252;
            x[2] = 38983;
            x[3] = 39715;
            x[4] = 40811;
            x[5] = 42273;
            x[6] = 42640;
            x[7] = 43371;
            x[8] = 44103;



            #endregion
            #region yvalores
            y[0] = 98;
            y[1] = 95;
            y[2] = 88;
            y[3] = 75;
            y[4] = 61;
            y[5] = 48;
            y[6] = 31;
            y[7] = 16;
            y[8] = 3;

            double fechaOA = Convert.ToDateTime(pFecha).ToOADate();
            double diferenciaDeFechas = fechaOA - x[0];
            for (var i = 0; i <= 8; i++)
            {
                x[i] = x[i] + diferenciaDeFechas;
            }

            #endregion

            //Metodos para sumatorias

            for (int i = 0; i <= 8; i++)
            {
                //Sumatoria de XY
                Sxy = Sxy + (x[i] * y[i]);
                Sxx = Sxx + (x[i] * x[i]);
            }

            //Metodos para promedio:
            for (int i = 0; i <= 8; i++)
            {
                Px = Px + x[i];
                Py = Py + y[i];
            }
            Px = Px / n;
            Py = Py / n;

            //Calculamos a y b para obtener la funcion lineal
            a = (Sxy - (n * Px * Py)) / (Sxx - (n * Px * Px));
            b = Py - (a * Px);

            DateTime fechaActual = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 0, 0, 0);
            double fechaActualOA = fechaActual.ToOADate();

            fx = a * fechaActualOA + b;

            double germinacionActual = fx > 100 ? 100 : fx < 0 ? 0 : double.Parse(fx.ToString().Substring(0, 5));
            return germinacionActual;
        }
    }
}