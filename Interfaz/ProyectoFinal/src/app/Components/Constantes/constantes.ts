export const RecursosDeIdioma = {
    MensajesFormularios :
    {
        CAMPO_OBLIGATORIO:'Este campo es obligatorio.',
        CAMPO_INVALIDO: 'El dato ingresado no es correcto.',
        CONTRASENA_INVALIDA: 'La contraseña no es correcta.',
        CONTRASENA_NUEVA: 'Las contraseñas no coinciden.',
    },
    MensajesServicios : 
    {
        Confirmacion:
        {
            PREGUNTA:'¿Desea confirmar ésta acción?',
        },
        Usuario :
        {
            Alta:
            {
                ERROR:'Ocurrió un error al ingresar el usuario.',
                EXITO:'Usuario ingresado con éxito.',
                EXISTEMAIL : 'El mail que desea ingresar ya existe.',
                EXISTECEDULA : 'La cédula que desea ingresar ya existe.',
                
            },
            Baja:
            {
                ERROR:'Ocurrió un error al eliminar el usuario.',
                EXITO:'Usuario eliminado con éxito.',
            },
            Modificar:
            {
                ERROR:'Ocurrió un error al modificar el usuario',
                EXITO:'Usuario modificado con éxito.',
            },
        }, 
        Mejorador :
        {
            Alta :
            {
                ERROR:'Ocurrió un error al ingresar el mejorador.',
                EXITO:'Mejorador ingresado con éxito.',
                EXISTEMAIL:'El mail ingresado ya existe.'
            },
            Baja :
            {
                ERROR:'Ocurrió un error al eliminar el mejorador.',
                EXITO:'Mejorador eliminado con éxito.',
            },
            Modificar :
            {
                ERROR:'Ocurrió un error al modificar el mejorador.',
                EXITO:'Mejorador modificado con éxito.',
                EXISTEMAIL:'El mail ingresado ya existe.',
            },
        },
        TipoDeUsuario :
        {
            AgregarModulo : 
            {
                ERROR:'Ocurrió un error al agregar el modulo al tipo de usuario.',
            },
            EliminarModulo:
            {
                ERROR:'Ocurrió un error al eliminar el modulo al tipo de usuario.',
            },
        },
        Taxonomia : 
        {
            Alta:
            {
                ERROR:'Ocurrió un error al ingresar la taxonomía.',
                EXITO:'Taxonomía ingresada con éxito.',
                EXISTENOMBRE: 'La taxonomía ingresada ya existe.',
            },
            Baja:
            {
                ERROR:'Ocurrió un error al eliminar la taxonomía.',
                EXITO:'Taxonomía eliminada con éxito.',
            },
            Modificar:
            {
                ERROR:'Ocurrió un error al modificar la taxonomía.',
                EXITO:'Taxonomía modificada con éxito.',
                EXISTENOMBRE: 'El nombre de esta taxonomía ya existe.',
            },
            Listar:
            {
                ERROR:'',
            },
        },
        Lote : 
        {
            Alta:
            {
                ERROR:'Ocurrió un error al ingresar el lote.',
                EXITO:'Lote ingresado con éxito.',
                EXISTELOTE:'Ya existe el número de lote.',
            },
            Baja:
            {
                ERROR:'Ocurrió un error al eliminar el lote.',
                EXITO:'Lote eliminado con éxito.',
                NOELIMINADO:'No se pudo eliminar el lote, porque sus sobres se encuentran en algún proceso.',
            },
            Modificar:
            {
                ERROR:'Ocurrió un error al modificar el lote.',
                EXITO:'Lote modificado con éxito.',
            },
            Devolucion:
            {
                ERROR:'Ocurrió un error al devolver los lotes.',
                EXITO:'Lotes devueltos con éxito.',
            },
            Listar:
            {
                ERROR:'Ocurrió un error al listar los lotes.',
            },
        },
        Semilla : 
        {
            Alta:
            {
                ERROR:'Ocurrió un error al ingresar la semilla.',
                EXITO:'Semilla ingresada con éxito.',
                EXISTESEMILLA:'La semilla ya existe',
            },
            Baja:
            {
                ERROR:'Ocurrió un error al eliminar la semilla.',
                EXITO:'Semilla eliminada con éxito.',
                NOELIMINADO:'No se pudo eliminar la semilla, porque pertenece a sobres activos.',
            },
            Modificar:
            {
                ERROR:'Ocurrió un error al modificar la semilla.',
                EXITO:'Semilla modificada con éxito.',
            },
            Listar:
            {
                ERROR:'',
            },
        },
        Sobre:
        {
            Alta:
            {
                ERROR:'Ocurrió un error al ingresar el sobre.',
                EXITO:'Sobre ingresado con éxito.',
                EXISTESOBRE:'El sobre que desea ingresar, ya existe en este lote.'
            },
            Baja:
            {
                ERROR:'Ocurrió un error al eliminar el sobre.',
                EXITO:'Sobre eliminado con éxito.',
            },
            Modificar:
            {
                ERROR:'Ocurrió un error al modificar el sobre.',
                EXITO:'Sobre modificado con éxito.',
                CAMARALLENA: 'La cámara a la cual envía el sobre, está llena.'
            },
            Devolucion:
            {
                ERROR:'Ocurrió un error al devolver los sobres.',
                EXITO:'Sobres devueltos con éxito.',
            },
            Listar:
            {
                ERROR:'',
            },
        },
    },
    Alertas : 
    {
        Mensajes:
        {
            Titulo:
            {
                HUMEDAD:'Tomar Humedad',
                GERMINACION: 'Tomar Germinación',
                VACIO: 'No hay alertas',
            },
            Cuerpo: 
            {
                HUMEDAD:'Las semillas de %s del lote %s se encuentran próximas a su porcentaje de humedad óptimo.',
                GERMINACION: 'Las semillas de %s del lote %s se encuentran listas para contabilizar su germinación.',
                VACIO: 'Por el momento no hay alertas que mostrar.',
            },
        },
    
    },
    Formularios : 
    {
        USUARIO:'Usuario',
        MEJORADOR:'Mejorador',
        TIPODEUSUARIO:'Tipo de usuario',
        TAXONOMIA:'Taxonomia',
        LOTE: 'Lote',
        SEMILLA: 'Semilla',
        SOBRE: 'Sobre',
        INGRESARGERMINACION:'Ingresar germinacion',
        INGRESARHUMEDAD:'Ingresar humedad',
        BUSCARDUPLICADOS: 'Buscar duplicados',
        ESTADISTICAS: 'Estadistica',
        SECADO: 'Secado',
        DEVOLUCION: 'Devolucion',
    },
}

