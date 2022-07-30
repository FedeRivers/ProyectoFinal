using ProyectoFinal._3_Persistencia.Models;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProyectoFinal._3_Persistencia
{
    public class PMejorador
    {
        public AltaMejoradorOut AltaMejorador(AltaMejoradorIn input)
        {
            var output = new AltaMejoradorOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloMejoradorDataContext())
            {
                var result = dataContext.AltaMejorador(input.Mejorador.Nombre, input.Mejorador.Mail, input.Mejorador.Direccion);
                if (result != -1)
                {
                    output.Status = new HttpStatusCodeResult(200);
                }
            }

            return output;
        }

        public BajaMejoradorOut BajaMejorador(BajaMejoradorIn input)
        {
            var output = new BajaMejoradorOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloMejoradorDataContext())
            {
                var result = dataContext.BajaMejorador(input.IdMejorador);
                if (result != -1)
                {
                    output.Status = new HttpStatusCodeResult(200);
                }
            }

            return output;
        }

        public ModificarMejoradorOut ModificarMejorador(ModificarMejoradorIn input)
        {
            var output = new ModificarMejoradorOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloMejoradorDataContext())
            {
                var result = dataContext.ModificarMejorador(input.Mejorador.IdMejorador, input.Mejorador.Nombre, input.Mejorador.Mail, input.Mejorador.Direccion);
                if (result != -1)
                {
                    output.Status = new HttpStatusCodeResult(200);
                }
            }

            return output;
        }
    }
}