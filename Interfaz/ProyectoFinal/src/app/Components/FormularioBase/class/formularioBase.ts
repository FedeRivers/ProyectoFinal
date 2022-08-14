import { textSpanOverlap } from "typescript";
import { ExpresionesRegulares, RecursosDeIdioma } from "../../Constantes/constantes";

export class FormularioBase{
    private mensaje : string = '';
    constructor(){}

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

    ValidarNumero(texto:string):string
    {
        this.mensaje = this.CampoVacio(texto);
        return this.mensaje == '' ? ExpresionesRegulares.NUMEROS.test(texto) ? ''
         : RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO: this.mensaje;
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

        if(this.mensaje == '' && texto.length != 8 )
        {
            this.mensaje = RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO;
        }
        else
        {
            let primerNumero = +texto[0] * 2;
            let segundoNumero =+ texto[1] * 9;
            let tercerNumero =+ texto[2] * 8;
            let cuartoNumero =+ texto[3] * 7;
            let quintoNumero =+ texto[4] * 6;
            let sextoNumero =+ texto[5] * 3;
            let septimoNumero =+ texto[6] * 4;
            let octavoNumero =+ texto[7];

            if(primerNumero > 10){
                primerNumero = primerNumero / 10;
                (primerNumero+"").split('.')[1];
            }   
            if(segundoNumero > 10){
                segundoNumero = segundoNumero /10;
                (segundoNumero+"").split('.')[1];
            }  
            if(tercerNumero > 10){
                tercerNumero = tercerNumero / 10;
                (tercerNumero+"").split('.')[1];
            }  
            if(cuartoNumero > 10){
                cuartoNumero = cuartoNumero / 10;
                (cuartoNumero+"").split('.')[1];
            }  
            if(quintoNumero > 10){
                quintoNumero = quintoNumero / 10 ;
                (quintoNumero+"").split('.')[1];
            }  
            if(sextoNumero > 10){
                sextoNumero = sextoNumero / 10;
                (sextoNumero+"").split('.')[1];
            } 
            if(septimoNumero > 10){
                septimoNumero = septimoNumero / 10;
                (septimoNumero+"").split('.')[1];
            }  

            let resultado = primerNumero+segundoNumero+tercerNumero+cuartoNumero+quintoNumero+sextoNumero+septimoNumero;
            if(resultado >10)
            {
                resultado = resultado / 10;
                (resultado+"").split('.')[1];
            }

            if(resultado == octavoNumero)
            {
                console.log('Numero valido')
            }
            else
            {
                console.log('Nuemro invalido')
            }
        }

        return this.mensaje;
    }

}