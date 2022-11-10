export class Taxonomia{
    private idTaxonomia!: number;
    private nombre!: string;

    constructor(){}

    public get IdTaxonomia(): number {
        return this.idTaxonomia;
    }
    public set IdTaxonomia(value: number) {
        this.idTaxonomia = value;
    }
    public get Nombre(): string {
        return this.nombre;
    }
    public set Nombre(value: string) {
        this.nombre = value.trim();
    }
}