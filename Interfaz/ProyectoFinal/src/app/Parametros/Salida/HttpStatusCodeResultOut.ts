export class HttpStatusCodeResult{
    private statusCode!: number;
    private statusDescription!: string;

    constructor(){}

    public get StatusCode(): number {
        return this.statusCode;
    }
    public set StatusCode(value: number) {
        this.statusCode = value;
    }
    public get StatusDescription(): string {
        return this.statusDescription;
    }
    public set StatusDescription(value: string) {
        this.statusDescription = value;
    }

}