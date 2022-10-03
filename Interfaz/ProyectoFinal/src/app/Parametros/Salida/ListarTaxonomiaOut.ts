import { Taxonomia } from '../../Components/Taxonomia/class/taxonomia';
import { ParametroBaseOut } from './ParametroBaseOut';
export class ListarTaxonomiaOut extends ParametroBaseOut{
    
    private taxonomias:Taxonomia[]= [] ;

    constructor()
    {
        super();
    }

    public get Taxonomias(): Taxonomia[] {
        return this.taxonomias;
    }
    public set Taxonomias(value: Taxonomia[] ) {
        this.taxonomias = value;
    }
    

}