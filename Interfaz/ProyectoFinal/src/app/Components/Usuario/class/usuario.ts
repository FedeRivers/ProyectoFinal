import { TipoDeUsuario } from '../../TipoDeUsuario/class/tipoDeUsuario';
export class Usuario {
    
    private idUsuario!: number;
    private nombre!: string;
    private apellido!: string;
    private mail!: string;
    private cedula!: string;
    private contrasena!: string;
    private tipoDeUsuario: TipoDeUsuario;
    private activo!: boolean;

    constructor()
    {
        this.tipoDeUsuario = new TipoDeUsuario();
    }


    public get IdUsuario(): number {
        return this.idUsuario;
    }
    public set IdUsuario(value: number) {
        this.idUsuario = value;
    }

    public get Nombre(): string {
        return this.nombre;
    }
    public set Nombre(value: string) {
        this.nombre = value;
    }

    public get Apellido(): string {
        return this.apellido;
    }
    public set Apellido(value: string) {
        this.apellido = value;
    }

    public get Mail(): string {
        return this.mail;
    }
    public set Mail(value: string) {
        this.mail = value;
    }

    public get Cedula(): string {
        return this.cedula;
    }
    public set Cedula(value: string) {
        this.cedula = value;
    }

    public get Contrasena(): string {
        return this.contrasena;
    }
    public set Contrasena(value: string) {
        this.contrasena = value;
    }

    public get TipoDeUsuario(): TipoDeUsuario{
        return this.tipoDeUsuario;
    }
    public set TipoDeUsuario(value: TipoDeUsuario) {
        this.tipoDeUsuario = value;
    }

    public get Activo(): boolean {
        return this.activo;
    }
    public set Activo(value: boolean) {
        this.activo = value;
    }
}
