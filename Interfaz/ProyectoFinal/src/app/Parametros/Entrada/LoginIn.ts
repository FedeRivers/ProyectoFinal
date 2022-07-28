export class LoginIn {
    
    private Mail: string;
    private Contrasena : string;

    constructor()
    {
        this.Mail = "";
        this.Contrasena = "";
    }

    public get mail(): string {
        return this.Mail;
    }
    public set mail(value: string) {
        this.Mail = value;
    }

    public get contrasena(): string {
        return this.Contrasena;
    }
    public set contrasena(value: string) {
        this.Contrasena = value;
    }
}
