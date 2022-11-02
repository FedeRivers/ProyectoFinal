export class ListarBaseIn{
    private terminoDeBusqueda: string;
    
    constructor()
    {
        this.terminoDeBusqueda = '';
    }
    
    public get TerminoDeBusqueda(): string {
        return this.terminoDeBusqueda;
    }
    public set TerminoDeBusqueda(value: string ) {
        this.terminoDeBusqueda = value;
    }
}