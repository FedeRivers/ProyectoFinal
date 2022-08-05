import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListarTiposDeUsuarioOut } from '../Parametros/Salida/ListarTiposDeUsuarioOut';
import { MetodosUrl } from './Metodos/MetodosUrl';


@Injectable({
  providedIn: 'root'
})
export class TipoDeUsuarioService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/TipoDeUsuario/";
  constructor( private http:HttpClient ) { }

  public ListarTipoDeUsuario()
  {
    return this.http.get<ListarTiposDeUsuarioOut>(`${this.baseUrl+MetodosUrl.ListarTiposDeUsuario}`);
  }

}
