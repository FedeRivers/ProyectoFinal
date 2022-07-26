export class Usuario {
    private Nombre: string;

    private Apellido: string;


    constructor()
    {
        this.Nombre = '';
        this.Apellido = '';
    }

    public get nombre(): string {
        return this.Nombre;
    }

    public set nombre(value: string) {
        this.Nombre = value;
    }

    public get apellido(): string {
        return this.Apellido;
    }
    public set apellido(value: string) {
        this.Apellido = value;
    }
}
