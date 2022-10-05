export class ItemColor{
    
    private value!: string ;
    private name!: string;

    constructor(){}

    public get Value(): string {
        return this.value;
    }
    public set Value(value: string ) {
        this.value = value;
    }

    public get Name(): string {
        return this.name;
    }
    public set Name(value: string) {
        this.name = value;
    }
}