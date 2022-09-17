export class Alerta{
    
    private idAlerta!: number;
    private fechaDeCreacion!: Date;
    private fechaDeEjecucion!: Date;
    private numeroLote!: number;
    private idSemilla!: number;
    private idTipoDeUsuario!: number;
    private idCamara!: number;
    private activo!: boolean;

    constructor(){}

    public get IdAlerta(): number {
        return this.idAlerta;
    }
    public set IdAlerta(value: number) {
        this.idAlerta = value;
    }

    public get FechaDeCreacion(): Date {
        return this.fechaDeCreacion;
    }
    public set FechaDeCreacion(value: Date) {
        this.fechaDeCreacion = value;
    }

    public get FechaDeEjecucion(): Date {
        return this.fechaDeEjecucion;
    }
    public set FechaDeEjecucion(value: Date) {
        this.fechaDeEjecucion = value;
    }

    public get NumeroLote(): number {
        return this.numeroLote;
    }
    public set NumeroLote(value: number) {
        this.numeroLote = value;
    }

    public get IdSemilla(): number {
        return this.idSemilla;
    }
    public set IdSemilla(value: number) {
        this.idSemilla = value;
    }

    public get IdTipoDeUsuario(): number {
        return this.idTipoDeUsuario;
    }
    public set IdTipoDeUsuario(value: number) {
        this.idTipoDeUsuario = value;
    }
    
    public get IdCamara(): number {
        return this.idCamara;
    }
    public set IdCamara(value: number) {
        this.idCamara = value;
    }

    public get Activo(): boolean {
        return this.activo;
    }
    public set Activo(value: boolean) {
        this.activo = value;
    }


}