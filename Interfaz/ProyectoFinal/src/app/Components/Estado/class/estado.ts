export class Estado{
    private idEstado!: number;
    private nombre!: string;
    private activo!: boolean;

    constructor(){}

    public get IdEstado(): number {
        return this.idEstado;
    }
    public set IdEstado(value: number) {
        this.idEstado = value;
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
}