
export class Mejorador{
    
    private idMejorador!: Number;
    private nombre!: string;
    private mail!: string;
    private direccion!: string;
    private fechaDeIngreso!: Date;
    private activo!: Number;


    constructor(){ }

    public get IdMejorador(){
        return this.idMejorador;
    }
    public set IdMejorador(value:Number){
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

    public get Activo(): Number {
        return this.activo;
    }

    public set Activo(value: Number) {
        this.activo = value;
    }

}