import { Modulo } from "src/app/Components/Modulo/class/modulo";
import { ParametroBaseOut } from "./ParametroBaseOut";
export class ListarModulosPorTipoDeUsuarioOut extends ParametroBaseOut{
    
    private modulos: Modulo[] = [];

    constructor()
    {
        super();
    }

    public get Modulos(): Modulo[] {
        return this.modulos;
    }
    public set Modulos(value: Modulo[]) {
        this.modulos = value;
    }
}