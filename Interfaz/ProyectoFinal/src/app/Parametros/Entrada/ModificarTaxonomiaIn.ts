import { Taxonomia } from '../../Components/Taxonomia/class/taxonomia';
export class ModificarTaxonomiaIn{
    
    private taxonomia: Taxonomia;

    constructor()
    {
        this.taxonomia = new Taxonomia();
    }

    public get Taxonomia(): Taxonomia {
        return this.taxonomia;
    }
    public set Taxonomia(value: Taxonomia) {
        this.taxonomia = value;
    }
    
}