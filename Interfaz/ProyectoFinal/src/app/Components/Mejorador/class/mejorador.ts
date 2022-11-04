
export class Mejorador{
    
    private idMejorador!: number;
    private nombre!: string;
    private mail!: string;
    private direccion!: string;
    private fechaDeIngreso!: Date;
    private celular!: string;
    private activo!: boolean;


    constructor(){ }

    public get IdMejorador(){
        return this.idMejorador;
    }
    public set IdMejorador(value:number){
        this.idMejorador = value;
    }

    public get Nombre(): string {
        return this.nombre;
    }

    public set Nombre(value: string) {
        this.nombre = value;
    }

    public get Mail(): string {
        return this.mail;
    }
    public set Mail(value: string) {
        this.mail = value;
    }

    public get Direccion(): string {
        return this.direccion;
    }
    public set Direccion(value: string) {
        this.direccion = value;
    }

    public get FechaDeIngreso(): Date {
        return this.fechaDeIngreso;
    }

    public set FechaDeIngreso(value: Date) {
        this.fechaDeIngreso = value;
    }

    public get Activo(): boolean {
        return this.activo;
    }

    public set Activo(value: boolean) {
        this.activo = value;
    }

    public get Celular(): string {
        return this.celular;
    }
    public set Celular(value: string) {
        this.celular = value;
    }

}