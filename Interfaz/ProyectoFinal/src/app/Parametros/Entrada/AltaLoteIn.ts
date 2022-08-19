import { Lote } from "src/app/Components/Lote/class/lote";

export class AltaLoteIn{
    
    private lote: Lote;
    
    constructor()
    {
        this.lote = new Lote()
    }

    public get Lote(): Lote {
        return this.lote;
    }
    public set Lote(value: Lote) {
        this.lote = value;
    }
    
}

