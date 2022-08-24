import { Mejorador } from "src/app/Components/Mejorador/class/mejorador";

export class ListarMejoradorOut {
    
    private mejoradores:Mejorador[]= [] ;


    constructor(){}

    public get Mejoradores(): Mejorador[] {
        return this.mejoradores;
    }
    public set Mejoradores(value: Mejorador[] ) {
        this.mejoradores = value;
    }
    

}