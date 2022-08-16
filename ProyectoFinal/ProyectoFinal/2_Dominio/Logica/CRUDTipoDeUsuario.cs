using ProyectoFinal._3_Persistencia;
using ProyectoFinal.Parametros.Entrada;
using ProyectoFinal.Parametros.Salida;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class CRUDTipoDeUsuario
    {
        public ListarTiposDeUsuarioOut ListarTiposDeUsuario(ListarTiposDeUsuarioIn input)
        {
            return new PTipoDeUsuario().ListarTiposDeUsuario(input);
        }

        public ListarModulosPorTipoDeUsuarioOut ListarModulosPorTipoDeUsuario(ListarModulosPorTipoDeUsuarioIn input)
        {
            return new PTipoDeUsuario().ListarModulosPorTipoDeUsuario(input);
        }

        public AgregarModuloOut AgregarModulo(AgregarModuloIn input)
        {
            return new PTipoDeUsuario().AgregarModulo(input);
        }

        public EliminarModuloOut EliminarModulo(EliminarModuloIn input)
        {
            return new PTipoDeUsuario().EliminarModulo(input);
        }
    }
}