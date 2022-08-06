export class Usuario {
    
    private nombre: string;
    private apellido: string;
    private mail: string;
    private cedula: string;
    private contrasena: string;
    private activo: string;

    constructor()
    {
        this.nombre = '';
        this.apellido = '';
        this.mail = '';
        this.cedula = '';
        this.activo = '';
        this.contrasena = '';
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

    public get Activo(): string {
        return this.activo;
    }
    public set Activo(value: string) {
        this.activo = value;
    }

    public get Contrasena(): string {
        return this.contrasena;
    }
    public set Contrasena(value: string) {
        this.contrasena = value;
    }

}
