
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
            PREGUNTA:'¿Desea confirmar los cambios?',
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
                EXITO:'Usuario modiciado con éxito.',
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
        }
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
    }   
}

export const ExpresionesRegulares = {
    LETRAS : new RegExp("^[a-zA-Z]+$"),
    LETRAS_Y_ESPACIOS : new RegExp("^[a-zA-Z ]+$"),
    MAIL : new RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"),
    LETRAS_NUMEROS_Y_ESPACIOS : new RegExp("^[a-zA-Z0-9 ]+$"),
    NUMEROS: new RegExp("^[0-9]+$"),
    LETRAS_NUMEROS_ESPACIOS_Y_PUNTOS : new RegExp("^[a-zA-Z0-9 .]+$"),
}




