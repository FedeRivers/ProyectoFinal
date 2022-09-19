export class DesactivarAlertaIn{

    private idAlerta!: number;

    constructor(){}

    public get IdAlerta(): number {
        return this.idAlerta;
    }
    public set IdAlerta(value: number) {
        this.idAlerta = value;
    }
}