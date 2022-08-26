import { Estado } from "src/app/Components/Estado/class/estado";

export class ListarEstadosOut{

    private estados: Estado[];

    constructor(){
        this.estados = [];
    }

    public get Estados(): Estado[] {
        return this.estados;
    }
    public set Estados(value: Estado[]) {
        this.estados = value;
    }
}