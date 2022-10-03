import { Sobre } from "src/app/Components/Sobre/class/sobre";
import { ParametroBaseOut } from "./ParametroBaseOut";

export class ListarSobresOut extends ParametroBaseOut{
    
    private sobres: Sobre[] = [];

    constructor()
    {
        super();
    }
    
    public get Sobres(): Sobre[] {
        return this.sobres;
    }
    public set Sobres(value: Sobre[]) {
        this.sobres = value;
    }
}