import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AltaMejoradorIn } from '../Parametros/Entrada/AltaMejoradorIn';
import { BajaMejoradorIn } from '../Parametros/Entrada/BajaMejoradorIn';
import { ModificarMejoradorIn } from '../Parametros/Entrada/ModificarMejoradorIn';

@Injectable({
  providedIn: 'root'
})
export class MejoradorService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Mejorador";
  constructor( private http:HttpClient ) {   }

  public Agregar(altaMejoradorIn:AltaMejoradorIn){
    return this.http.post(this.baseUrl,altaMejoradorIn);
  }

  public Baja(bajaMejoradorIn:BajaMejoradorIn){
    return this.http.post(this.baseUrl,bajaMejoradorIn);
  }

  public Modificar(modificarMejoradorIn:ModificarMejoradorIn){
    return this.http.put(this.baseUrl,modificarMejoradorIn);
  }
}