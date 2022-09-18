import { Sobre } from "src/app/Components/Sobre/class/sobre";
import { ParametroBaseIn } from './ParametroBaseIn';

export class ModificarSobreIn extends ParametroBaseIn{
    
    private sobre: Sobre;
    
    constructor(){
        super();
        this.sobre = new Sobre();
    }

    public get Sobre(): Sobre {
        return this.sobre;
    }
    public set Sobre(value: Sobre) {
        this.sobre = value;
    }
}