import { Usuario } from '../../Components/Usuario/class/usuario';
export class ResetearContrasenaIn
{
    private usuario: Usuario;

    constructor()
    {
        this.usuario = new Usuario();
    }

    public get Usuario(): Usuario {
        return this.usuario;
    }
    public set Usuario(value: Usuario) {
        this.usuario = value;
    }
}