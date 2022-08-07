import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AltaMejoradorIn } from '../Parametros/Entrada/AltaMejoradorIn';
import { BajaMejoradorIn } from '../Parametros/Entrada/BajaMejoradorIn';
import { ModificarMejoradorIn } from '../Parametros/Entrada/ModificarMejoradorIn';
import { ListarMejoradorIn } from '../Parametros/Entrada/ListarMejoradorIn';
import { ListarMejoradorOut } from '../Parametros/Salida/ListarMejoradorOut';
import { AltaMejoradorOut } from '../Parametros/Salida/AltaMejoradorOut';
import { MetodosUrl } from './Metodos/metodosUrl';

@Injectable({
  providedIn: 'root'
})
export class MejoradorService {
 
  private baseUrl: string = "https://localhost/ProyectoFinal/api/Mejorador/";
  constructor( private http:HttpClient ) { }

  public Agregar(altaMejoradorIn:AltaMejoradorIn){
    return this.http.post<AltaMejoradorOut>(`${this.baseUrl+MetodosUrl.AltaMejorador}`,altaMejoradorIn);
  }

  public Baja(bajaMejoradorIn:BajaMejoradorIn){
    return this.http.post(`${this.baseUrl+MetodosUrl.BajaMejorador}`,bajaMejoradorIn);
  }

  public Modificar(modificarMejoradorIn:ModificarMejoradorIn){
    return this.http.post(`${this.baseUrl+MetodosUrl.ModificarMejorador}`,modificarMejoradorIn);
  }

  public Listar(listarMejoradorIn:ListarMejoradorIn){
    return this.http.get<ListarMejoradorOut>(`${this.baseUrl+MetodosUrl.ListarMejoradores}?TerminoDeBusqueda=${listarMejoradorIn.terminoDeBusqueda}`);
  }
}