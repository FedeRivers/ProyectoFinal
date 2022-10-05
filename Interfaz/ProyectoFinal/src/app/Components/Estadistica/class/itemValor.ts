export class ItemValor{
    
    private value!: number ;
    private name!: string;

    constructor(){}

    public get Value(): number {
        return this.value;
    }
    public set Value(value: number) {
        this.value = value;
    }
    public get Name(): string {
        return this.name;
    }
    public set Name(value: string) {
        this.name = value;
    }
}