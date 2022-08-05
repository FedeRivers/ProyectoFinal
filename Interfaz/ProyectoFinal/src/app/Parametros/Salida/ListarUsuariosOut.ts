import { Usuario } from "src/app/Components/Usuario/class/usuario";

export class ListarUsuariosOut{

    private usuarios: Usuario[] = [];

    constructor(){}

    public get Usuarios(): Usuario[] {
        return this.usuarios;
    }
    public set Usuarios(value: Usuario[]) {
        this.usuarios = value;
    }
}