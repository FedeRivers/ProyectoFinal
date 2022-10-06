export class ObtenerEstadisticasIn{
    
    private enumeradoGrafica!: number;
    private fechaDesde!: Date;
    private fechaHasta!: Date;

    constructor(){}

    public get FechaDesde(): Date {
        return this.fechaDesde;
    }
    public set FechaDesde(value: Date) {
        this.fechaDesde = value;
    }
    public get FechaHasta(): Date {
        return this.fechaHasta;
    }
    public set FechaHasta(value: Date) {
        this.fechaHasta = value;
    }
    public get EnumeradoGrafica(): number {
        return this.enumeradoGrafica;
    }
    public set EnumeradoGrafica(value: number) {
        this.enumeradoGrafica = value;
    }
}