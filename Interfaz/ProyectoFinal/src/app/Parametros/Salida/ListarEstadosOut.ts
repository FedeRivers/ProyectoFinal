import { Estado } from "src/app/Components/Estado/class/estado";
import { ParametroBaseOut } from "./ParametroBaseOut";

export class ListarEstadosOut extends ParametroBaseOut{

    private estados: Estado[];

    constructor()
    {
        super();
        this.estados = [];
    }

    public get Estados(): Estado[] {
        return this.estados;
    }
    public set Estados(value: Estado[]) {
        this.estados = value;
    }
}