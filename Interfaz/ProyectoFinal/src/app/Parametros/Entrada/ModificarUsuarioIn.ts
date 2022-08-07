import { Usuario } from '../../Components/Usuario/class/usuario';

export class ModificarUsuarioIn{
    private Usuario!: Usuario;
   
    constructor(){}

    public get usuario(): Usuario {
        return this.Usuario;
    }
    public set usuario(value: Usuario) {
        this.Usuario = value;
    }


}