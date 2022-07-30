import { DatePipe, getLocaleDateFormat } from "@angular/common";

export class Mejorador{
    
    private IdMejorador!: Number;
    private Nombre!: string;
    private Mail!: string;
    private Direccion!: string;
    private FechaDeIngreso!: Date;
    private Activo!: Number;


    constructor(){ }

    public get idMejorador(){
        return this.IdMejorador;
    }
    public set idMejorador(value:Number){
        this.IdMejorador = value;
    }

    public get nombre(): string {
        return this.Nombre;
    }

    public set nombre(value: string) {
        this.Nombre = value;
    }

    public get mail(): string {
        return this.Mail;
    }
    public set mail(value: string) {
        this.Mail = value;
    }

    public get direccion(): string {
        return this.Direccion;
    }
    public set direccion(value: string) {
        this.Direccion = value;
    }

    public get fechaDeIngreso(): Date {
        return this.FechaDeIngreso;
    }

    public set fechaDeIngreso(value: Date) {
        this.FechaDeIngreso = value;
    }

    public get activo(): Number {
        return this.Activo;
    }

    public set activo(value: Number) {
        this.Activo = value;
    }

}