export class Camara{
    
    private idCamara!: number;
    private nombre!: string;

    constructor( ){}

    public get IdCamara(): number {
        return this.idCamara;
    }
    public set IdCamara(value: number) {
        this.idCamara = value;
    }

    public get Nombre(): string {
        return this.nombre;
    }
    public set Nombre(value: string) {
        this.nombre = value;
    }
}