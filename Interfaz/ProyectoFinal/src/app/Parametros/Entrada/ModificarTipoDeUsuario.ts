import { Modulo } from "src/app/Components/Modulo/class/modulo";

export class ModificarTipoDeUsuarioIn{
    private modulos: Modulo[] = []; 

    constructor(){}

    public get Modulos(): Modulo[] {
        return this.modulos;
    }
    public set Modulos(value: Modulo[]) {
        this.modulos = value;
    }
}