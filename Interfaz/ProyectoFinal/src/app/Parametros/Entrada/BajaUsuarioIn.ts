export class BajaUsuarioIn {
    
    private idUsuario!: Number;

    constructor(){}

    public get IdUsuario(): Number {
        return this.idUsuario;
    }
    public set IdUsuario(value: Number) {
        this.idUsuario = value;
    }

}