export const MetodosUrl = {
    Mejorador :
    {
        ALTA : "AltaMejorador",
        BAJA : "BajaMejorador",
        MODIFICAR : "ModificarMejorador",
        LISTAR: "ListarMejoradores",
    },
    Usuario : 
    {
        ALTA : 'AltaUsuario',
        BAJA : 'BajaUsuario',
        MODIFICAR : 'ModificarUsuario',
        LISTAR : 'ListarUsuarios',
        LOGIN : 'Login',
        RESETEARCONTRASENA : 'ResetearContrasena',
    },
    TiposDeUsuario :
    {
        LISTAR: 'ListarTiposDeUsuario',
        LISTARMODULOSPORTIPODEUSUARIO: 'ListarModulosPorTipoDeUsuario',
        AGREGARMODULO: 'AgregarModulo',
        ELIMINARMODULO: 'EliminarModulo',
    },
    Taxonomia : 
    {
        ALTA : 'AltaTaxonomia',
        BAJA : 'BajaTaxonomia',
        MODIFICAR : 'ModificarTaxonomia',
        LISTAR : 'ListarTaxonomias',
    },
    Estado :
    {
        LISTAR : 'ListarEstados',
    },
    Camara :
    {
        LISTAR : 'ListarCamaras'
    }, 
    Lote : 
    {
        ALTA : 'AltaLote',
        BAJA : 'BajaLote',
        MODIFICAR : 'ModificarLote',
        DEVOLVERLOTES : 'DevolverLotes',
        LISTAR : 'ListarLotes',
        LISTARLOTEPARADEVOLUCION : 'ListarLotesParaDevolucion',
        EXISTELOTE : 'ExisteLote', 
    },
    Semilla : 
    {
        ALTA : 'AltaSemilla',
        BAJA : 'BajaSemilla',
        MODIFICAR : 'ModificarSemilla',
        LISTAR : 'ListarSemillas',
        EXISTESEMILLA : 'ExisteSemilla',
    },
    Sobre:
    {
        ALTA : 'AltaSobre',
        BAJA : 'BajaSobre',
        MODIFICAR : 'ModificarSobre',
        DEVOLVERSOBRES : 'DevolverSobres',
        LISTAR : 'ListarSobres',
        LISTARSOBRESPARADEVOLUCION : 'ListarSobresParaDevolucion',
        EXISTESOBRE : 'ExisteSobre',
        BUSCARDUPLICADOS: 'BuscarDuplicados',
        EXPORTAREXCEL: 'ExportarExcel',
    },
    Alerta:
    {
        LISTAR : 'ListarAlertas', 
        DESACTIVARALERTA: 'DesactivarAlerta',
    },
    Estadistica:
    {
        OBTENERESTADISTICAS : 'ObtenerEstadisticas',
    },
}
export const Camaras = {
    SECADO : 1,
    HUMEDAD : 2,
    GERMINACION : 3,
}

export const Estados = {
    RECIBIDO : 1,
	ANALIZANDOHUMEDAD : 2,
    GERMINANDO : 3,
    DESTRUIDO : 4,
    ESPERANDOHUMEDAD : 5,
    HUMEDADINGRESADA : 6,
    ESPERANDOGERMINACION : 7,
	GERMINACIONINGRESADA : 8,	   
    ESPERANDOHUMEDADYGERMINACION : 9,
    LISTOPARASECAR : 10,
	SECANDO : 11,
    DEVUELTO : 12,
    ESPERANDOPESAJE : 13,
    LISTOPARAEXPORTAR : 14,
    ALMACENADO : 15,
}

export const ExpresionesRegulares = {
    LETRAS : new RegExp("^[a-zA-Z]+$"),
    LETRAS_Y_ESPACIOS : new RegExp("^[a-zA-Z ]+$"),
    MAIL : new RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"),
    LETRAS_NUMEROS_Y_ESPACIOS : new RegExp("^[a-zA-Z0-9 ]+$"),
    NUMEROS: new RegExp("^[0-9]+$"),
    LETRAS_NUMEROS_ESPACIOS_Y_PUNTOS : new RegExp("^[a-zA-Z0-9 .]+$"),
}

export const Keys = {
    USUARIO : 'usuario',
}


export const Graficas = {
    ObtenerCantidadesPorEspecie : 1,
    ObtenerDevueltosYAlmacenados : 2,
}


