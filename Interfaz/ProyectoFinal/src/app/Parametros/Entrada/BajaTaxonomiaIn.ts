import { Taxonomia } from '../../Components/Taxonomia/class/taxonomia';
export class BajaTaxonomiaIn{
    
    private idTaxonomia!: number;

    constructor(){}

    public get IdTaxonomia(): number {
        return this.idTaxonomia;
    }
    public set IdTaxonomia(value: number) {
        this.idTaxonomia = value;
    }
    
}