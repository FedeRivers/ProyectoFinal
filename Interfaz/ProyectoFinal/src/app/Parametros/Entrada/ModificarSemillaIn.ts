import { Semilla } from "src/app/Components/Semilla/class/semilla";

export class ModificarSemillaIn{
   
    private semilla: Semilla;
    
    constructor(){
        this.semilla = new Semilla();
    }

    public get Semilla(): Semilla {
        return this.semilla;
    }
    public set Semilla(value: Semilla) {
        this.semilla = value;
    }

}