import { Usuario } from "src/app/Components/Usuario/class/usuario";
import { ParametroBaseOut } from "./ParametroBaseOut";

export class LoginOut extends ParametroBaseOut{
    
    private usuario: Usuario;
    
    constructor(){
        super();
        this.usuario = new Usuario();
    }

    public get Usuario(): Usuario {
        return this.usuario;
    }
    public set Usuario(value: Usuario) {
        this.usuario = value;
    }
}