export class ParametroBaseOut {
    
    private mensajeExito: string = '';
    private mensajeError: string = '';
    constructor(){}

    public get MensajeExito(): string {
        return this.mensajeExito;
    }
    public set MensajeExito(value: string) {
        this.mensajeExito = value;
    }

    public get MensajeError(): string {
        return this.mensajeError;
    }
    public set MensajeError(value: string) {
        this.mensajeError = value;
    }

}