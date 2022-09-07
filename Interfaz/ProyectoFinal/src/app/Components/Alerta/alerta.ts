export class Alerta{
    
    private idAlerta!: number;
    private fechaDeCreacion!: Date;
    private titulo!: string;
    private texto!: string;
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

    public get Titulo(): string {
        return this.titulo;
    }
    public set Titulo(value: string) {
        this.titulo = value;
    }

    public get Texto(): string {
        return this.texto;
    }
    public set Texto(value: string) {
        this.texto = value;
    }

    public get Activo(): boolean {
        return this.activo;
    }
    public set Activo(value: boolean) {
        this.activo = value;
    }
}