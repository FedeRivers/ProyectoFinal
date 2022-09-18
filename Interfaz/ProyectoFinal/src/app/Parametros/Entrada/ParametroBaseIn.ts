import { Usuario } from "src/app/Components/Usuario/class/usuario";

export class ParametroBaseIn{
    
    private idTipoDeUsuario: number;

    constructor(){
        let usuario:Usuario = JSON.parse(sessionStorage.getItem('usuario')!); 
        this.idTipoDeUsuario =  usuario.TipoDeUsuario.IdTipoDeUsuario;
    }

    public get IdTipoDeUsuario(): number {
        return this.idTipoDeUsuario;
    }
    public set IdTipoDeUsuario(value: number) {
        this.idTipoDeUsuario = value;
    }

}