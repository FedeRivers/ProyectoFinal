import { TipoDeUsuario } from "src/app/Components/TipoDeUsuario/class/tipoDeUsuario";

export class ListarTiposDeUsuarioOut{
    
    private tiposDeUsuario: TipoDeUsuario[] = [];
   
    constructor(){
    }

    public get TiposDeUsuario(): TipoDeUsuario[] {
        return this.tiposDeUsuario;
    }
    public set TiposDeUsuario(value: TipoDeUsuario[]) {
        this.tiposDeUsuario = value;
    }
    
}