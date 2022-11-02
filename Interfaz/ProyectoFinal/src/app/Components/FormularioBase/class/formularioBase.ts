import { ExpresionesRegulares, RecursosDeIdioma } from "../../Constantes/constantes";

export class FormularioBase{
    
    private mensaje : string = '';
    private estaSeleccionado: boolean = false;
    private btnAlta: boolean = false;
    private btnBaja: boolean = false;
    private btnModificar: boolean = false;
    private page: number;
    private pageSize: number;

  
    
    constructor()
    {
        this.page = 1;
        this.pageSize = 10;
    }

    public get EstaSeleccionado(): boolean {
        return this.estaSeleccionado;
      }
    public set EstaSeleccionado(value: boolean) {
        this.estaSeleccionado = value;
    }

// #region Get y Set de botones (utilizado para habilitar y deshabilitar los mismos).
    public get BtnAlta(): boolean {
        return this.btnAlta;
    }
    public set BtnAlta(value: boolean) {
        this.btnAlta = value;
    }
    public get BtnBaja(): boolean {
        return this.btnBaja;
    }
    public set BtnBaja(value: boolean) {
        this.btnBaja = value;
    }
    public get BtnModificar(): boolean {
        return this.btnModificar;
    }
    public set BtnModificar(value: boolean) {
        this.btnModificar = value;
    }
// #endregion

//#region Get y Set de los paginados
public get Page() {
    return this.page;
}
public set Page(value) {
    this.page = value;
}
public get PageSize() {
    return this.pageSize;
}
public set PageSize(value) {
    this.pageSize = value;
}
//#endregion

    Ocultar()
    {
      this.EstaSeleccionado = !this.EstaSeleccionado;
    }


    CampoVacio(texto : string):string
    {
        return texto == '' ?  RecursosDeIdioma.MensajesFormularios.CAMPO_OBLIGATORIO : '';
    }

    ValidarLetras(texto:string):string
    {
        this.mensaje = this.CampoVacio(texto);
        return this.mensaje == '' ? ExpresionesRegulares.LETRAS.test(texto) ? ''
         : RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO: this.mensaje;
    } 

    ValidarLetrasYEspacio(texto:string):string
    {
        this.mensaje = this.CampoVacio(texto);
        return this.mensaje == '' ? ExpresionesRegulares.LETRAS_Y_ESPACIOS.test(texto) ? ''
         : RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO: this.mensaje;
    }
    ValidarLetrasNumerosYEspacio(texto:string):string
    {
        this.mensaje = this.CampoVacio(texto);
        return this.mensaje == '' ? ExpresionesRegulares.LETRAS_NUMEROS_Y_ESPACIOS.test(texto) ? ''
         : RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO: this.mensaje;
    }
    ValidarLetrasNumerosEspaciosYPunto(texto:string):string
    {
        this.mensaje = this.CampoVacio(texto);
        return this.mensaje == '' ? ExpresionesRegulares.LETRAS_NUMEROS_ESPACIOS_Y_PUNTOS.test(texto) ? ''
         : RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO: this.mensaje;
    }

    ValidarNumero(texto:string):string
    {
        this.mensaje = this.CampoVacio(texto);
        return this.mensaje == '' ? ExpresionesRegulares.NUMEROS.test(texto) ? ''
         : RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO: this.mensaje;
    }

    ValidarPorcentaje(texto:number):string
    {
        this.mensaje = this.ValidarNumero(texto.toString());
        return (texto > 0 && texto < 101) ? this.mensaje : this.mensaje = RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO;
    }

    ValidarMail(texto:string):string
    {
        this.mensaje = this.CampoVacio(texto);
        return this.mensaje == '' ? ExpresionesRegulares.MAIL.test(texto) ? ''
         : RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO: this.mensaje;
    }

    ValidarCedula(texto:string):string
    {
        this.mensaje = this.ValidarNumero(texto);

        if(this.mensaje == '' && texto.length != 8 || this.mensaje == 'El dato ingresado no es correcto.' )
        {
            this.mensaje = RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO;
        }
        else
        {
            let primerNumero =+ texto[0] * 2;
            let segundoNumero =+ texto[1] * 9;
            let tercerNumero =+ texto[2] * 8;
            let cuartoNumero =+ texto[3] * 7;
            let quintoNumero =+ texto[4] * 6;
            let sextoNumero =+ texto[5] * 3;
            let septimoNumero =+ texto[6] * 4;
            let octavoNumero =+ texto[7];

            if(primerNumero > 10)
            {
                primerNumero = primerNumero / 10;
                primerNumero = Number((primerNumero+"").split('.')[1]);
            }
            if(primerNumero == 10)
            {
                primerNumero = primerNumero - 10;
            }   

            if(segundoNumero > 10)
            {
                segundoNumero = segundoNumero /10;
                segundoNumero = Number((segundoNumero+"").split('.')[1]);
            }
            if(segundoNumero == 10)
            {
                segundoNumero = segundoNumero - 10;
            }  

            if(tercerNumero > 10)
            {
                tercerNumero = tercerNumero / 10;
                tercerNumero = Number((tercerNumero+"").split('.')[1]);
            }
            if(tercerNumero == 10)
            {
                tercerNumero = tercerNumero - 10;
            }

            if(cuartoNumero > 10)
            {
                cuartoNumero = cuartoNumero / 10;
                cuartoNumero = Number((cuartoNumero+"").split('.')[1]);
            }  
            if(cuartoNumero == 10)
            {
                cuartoNumero = cuartoNumero - 10;
            }

            if(quintoNumero > 10)
            {
                quintoNumero = quintoNumero / 10 ;
                quintoNumero = Number((quintoNumero+"").split('.')[1]);
            }
            if(quintoNumero == 10)
            {
                quintoNumero - 10;
            }

            if(sextoNumero > 10)
            {
                sextoNumero = sextoNumero / 10;
                sextoNumero = Number((sextoNumero+"").split('.')[1]);
            } 
            if(sextoNumero == 10)
            {
                sextoNumero = sextoNumero - 10;
            }

            if(septimoNumero > 10)
            {
                septimoNumero = septimoNumero / 10;
                septimoNumero = Number((septimoNumero+"").split('.')[1]);
            }
            if(septimoNumero == 10)
            {
                septimoNumero = septimoNumero - 10;
            }  

            let resultado = primerNumero+segundoNumero+tercerNumero+cuartoNumero+quintoNumero+sextoNumero+septimoNumero;
            if(resultado >10)
            {
                resultado = resultado / 10;
                resultado = Number((resultado+"").split('.')[1]);
                resultado = 10 - resultado;
            }

            if(resultado == octavoNumero)
            {
                this.mensaje = '';
            }
            else
            {
                this.mensaje = RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO;
            }
        }

        return this.mensaje;
    }

}