import { Alerta } from "src/app/Components/Alerta/alerta";
import { ParametroBaseOut } from "./ParametroBaseOut";

export class ListarAlertasOut extends ParametroBaseOut{
    
    private alertas: Alerta[];

    constructor()
    {
        super();
        this.alertas = [];
    }

    public get Alertas(): Alerta[] {
        return this.alertas;
    }
    public set Alertas(value: Alerta[]) {
        this.alertas = value;
    }
}