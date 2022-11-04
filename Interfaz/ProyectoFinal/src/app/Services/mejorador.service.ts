import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AltaMejoradorIn } from '../Parametros/Entrada/AltaMejoradorIn';
import { BajaMejoradorIn } from '../Parametros/Entrada/BajaMejoradorIn';
import { ModificarMejoradorIn } from '../Parametros/Entrada/ModificarMejoradorIn';
import { ListarMejoradorIn } from '../Parametros/Entrada/ListarMejoradorIn';
import { ListarMejoradorOut } from '../Parametros/Salida/ListarMejoradorOut';
import { AltaMejoradorOut } from '../Parametros/Salida/AltaMejoradorOut';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { ModificarMejoradorOut } from '../Parametros/Salida/ModificarMejoradorOut';

@Injectable({
  providedIn: 'root'
})
export class MejoradorService {
 
  private baseUrl: string = "https://localhost/ProyectoFinal/api/Mejorador/";
  constructor( private http:HttpClient ) { }

  public Agregar(altaMejoradorIn:AltaMejoradorIn){
    return this.http.post<AltaMejoradorOut>(`${this.baseUrl+ MetodosUrl.Mejorador.ALTA}`,altaMejoradorIn);
  }

  public Baja(bajaMejoradorIn:BajaMejoradorIn){
    return this.http.post(`${this.baseUrl+MetodosUrl.Mejorador.BAJA}`,bajaMejoradorIn);
  }

  public Modificar(modificarMejoradorIn:ModificarMejoradorIn){
    return this.http.post<ModificarMejoradorOut>(`${this.baseUrl+MetodosUrl.Mejorador.MODIFICAR}`,modificarMejoradorIn);
  }

  public Listar(listarMejoradorIn:ListarMejoradorIn){
    return this.http.get<ListarMejoradorOut>(`${this.baseUrl+MetodosUrl.Mejorador.LISTAR}?TerminoDeBusqueda=${listarMejoradorIn.TerminoDeBusqueda}`);
  }
}