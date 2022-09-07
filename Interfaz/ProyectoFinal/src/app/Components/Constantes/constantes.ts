import { Taxonomia } from '../Taxonomia/class/taxonomia';

export const RecursosDeIdioma = {
    MensajesFormularios :
    {
        CAMPO_OBLIGATORIO:'Este campo es obligatorio.',
        CAMPO_INVALIDO: 'El dato ingresado no es correcto.',
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
                EXISTELOTE:'Ya existe el número de lote para el mejorador.',
            },
            Baja:
            {
                ERROR:'Ocurrió un error al eliminar el lote.',
                EXITO:'Lote eliminado con éxito.',
            },
            Modificar:
            {
                ERROR:'Ocurrió un error al modificar el lote.',
                EXITO:'Lote modificado con éxito.',
            },
            Listar:
            {
                ERROR:'',
            },
        },
        Semilla : 
        {
            Alta:
            {
                ERROR:'Ocurrió un error al ingresar la semilla.',
                EXITO:'Semilla ingresada con éxito.',
            },
            Baja:
            {
                ERROR:'Ocurrió un error al eliminar la semilla.',
                EXITO:'Semilla eliminada con éxito.',
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
            },
            Listar:
            {
                ERROR:'',
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
    Lote : 
    {
        ALTA : 'AltaLote',
        BAJA : 'BajaLote',
        MODIFICAR : 'ModificarLote',
        LISTAR : 'ListarLotes',
        EXISTELOTE : 'ExisteLote', 
    },
    Semilla : 
    {
        ALTA : 'AltaSemilla',
        BAJA : 'BajaSemilla',
        MODIFICAR : 'ModificarSemilla',
        LISTAR : 'ListarSemillas',
    },
    Sobre:
    {
        ALTA : 'AltaSobre',
        BAJA : 'BajaSobre',
        MODIFICAR : 'ModificarSobre',
        LISTAR : 'ListarSobres',
        EXISTESOBRE : 'ExisteSobre',
    },
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



