export class Modulo{
    private idModulo!: number;
    private nombre!: string;
    private activo!: number;

    constructor(){}
    public get IdModulo(): number {
        return this.idModulo;
    }
    public set IdModulo(value: number) {
        this.idModulo = value;
    }
    public get Nombre(): string {
        return this.nombre;
    }
    public set Nombre(value: string) {
        this.nombre = value;
    }
    public get Activo(): number {
        return this.activo;
    }
    public set Activo(value: number) {
        this.activo = value;
    }
}