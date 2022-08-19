import { Lote } from "src/app/Components/Lote/class/lote";

export class ListarLotesOut{  

    private lotes: Lote[];
    
    constructor(){
        this.lotes = [];
    }

    public get Lotes(): Lote[] {
        return this.lotes;
    }
    public set Lotes(value: Lote[]) {
        this.lotes = value;
    }
}