import { ParametroBaseOut } from "./ParametroBaseOut";

export class ExisteLoteOut extends ParametroBaseOut{  

    private existeLote!: boolean;
    
    constructor()
    {
        super();
    }
    
    public get ExisteLote(): boolean {
        return this.existeLote;
    }
    public set ExisteLote(value: boolean) {
        this.existeLote = value;
    }
}