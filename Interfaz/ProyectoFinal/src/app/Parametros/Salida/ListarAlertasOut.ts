import { Alerta } from "src/app/Components/Alerta/alerta";

export class ListarAlertasOut{
    
    private alertas: Alerta[];

    constructor()
    {
        this.alertas = [];
    }

    public get Alertas(): Alerta[] {
        return this.alertas;
    }
    public set Alertas(value: Alerta[]) {
        this.alertas = value;
    }
}