import { Sobre } from "src/app/Components/Sobre/class/sobre";

export class ListarSobresOut{
    
    private sobres: Sobre[] = [];

    constructor(){}
    
    public get Sobres(): Sobre[] {
        return this.sobres;
    }
    public set Sobres(value: Sobre[]) {
        this.sobres = value;
    }
}