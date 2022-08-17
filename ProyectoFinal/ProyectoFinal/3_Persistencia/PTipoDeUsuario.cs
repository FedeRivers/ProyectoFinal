using ProyectoFinal._2_Dominio.Entidades;
using ProyectoFinal._3_Persistencia.Models;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProyectoFinal._3_Persistencia
{
    public class PTipoDeUsuario
    {
        public ListarTiposDeUsuarioOut ListarTiposDeUsuario(ListarTiposDeUsuarioIn input)
        {
            var output = new ListarTiposDeUsuarioOut { Status = new HttpStatusCodeResult(404) , TiposDeUsuario=new List<TipoDeUsuario>()};
            using (var dataContext = new ModeloTipoDeUsuarioDataContext())
            {
                var result = dataContext.ListarTiposDeUsuario(input.TerminoDeBusqueda);
                if (result != null)
                {
                    
                    foreach (var tipoDeUsuario in result)
                    {
                        output.TiposDeUsuario.Add(new TipoDeUsuario
                        {
                            IdTipoDeUsuario = tipoDeUsuario.idTipoDeUsuario,
                            Nombre = tipoDeUsuario.nombre,
                            Activo = tipoDeUsuario.activo
                        });
                    }
                    output.Status = new HttpStatusCodeResult(200);
                }
            }

            return output;
        }

        public ListarModulosPorTipoDeUsuarioOut ListarModulosPorTipoDeUsuario(ListarModulosPorTipoDeUsuarioIn input)
        {
            var output = new ListarModulosPorTipoDeUsuarioOut { Status = new HttpStatusCodeResult(404), Modulos = new List<Modulo>() };
            using (var dataContext = new ModeloTipoDeUsuarioDataContext())
            {
                var result = dataContext.ListarModulosPorTipoDeUsuario(input.IdTipoDeUsuario);
                if (result != null)
                {

                    foreach (var modulo in result)
                    {
                        output.Modulos.Add(new Modulo
                        {
                            IdModulo = modulo.idModulo,
                            Nombre = modulo.nombre,
                            Activo = modulo.activo
                        });
                    }
                    output.Status = new HttpStatusCodeResult(200);
                }
            }

            return output;
        }

        public AgregarModuloOut AgregarModulo(AgregarModuloIn input)
        {
            var output = new AgregarModuloOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloTipoDeUsuarioDataContext())
            {
                try
                {
                    var result = dataContext.AgregarModulo(input.TipoDeUsuario.IdTipoDeUsuario, input.Modulo.IdModulo);
                    output.Status = new HttpStatusCodeResult(200);
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(400);
                }
            }

            return output;
        }


        public EliminarModuloOut EliminarModulo(EliminarModuloIn input)
        {
            var output = new EliminarModuloOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloTipoDeUsuarioDataContext())
            {
                try
                {
                    var result = dataContext.EliminarModulo(input.TipoDeUsuario.IdTipoDeUsuario, input.Modulo.IdModulo);
                    output.Status = new HttpStatusCodeResult(200);
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(400);
                }
            }

            return output;
        }
    }
}