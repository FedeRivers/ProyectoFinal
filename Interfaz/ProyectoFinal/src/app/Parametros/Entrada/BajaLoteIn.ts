export class BajaLoteIn{
    
    private idLote!: number;
    
    constructor(){}
    
    public get IdLote(): number {
        return this.idLote;
    }
    
    public set IdLote(value: number) {
        this.idLote = value;
    }
}