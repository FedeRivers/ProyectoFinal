import { HttpStatusCodeResult } from "./HttpStatusCodeResultOut";

export class ParametroBaseOut{

    private status: HttpStatusCodeResult;
    
    constructor()
    {
        this.status = new HttpStatusCodeResult();
    }
    
    public get Status(): HttpStatusCodeResult {
        return this.status;
    }
    public set Status(value: HttpStatusCodeResult) {
        this.status = value;
    }
}