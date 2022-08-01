import { Mejorador } from "src/app/Components/Mejorador/class/mejorador";

export class BajaMejoradorIn {
    
    private IdMejorador!: Number;

    constructor(){}

    public get idMejorador(): Number {
        return this.IdMejorador;
    }
    public set idMejorador(value: Number) {
        this.IdMejorador = value;
    }

}