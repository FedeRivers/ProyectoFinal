import { Mejorador } from "src/app/Components/Mejorador/class/mejorador";

export class AltaMejoradorIn {
    
    private mejorador: Mejorador;

    constructor(){
        this.mejorador = new Mejorador();
    }

    public get Mejorador(): Mejorador {
        return this.mejorador;
    }
    public set Mejorador(value: Mejorador) {
        this.mejorador = value;
    }

}