﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Entidades
{
    public class TipoDeUsuario
    {
        public int IdTipoDeUsuario { get; set; }
        public string Nombre { get; set; }
        public bool Activo { get; set; }
        public List<Modulo> Modulos { get; set; }
    }
}