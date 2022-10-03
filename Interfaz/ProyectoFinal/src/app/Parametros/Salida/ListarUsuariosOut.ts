import { Usuario } from "src/app/Components/Usuario/class/usuario";
import { ParametroBaseOut } from "./ParametroBaseOut";

export class ListarUsuariosOut extends ParametroBaseOut{

    private usuarios: Usuario[] = [];

    constructor()
    {
        super();
    }

    public get Usuarios(): Usuario[] {
        return this.usuarios;
    }
    public set Usuarios(value: Usuario[]) {
        this.usuarios = value;
    }
}