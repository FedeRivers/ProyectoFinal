import { ParametroBaseOut } from "./ParametroBaseOut";

export class ExisteSemillaOut extends ParametroBaseOut{  

    private existeSemilla!: boolean;
    
    constructor()
    {
        super();
    }
    
    public get ExisteSemilla(): boolean {
        return this.existeSemilla;
    }
    public set ExisteSemilla(value: boolean) {
        this.existeSemilla = value;
    }
}