import { Mejorador } from "src/app/Components/Mejorador/class/mejorador";

export class ListarMejoradorOut {
    
    private _mejoradores:Mejorador[]= [] ;

    constructor(){}

    public get Mejoradores(): Mejorador[] {
        return this._mejoradores;
    }
    public set Mejoradores(value: Mejorador[] ) {
        this._mejoradores = value;
    }

}