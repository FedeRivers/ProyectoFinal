import { ItemValor } from '../../Components/Estadistica/class/itemValor';
import { ParametroBaseOut } from './ParametroBaseOut';
export class ObtenerEstadisticasOut extends ParametroBaseOut{

    private datos: ItemValor[];

    constructor()
    {
        super();
        this.datos = [];
    }

    public get Datos(): ItemValor[] {
        return this.datos;
    }
    public set Datos(value: ItemValor[]) {
        this.datos = value;
    }

}