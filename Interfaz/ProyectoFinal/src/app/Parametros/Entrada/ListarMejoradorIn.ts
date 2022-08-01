export class ListarMejoradorIn {
    
    private TerminoDeBusqueda: string= '';

    constructor(){}

    public get terminoDeBusqueda(): string {
        return this.TerminoDeBusqueda;
    }
    public set terminoDeBusqueda(value: string ) {
        this.TerminoDeBusqueda = value;
    }

}