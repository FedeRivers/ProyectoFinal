import { Mejorador } from "../../Mejorador/class/mejorador";

export class Lote{

    private idLote!: number;
    private numero!: number;
    private descripcion!: string;
    private fechaDeIngreso!: Date;
    private mejorador: Mejorador;
    private activo!: boolean;

    constructor(){
        this.mejorador = new Mejorador();
    }

    public get IdLote(): number {
        return this.idLote;
    }
    public set IdLote(value: number) {
        this.idLote = value;
    }
    
    public get Numero(): number {
        return this.numero;
    }
    public set Numero(value: number) {
        this.numero = value;
    }

    public get Descripcion(): string {
        return this.descripcion;
    }
    public set Descripcion(value: string) {
        this.descripcion = value;
    }

    public get FechaDeIngreso(): Date {
        return this.fechaDeIngreso;
    }
    public set FechaDeIngreso(value: Date) {
        this.fechaDeIngreso = value;
    }

    public get Mejorador(): Mejorador {
        return this.mejorador;
    }
    public set Mejorador(value: Mejorador) {
        this.mejorador = value;
    }

    public get Activo(): boolean {
        return this.activo;
    }
    public set Activo(value: boolean) {
        this.activo = value;
    }

}