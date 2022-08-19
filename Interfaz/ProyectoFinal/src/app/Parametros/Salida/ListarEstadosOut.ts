import { Estado } from "src/app/Components/Estado/class/estado";

export class ListarEstadosOut{

    private estado: Estado[];

    constructor(){
        this.estado = [];
    }

    public get Estado(): Estado[] {
        return this.estado;
    }
    public set Estado(value: Estado[]) {
        this.estado = value;
    }
}