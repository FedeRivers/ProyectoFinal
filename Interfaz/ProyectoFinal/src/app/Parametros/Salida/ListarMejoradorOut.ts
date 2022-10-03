import { Mejorador } from "src/app/Components/Mejorador/class/mejorador";
import { ParametroBaseOut } from "./ParametroBaseOut";

export class ListarMejoradorOut extends ParametroBaseOut{
    
    private mejoradores:Mejorador[]= [] ;


    constructor()
    {
        super();
    }

    public get Mejoradores(): Mejorador[] {
        return this.mejoradores;
    }
    public set Mejoradores(value: Mejorador[] ) {
        this.mejoradores = value;
    }
    

}