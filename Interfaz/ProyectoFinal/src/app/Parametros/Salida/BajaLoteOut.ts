import { ParametroBaseOut } from "./ParametroBaseOut";

export class BajaLoteOut extends ParametroBaseOut
{
    private loteEliminado!: boolean;

    constructor(){
        super();
    }

    public get LoteEliminado(): boolean {
        return this.loteEliminado;
    }
    public set LoteEliminado(value: boolean) {
        this.loteEliminado = value;
    }
}