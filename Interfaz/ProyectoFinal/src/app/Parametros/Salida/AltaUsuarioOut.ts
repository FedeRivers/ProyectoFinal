import { ParametroBaseOut } from "./ParametroBaseOut";

export class AltaUsuarioOut extends ParametroBaseOut{
    
    private existeMail!: boolean;
    private existeCedula!: boolean;

    constructor()
    {
        super();
    }

    public get ExisteMail(): boolean {
        return this.existeMail;
    }
    public set ExisteMail(value: boolean) {
        this.existeMail = value;
    }

    public get ExisteCedula(): boolean {
        return this.existeCedula;
    }
    public set ExisteCedula(value: boolean) {
        this.existeCedula = value;
    }
}