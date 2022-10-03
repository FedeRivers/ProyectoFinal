import { TipoDeUsuario } from "src/app/Components/TipoDeUsuario/class/tipoDeUsuario";
import { ParametroBaseOut } from "./ParametroBaseOut";

export class ListarTiposDeUsuarioOut extends ParametroBaseOut{
    
    private tiposDeUsuario: TipoDeUsuario[] = [];
   
    constructor()
    {
        super();
    }

    public get TiposDeUsuario(): TipoDeUsuario[] {
        return this.tiposDeUsuario;
    }
    public set TiposDeUsuario(value: TipoDeUsuario[]) {
        this.tiposDeUsuario = value;
    }
    
}