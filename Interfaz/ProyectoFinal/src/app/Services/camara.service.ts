import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { ListarCamaraIn } from '../Parametros/Entrada/ListarCamaraIn';
import { ListarCamarasOut } from '../Parametros/Salida/ListarCamarasOut';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Camara/";
  constructor( private http:HttpClient ) { }

  public Listar(listarCamaraIn:ListarCamaraIn){
    return this.http.get<ListarCamarasOut>(`${this.baseUrl+MetodosUrl.Camara.LISTAR}`);
  } 
  
}
