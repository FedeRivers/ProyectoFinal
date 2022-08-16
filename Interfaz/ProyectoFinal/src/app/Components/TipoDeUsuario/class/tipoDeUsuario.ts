import { Modulo } from "../../Modulo/class/modulo";

export class TipoDeUsuario{
    private idTipoDeUsuario!: number;
 
    private nombre!: string;
    
    private activo!: boolean;
   
    private modulos: Modulo[] = [];

    constructor(){}

    public get IdTipoDeUsuario(): number {
        return this.idTipoDeUsuario;
    }
    public set IdTipoDeUsuario(value: number) {
        this.idTipoDeUsuario = value;
    }
    public get Nombre(): string {
        return this.nombre;
    }
    public set Nombre(value: string) {
        this.nombre = value;
    }
    public get Activo(): boolean {
        return this.activo;
    }
    public set Activo(value: boolean) {
        this.activo = value;
    }
    public get Modulos(): Modulo[] {
        return this.modulos;
    }
    public set Modulos(value: Modulo[]) {
        this.modulos = value;
    }
}