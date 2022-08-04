import { ParametroBaseOut } from './ParametroBaseOut';
export class BajaMejoradorOut extends ParametroBaseOut{
    

constructor(){
    super();
    this.MensajeExito='Mejorador eliminado con éxito.';
    this.MensajeError='Ocurrió un error al eliminar el mejorador.';
}

}