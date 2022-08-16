import { Modulo } from 'src/app/Components/Modulo/class/modulo';
import { TipoDeUsuario } from '../../Components/TipoDeUsuario/class/tipoDeUsuario';

export class AgregarModuloIn{
    
    private tipoDeUsuario: TipoDeUsuario;
    private modulo: Modulo;

    constructor()
    {
        this.tipoDeUsuario = new TipoDeUsuario();
        this.modulo = new Modulo();
    }

    public get TipoDeUsuario(): TipoDeUsuario {
        return this.tipoDeUsuario;
    }
    public set TipoDeUsuario(value: TipoDeUsuario) {
        this.tipoDeUsuario = value;
    }
    public get Modulo(): Modulo {
        return this.modulo;
    }
    public set Modulo(value: Modulo) {
        this.modulo = value;
    }

}