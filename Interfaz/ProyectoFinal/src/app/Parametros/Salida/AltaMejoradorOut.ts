import { ParametroBaseOut } from './ParametroBaseOut';
export class AltaMejoradorOut extends ParametroBaseOut{
    

constructor(){
    super();
    this.MensajeExito='Mejorador ingresado con éxito.';
    this.MensajeError='Ocurrió un error al ingresar el mejorador.';
}

}