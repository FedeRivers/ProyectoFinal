import { ParametroBaseOut } from './ParametroBaseOut';
export class ModificarMejoradorOut extends ParametroBaseOut{
    

constructor(){
    super();
    this.MensajeExito='Mejorador modificado con éxito.';
    this.MensajeError='Ocurrió un error al modificar el mejorador.';
}

}