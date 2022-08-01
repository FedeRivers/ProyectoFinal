import { Mejorador } from "src/app/Components/Mejorador/class/mejorador";

export class ModificarMejoradorIn {
    
    private Mejorador!: Mejorador;

    constructor(){}

    public get mejorador(): Mejorador {
        return this.Mejorador;
    }
    public set mejorador(value: Mejorador) {
        this.Mejorador = value;
    }

}