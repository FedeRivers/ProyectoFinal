import { Camara } from "src/app/Components/Camara/class/Camara";

export class ListarCamarasOut{

    private camaras: Camara[];

    constructor(){
        this.camaras = [];
    }

    public get Camaras(): Camara[] {
        return this.camaras;
    }
    public set Camaras(value: Camara[]) {
        this.camaras = value;
    }

}