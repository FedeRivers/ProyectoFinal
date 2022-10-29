export class BajaSemillaOut
{
    private semillaEliminada!: boolean;

    constructor(){}

    public get SemillaEliminada(): boolean {
        return this.semillaEliminada;
    }
    public set SemillaEliminada(value: boolean) {
        this.semillaEliminada = value;
    }
}