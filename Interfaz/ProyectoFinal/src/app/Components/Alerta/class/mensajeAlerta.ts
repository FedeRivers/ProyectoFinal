export class MensajeAlerta{

    private titulo!: string;
    private mensaje!: string;
    private fecha!: Date;
    private idAlerta!: number;

    constructor(){}

    public get Titulo(): string {
        return this.titulo;
    }
    public set Titulo(value: string) {
        this.titulo = value;
    }

    public get Mensaje(): string {
        return this.mensaje;
    }
    public set Mensaje(value: string) {
        this.mensaje = value;
    }

    public get Fecha(): Date {
        return this.fecha;
    }
    public set Fecha(value: Date) {
        this.fecha = value;
    }

    public get IdAlerta(): number {
        return this.idAlerta;
    }
    public set IdAlerta(value: number) {
        this.idAlerta = value;
    }
}