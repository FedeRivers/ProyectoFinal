import { ParametroBaseOut } from "./ParametroBaseOut";

export class ModificarSobreOut extends ParametroBaseOut{
    
    private camaraLlena: boolean;
    

    constructor()
    {
        super();
        this.camaraLlena = false;
    }

    public get CamaraLlena(): boolean {
        return this.camaraLlena;
    }
    public set CamaraLlena(value: boolean) {
        this.camaraLlena = value;
    }
}