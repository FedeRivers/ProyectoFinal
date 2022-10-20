import { ParametroBaseOut } from "./ParametroBaseOut";

export class AltaMejoradorOut extends ParametroBaseOut{

    private existeMail!: boolean;

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
}