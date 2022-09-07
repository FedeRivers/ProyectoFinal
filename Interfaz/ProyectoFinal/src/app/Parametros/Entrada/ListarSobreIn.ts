export class ListarSobreIn{
    
    private numeroSobre!: number;
    private numeroLote!: number;
    private nombreSemilla!: string;
    private idEstado!: number;
    private idCamara!: number;

    constructor(){ }

    public get NumeroSobre(): number {
        return this.numeroSobre;
    }
    public set NumeroSobre(value: number) {
        this.numeroSobre = value;
    }

    public get NumeroLote(): number {
        return this.numeroLote;
    }
    public set NumeroLote(value: number) {
        this.numeroLote = value;
    }
    
    public get NombreSemilla(): string {
        return this.nombreSemilla;
    }
    public set NombreSemilla(value: string) {
        this.nombreSemilla = value;
    }

    public get IdEstado(): number {
        return this.idEstado;
    }
    public set IdEstado(value: number) {
        this.idEstado = value;
    }

    public get IdCamara(): number {
        return this.idCamara;
    }
    public set IdCamara(value: number) {
        this.idCamara = value;
    }
}