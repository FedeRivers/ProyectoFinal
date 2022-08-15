import { TipoDeUsuario } from '../../Components/TipoDeUsuario/class/tipoDeUsuario';

export class ModificarTipoDeUsuarioIn{
    
    private tipoDeUsuario: TipoDeUsuario;

    constructor()
    {
        this.tipoDeUsuario = new TipoDeUsuario();
    }

    public get TipoDeUsuario(): TipoDeUsuario {
        return this.tipoDeUsuario;
    }
    public set TipoDeUsuario(value: TipoDeUsuario) {
        this.tipoDeUsuario = value;
    }

}