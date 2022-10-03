import { Semilla } from "src/app/Components/Semilla/class/semilla";
import { ParametroBaseOut } from "./ParametroBaseOut";

export class ListarSemillaOut extends ParametroBaseOut{

    private semillas : Semilla[] = [] ;

    constructor()
    {
        super();
    }

    public get Semillas(): Semilla[] {
        return this.semillas;
    }
    public set Semillas(value: Semilla[] ) {
        this.semillas = value;
    }
    
}