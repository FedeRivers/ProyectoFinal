import { Lote } from "src/app/Components/Lote/class/lote";
import { ParametroBaseOut } from "./ParametroBaseOut";

export class ListarLotesOut extends ParametroBaseOut{  

    private lotes: Lote[];
    
    constructor()
    {
        super();
        this.lotes = [];
    }

    public get Lotes(): Lote[] {
        return this.lotes;
    }
    public set Lotes(value: Lote[]) {
        this.lotes = value;
    }
}