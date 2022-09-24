import { Sobre } from "src/app/Components/Sobre/class/sobre";

export class BuscarDuplicadosOut{
    
    private sobres: Sobre[];

    constructor(){
        this.sobres = [];
    }

    public get Sobres(): Sobre[] {
        return this.sobres;
    }
    public set Sobres(value: Sobre[]) {
        this.sobres = value;
    }
}