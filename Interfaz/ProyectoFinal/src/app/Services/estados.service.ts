import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { ListarEstadosIn } from '../Parametros/Entrada/ListarEstadosIn';
import { ListarEstadosOut } from '../Parametros/Salida/ListarEstadosOut';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Estado/";
  constructor( private http:HttpClient ) { }


  public Listar(listarEstadosIn:ListarEstadosIn){
    return this.http.get<ListarEstadosOut>(`${this.baseUrl+MetodosUrl.Estado.LISTAR}`);
  }
}
