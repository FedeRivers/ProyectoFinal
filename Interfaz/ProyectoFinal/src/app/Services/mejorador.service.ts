import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AltaMejoradorIn } from '../Parametros/Entrada/AltaMejoradorIn';
import { BajaMejoradorIn } from '../Parametros/Entrada/BajaMejoradorIn';
import { ModificarMejoradorIn } from '../Parametros/Entrada/ModificarMejoradorIn';
import { ListarMejoradorIn } from '../Parametros/Entrada/ListarMejoradorIn';
import { ListarMejoradorOut } from '../Parametros/Salida/ListarMejoradorOut';
import { AltaMejoradorOut } from '../Parametros/Salida/AltaMejoradorOut';

@Injectable({
  providedIn: 'root'
})
export class MejoradorService {
  
  private metodosUrl:string[]=[
    "AltaMejorador",
    "BajaMejorador",
    "ModificarMejorador",
    "ListarMejoradores"
  ];

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Mejorador/";
  constructor( private http:HttpClient ) { }

  public Agregar(altaMejoradorIn:AltaMejoradorIn){
    return this.http.post<AltaMejoradorOut>(`${this.baseUrl+this.metodosUrl[0]}`,altaMejoradorIn);
  }

  public Baja(bajaMejoradorIn:BajaMejoradorIn){
    return this.http.post(`${this.baseUrl+this.metodosUrl[1]}`,bajaMejoradorIn);
  }

  public Modificar(modificarMejoradorIn:ModificarMejoradorIn){
    return this.http.post(`${this.baseUrl+this.metodosUrl[2]}`,modificarMejoradorIn);
  }

  public Listar(listarMejoradorIn:ListarMejoradorIn){
    return this.http.get<ListarMejoradorOut>(`${this.baseUrl+this.metodosUrl[3]}?TerminoDeBusqueda=${listarMejoradorIn.terminoDeBusqueda}`);
  }
}