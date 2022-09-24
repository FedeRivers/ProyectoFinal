import { Semilla } from "src/app/Components/Semilla/class/semilla";

export class BuscarDuplicadosIn{
    
    private nombresDeSemillas: Semilla[];

    constructor(){
        this.nombresDeSemillas = [];
    }

    public get NombresDeSemillas(): Semilla[] {
        return this.nombresDeSemillas;
    }
    public set NombresDeSemillas(value: Semilla[]) {
        this.nombresDeSemillas = value;
    }
   
}