import { Camara } from "src/app/Components/Camara/class/Camara";
import { ParametroBaseOut } from "./ParametroBaseOut";

export class ListarCamarasOut extends ParametroBaseOut{

    private camaras: Camara[];

    constructor(){
        super();
        this.camaras = [];
    }

    public get Camaras(): Camara[] {
        return this.camaras;
    }
    public set Camaras(value: Camara[]) {
        this.camaras = value;
    }

}