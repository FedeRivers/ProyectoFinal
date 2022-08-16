using ProyectoFinal._2_Dominio.Entidades;
using ProyectoFinal._3_Persistencia.Models;
using ProyectoFinal._3_Persistencia.Models.ParametroDeTabla;
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
                var result = dataContext.ListarTiposDeUsuario();
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

        public ModificarTipoDeUsuarioOut ModificarTipoDeUsuario(ModificarTipoDeUsuarioIn input)
        {
            var output = new ModificarTipoDeUsuarioOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloTipoDeUsuarioDataContext())
            {
                using (var tabla = new DataTable())
                {
                    tabla.Columns.Add(new DataColumn("idModulo", typeof(string)));
                    foreach (var modulo in input.TipoDeUsuario.Modulos)
                    {              
                        tabla.Rows.Add(modulo.IdModulo.ToString());
                    }

                    var pList = new SqlParameter("@parametro", SqlDbType.Structured)
                    {
                        TypeName = "dbo.ModulosPDT",

                        Value = tabla
                    };
                    //var modulosPDT = input.TipoDeUsuario.Modulos.Select(m =>
                    //new ModulosPDT
                    //{
                    //    IdModulo = m.IdModulo
                    //}).ToList();

                    var result = dataContext.ExecuteCommand("dbo.ModificarTiposDeUsuario", input.TipoDeUsuario.IdTipoDeUsuario, pList);
                    if (result != null)
                    {
                        output.Status = new HttpStatusCodeResult(200);
                    }
                }
            }

            return output;
        }
    }
}