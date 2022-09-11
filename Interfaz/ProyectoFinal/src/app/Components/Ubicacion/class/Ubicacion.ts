import { Camara } from "../../Camara/class/Camara";

export class Ubicacion{
    
    private fila!: number;
    private columna!: number;
    private camara: Camara;

    constructor(){
        this.camara = new Camara();
    }

    public get Fila(): number {
        return this.fila;
    }
    public set Fila(value: number) {
        this.fila = value;
    }

    public get Columna(): number {
        return this.columna;
    }
    public set Columna(value: number) {
        this.columna = value;
    }

    public get Camara(): Camara {
        return this.camara;
    }
    public set Camara(value: Camara) {
        this.camara = value;
    }
}