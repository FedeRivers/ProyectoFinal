import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { AltaSemillaIn } from '../Parametros/Entrada/AltaSemillaIn';
import { BajaSemillaIn } from '../Parametros/Entrada/BajaSemillaIn';
import { ExisteSemillaIn } from '../Parametros/Entrada/ExisteSemillaIn';
import { ListarSemillaIn } from '../Parametros/Entrada/ListarSemillaIn';
import { ModificarSemillaIn } from '../Parametros/Entrada/ModificarSemillaIn';
import { AltaSemillaOut } from '../Parametros/Salida/AltaSemillaOut';
import { BajaSemillaOut } from '../Parametros/Salida/BajaSemillaOut';
import { ExisteSemillaOut } from '../Parametros/Salida/ExisteSemillaOut';
import { ListarSemillaOut } from '../Parametros/Salida/ListarSemillaOut';

@Injectable({
  providedIn: 'root'
})
export class SemillaService {
  
  private baseUrl: string = "https://localhost/ProyectoFinal/api/Semilla/";
  
  constructor( private http:HttpClient ) { }

  public Agregar(altaSemillaIn:AltaSemillaIn){
    return this.http.post<AltaSemillaOut>(`${this.baseUrl+ MetodosUrl.Semilla.ALTA}`,altaSemillaIn);
  }

  public Baja(bajaSemillaIn:BajaSemillaIn){
    return this.http.post<BajaSemillaOut>(`${this.baseUrl+MetodosUrl.Semilla.BAJA}`,bajaSemillaIn);
  }

  public Modificar(modificarSemillaIn:ModificarSemillaIn){
    return this.http.post(`${this.baseUrl+MetodosUrl.Semilla.MODIFICAR}`,modificarSemillaIn);
  }

  public Listar(listarSemillaIn:ListarSemillaIn){
    return this.http.get<ListarSemillaOut>(`${this.baseUrl+MetodosUrl.Semilla.LISTAR}?TerminoDeBusqueda=${listarSemillaIn.terminoDeBusqueda}`);
  }

  public ExisteSemilla(existeSemillaIn:ExisteSemillaIn)
  {
    return this.http.post<ExisteSemillaOut>(`${this.baseUrl+ MetodosUrl.Semilla.EXISTESEMILLA}`,existeSemillaIn);
  }
}
