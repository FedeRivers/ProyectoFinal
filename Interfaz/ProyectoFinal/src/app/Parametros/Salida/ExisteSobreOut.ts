import { ParametroBaseOut } from "./ParametroBaseOut";

export class ExisteSobreOut extends ParametroBaseOut{

    private existeSobre!: boolean;

    constructor()
    {
        super();
    }

    public get ExisteSobre(): boolean {
        return this.existeSobre;
    }
    public set ExisteSobre(value: boolean) {
        this.existeSobre = value;
    }
}