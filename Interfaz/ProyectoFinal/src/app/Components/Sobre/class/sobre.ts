import { Estado } from '../../Estado/class/estado';
import { Lote } from '../../Lote/class/lote';
import { Semilla } from '../../Semilla/class/semilla';
export class Sobre{

    private numeroSobre!: number;
    private ubicacion!: string;
    private fechaDeDevolucion!: Date;
    private fechaDeIngreso!: Date;
    private humedad!: number;
    private germinacion!: number;
    private vigor!: number;
    private lote: Lote;
    private estado: Estado;
    private semilla: Semilla;
    private activo!: boolean;
    
    constructor(){
        this.lote = new Lote();
        this.estado = new Estado();
        this.semilla = new Semilla();
    }

    public get NumeroSobre(): number {
        return this.numeroSobre;
    }
    public set NumeroSobre(value: number) {
        this.numeroSobre = value;
    }

    public get Ubicacion(): string {
        return this.ubicacion;
    }
    public set Ubicacion(value: string) {
        this.ubicacion = value;
    }

    public get FechaDeDevolucion(): Date {
        return this.fechaDeDevolucion;
    }
    public set FechaDeDevolucion(value: Date) {
        this.fechaDeDevolucion = value;
    }

    public get FechaDeIngreso(): Date {
        return this.fechaDeIngreso;
    }
    public set FechaDeIngreso(value: Date) {
        this.fechaDeIngreso = value;
    }

    public get Humedad(): number {
        return this.humedad;
    }
    public set Humedad(value: number) {
        this.humedad = value;
    }

    public get Germinacion(): number {
        return this.germinacion;
    }
    public set Germinacion(value: number) {
        this.germinacion = value;
    }
    public get Vigor(): number {
        return this.vigor;
    }
    public set Vigor(value: number) {
        this.vigor = value;
    }

    public get Lote(): Lote {
        return this.lote;
    }
    public set Lote(value: Lote) {
        this.lote = value;
    }
    
    public get Estado(): Estado {
        return this.estado;
    }
    public set Estado(value: Estado) {
        this.estado = value;
    }

    public get Semilla(): Semilla {
        return this.semilla;
    }
    public set Semilla(value: Semilla) {
        this.semilla = value;
    }

    public get Activo(): boolean {
        return this.activo;
    }
    public set Activo(value: boolean) {
        this.activo = value;
    }


}