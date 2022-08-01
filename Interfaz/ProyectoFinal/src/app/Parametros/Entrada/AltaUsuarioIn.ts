import { Usuario } from '../../Components/Usuario/class/usuario';
export class AltaUsuarioIn {
    
    private Usuario: Usuario;

    constructor()
    {
        this.Usuario = new Usuario;
    }

    public get usuario(): Usuario {
        return this.Usuario;
    }
    public set usuario(value: Usuario) {
        this.Usuario = value;
    }

}
