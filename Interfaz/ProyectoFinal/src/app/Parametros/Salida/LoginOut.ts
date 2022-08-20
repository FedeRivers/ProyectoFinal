import { Usuario } from "src/app/Components/Usuario/class/usuario";

export class LoginOut{
    
    private usuario: Usuario;
    
    constructor(){
        this.usuario = new Usuario();
    }

    public get Usuario(): Usuario {
        return this.usuario;
    }
    public set Usuario(value: Usuario) {
        this.usuario = value;
    }
}