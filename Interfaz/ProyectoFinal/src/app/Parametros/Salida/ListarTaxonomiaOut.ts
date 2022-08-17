import { Taxonomia } from '../../Components/Taxonomia/class/taxonomia';
export class ListarTaxonomiaOut {
    
    private taxonomias:Taxonomia[]= [] ;

    constructor(){}

    public get Taxonomias(): Taxonomia[] {
        return this.taxonomias;
    }
    public set Taxonomias(value: Taxonomia[] ) {
        this.taxonomias = value;
    }
    

}