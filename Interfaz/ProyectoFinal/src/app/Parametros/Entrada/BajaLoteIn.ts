export class BajaLoteIn{
    
    private numeroLote!: number;
    
    constructor(){}
    
    public get NumeroLote(): number {
        return this.numeroLote;
    }
    
    public set NumeroLote(value: number) {
        this.numeroLote = value;
    }
}