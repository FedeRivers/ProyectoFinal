export class ModificarSobreOut{
    
    private camaraLlena: boolean;
    

    constructor()
    {
        this.camaraLlena = false;
    }

    public get CamaraLlena(): boolean {
        return this.camaraLlena;
    }
    public set CamaraLlena(value: boolean) {
        this.camaraLlena = value;
    }
}