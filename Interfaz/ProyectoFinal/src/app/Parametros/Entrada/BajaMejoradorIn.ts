import { Mejorador } from "src/app/Mejoradores/class/mejorador";

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