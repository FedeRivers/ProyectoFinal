using ProyectoFinal._2_Dominio;
using ProyectoFinal._2_Dominio.Entidades;
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
    public class PUsuario
    {
        public AltaUsuarioOut AltaUsuario(AltaUsuarioIn input)
        {
            var output = new AltaUsuarioOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloUsuarioDataContext())
            {
                try
                {
                    var result = dataContext.AltaUsuario(input.Usuario.Nombre, input.Usuario.Apellido, input.Usuario.Contrasena, input.Usuario.Mail, input.Usuario.Cedula, input.Usuario.TipoDeUsuario.IdTipoDeUsuario, input.Usuario.Celular);
                    if (result != -1)
                    {
                        output.Status = new HttpStatusCodeResult(200);
                    }
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(404);
                }
            }

            return output;
        }

        public BajaUsuarioOut BajaUsuario(BajaUsuarioIn input)
        {
            var output = new BajaUsuarioOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloUsuarioDataContext())
            {
                try
                {
                    var result = dataContext.BajaUsuario(input.IdUsuario);
                    if (result != -1)
                    {
                        output.Status = new HttpStatusCodeResult(200);
                    }
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(404);
                }
            }

            return output;
        }

        public ModificarUsuarioOut ModificarUsuario(ModificarUsuarioIn input)
        {
            var output = new ModificarUsuarioOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloUsuarioDataContext())
            {
                try
                {
                    var result = dataContext.ModificarUsuario(input.Usuario.IdUsuario, input.Usuario.Nombre, input.Usuario.Apellido, input.Usuario.Contrasena, input.Usuario.Mail, input.Usuario.Cedula, input.Usuario.TipoDeUsuario.IdTipoDeUsuario, input.Usuario.Celular);
                    if (result != -1)
                    {
                        output.Status = new HttpStatusCodeResult(200);
                    }
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(404);
                }
            }

            return output;
        }

        public ResetearContrasenaOut ResetearContrasena(ResetearContrasenaIn input)
        {
            var output = new ResetearContrasenaOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloUsuarioDataContext())
            {
                try
                {
                    var result = dataContext.ResetearContrasena(input.Usuario.IdUsuario, input.Usuario.Contrasena);
                    output.Status = new HttpStatusCodeResult(200); 
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(404);
                }
            }
            return output;
        }

        public LoginOut Login(LoginIn input)
        {
            var output = new LoginOut { Status = new HttpStatusCodeResult(404) };
            using (var dataContext = new ModeloUsuarioDataContext())
            {
                try
                {
                    var result = dataContext.Login(input.Mail, input.Contrasena).FirstOrDefault();
                    if (result != null)
                    {
                        output.Status = new HttpStatusCodeResult(200);
                        output.Usuario = new Usuario
                        {
                            IdUsuario = result.idUsuario,
                            Nombre = result.nombre,
                            Apellido = result.apellido,
                            Mail = result.mail,
                            Cedula = result.cedula,
                            Contrasena = result.contrasena,
                            TipoDeUsuario = new TipoDeUsuario { IdTipoDeUsuario = result.idTipoDeUsuario }
                        };
                    }
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(404);
                }
            }

            return output;
        }


        public ListarUsuariosOut ListarUsuarios(ListarUsuariosIn input)
        {
            var output = new ListarUsuariosOut { Status = new HttpStatusCodeResult(200), Usuarios = new List<Usuario>() };
            using (var dataContext = new ModeloUsuarioDataContext())
            {
                try
                {
                    var result = dataContext.ListarUsuarios(input.TerminoDeBusqueda);
                    if (result != null)
                    {
                        foreach (var usuario in result)
                        {
                            output.Usuarios.Add(new Usuario
                            {
                                IdUsuario = usuario.idUsuario,
                                Nombre = usuario.NombreUsuario,
                                Apellido = usuario.apellido,
                                Mail = usuario.mail,
                                Contrasena = usuario.contrasena,
                                Cedula = usuario.cedula,
                                Celular = usuario.celular,
                                Activo = usuario.activo,
                                TipoDeUsuario = new TipoDeUsuario
                                {
                                    IdTipoDeUsuario = usuario.idTipoDeUsuario,
                                    Nombre = usuario.NombreTipoDeUsuario
                                }
                            });
                        }
                    }
                }
                catch (Exception ex)
                {
                    output.Status = new HttpStatusCodeResult(400);
                }
                return output;
            }
        }

        public int ExisteUsuario(Usuario usuario)
        {
            using (var dataContext = new ModeloUsuarioDataContext())
            {
                try
                {
                    var result = dataContext.ExisteUsuario(usuario.Mail, usuario.Cedula, usuario.IdUsuario,usuario.Celular);
                    return result;
                }
                catch (Exception ex)
                {
                    return -1;
                }
            }
        }
    }
}