import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { ObtenerEstadisticasIn } from '../Parametros/Entrada/obtenerEstadisticasIn';
import { ObtenerEstadisticasOut } from '../Parametros/Salida/ObtenerEstadisticasOut';

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {
  
  private baseUrl: string = "https://localhost/ProyectoFinal/api/Estadistica/";

  constructor( private http:HttpClient ) { }

  public ObtenerEstadisticas(obtenerEstadisticasIn:ObtenerEstadisticasIn){
    return this.http.post<ObtenerEstadisticasOut>(`${this.baseUrl+MetodosUrl.Estadistica.OBTENERESTADISTICAS}`,obtenerEstadisticasIn);
  } 
}
