import { Sobre } from "src/app/Components/Sobre/class/sobre";

export class AltaSobreIn{
    
    private sobre: Sobre;
    
    constructor(){
        this.sobre = new Sobre();
    }

    public get Sobre(): Sobre {
        return this.sobre;
    }
    public set Sobre(value: Sobre) {
        this.sobre = value;
    }

}