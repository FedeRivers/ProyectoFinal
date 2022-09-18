export class ListarAlertasIn{

    private idTipoDeUsuario!: number;
    private cantidadDeAlertas: number;
    
    constructor(){
        this.cantidadDeAlertas = 0;
    }

    public get IdTipoDeUsuario(): number {
        return this.idTipoDeUsuario;
    }
    public set IdTipoDeUsuario(value: number) {
        this.idTipoDeUsuario = value;
    }
    
    public get CantidadDeAlertas(): number {
        return this.cantidadDeAlertas;
    }           
    public set CantidadDeAlertas(value: number) {
        this.cantidadDeAlertas = value;
    }
}