
export const RecursosDeIdioma = {
    MensajesFormularios :
    {
        CAMPO_OBLIGATORIO:'Este campo es obligatorio.',
        CAMPO_UNDEFINED:'Campo Undefined',
    },
    MensajesServicios : 
    {
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
    }   
}

export const ExpresionesRegulares = {
    LETRAS_Y_ESPACIOS : new RegExp("^[a-zA-Z ]+$"),
    MAIL : new RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"),
    LETRAS_NUMEROS_Y_ESPACIOS : new RegExp("^[a-zA-Z0-9 ]+$"),
}

export const EstilosDeFormulario = {
    FORMULARIO : 'form-control',
    VALIDO : 'form-control is-valid',
    INVALIDO : 'form-control is-invalid',
}



