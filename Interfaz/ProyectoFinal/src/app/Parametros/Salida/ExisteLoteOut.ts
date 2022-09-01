
export class ExisteLoteOut{  

    private existeLote!: boolean;
    
    constructor(){ }
    
    public get ExisteLote(): boolean {
        return this.existeLote;
    }
    public set ExisteLote(value: boolean) {
        this.existeLote = value;
    }
}