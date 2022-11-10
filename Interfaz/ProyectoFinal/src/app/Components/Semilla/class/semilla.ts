import { Taxonomia } from "../../Taxonomia/class/taxonomia";

export class Semilla{

    private idSemilla!: number;
    private nombre!: string;
    private fechaDeIngreso!: Date;
    private taxonomia: Taxonomia;
    private activo!: boolean;

    constructor(){
        this.taxonomia = new Taxonomia();
    }

    public get IdSemilla(): number {
        return this.idSemilla;
    }
    public set IdSemilla(value: number) {
        this.idSemilla = value;
    }

    public get Nombre(): string {
        return this.nombre;
    }
    public set Nombre(value: string) {
        this.nombre = value.trim();
    }

    public get FechaDeIngreso(): Date {
        return this.fechaDeIngreso;
    }
    public set FechaDeIngreso(value: Date) {
        this.fechaDeIngreso = value;
    }

    public get Taxonomia(): Taxonomia {
        return this.taxonomia;
    }
    public set Taxonomia(value: Taxonomia) {
        this.taxonomia = value;
    }

    public get Activo(): boolean {
        return this.activo;
    }
    public set Activo(value: boolean) {
        this.activo = value;
    }
}