﻿using ProyectoFinal._2_Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal.Parametros.Salida
{
    public class ListarUsuariosOut : ParametroBaseOut
    {
        public List<Usuario> Usuarios { get; set; }
    }
}