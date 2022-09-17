export class ListarAlertasIn{

    private idTipoDeUsuario!: number;

    constructor(){}

    public get IdTipoDeUsuario(): number {
        return this.idTipoDeUsuario;
    }
    public set IdTipoDeUsuario(value: number) {
        this.idTipoDeUsuario = value;
    }
    
}