import { Semilla } from "src/app/Components/Semilla/class/semilla";

export class ListarSemillaOut{

    private semillas : Semilla[] = [] ;

    constructor(){}

    public get Semillas(): Semilla[] {
        return this.semillas;
    }
    public set Semillas(value: Semilla[] ) {
        this.semillas = value;
    }
    
}