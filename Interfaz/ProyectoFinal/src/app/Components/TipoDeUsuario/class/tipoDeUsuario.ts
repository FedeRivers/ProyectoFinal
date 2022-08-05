export class TipoDeUsuario{
    private idTipoDeUsuario!: number;
 
    private nombre!: string;
    
    private active!: boolean;
   
    constructor(){}

    public get IdTipoDeUsuario(): number {
        return this.idTipoDeUsuario;
    }
    public set IdTipoDeUsuario(value: number) {
        this.idTipoDeUsuario = value;
    }

    public get Nombre(): string {
        return this.nombre;
    }
    public set Nombre(value: string) {
        this.nombre = value;
    }
    public get Active(): boolean {
        return this.active;
    }
    public set Active(value: boolean) {
        this.active = value;
    }
}