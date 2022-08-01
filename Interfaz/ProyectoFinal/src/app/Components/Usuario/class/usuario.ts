export class Usuario {
    
    private nombre: string;

    private apellido: string;


    constructor()
    {
        this.nombre = '';
        this.apellido = '';
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
}
