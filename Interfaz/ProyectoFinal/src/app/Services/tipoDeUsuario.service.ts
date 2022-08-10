import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { ListarTiposDeUsuarioOut } from '../Parametros/Salida/ListarTiposDeUsuarioOut';
import { ListarTipoDeUsuarioIn } from '../Parametros/Entrada/ListarTipoDeUsuarioIn';



@Injectable({
  providedIn: 'root'
})
export class TipoDeUsuarioService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/TipoDeUsuario/";
  constructor( private http:HttpClient ) { }

  public ListarTipoDeUsuario(listarTipoDeUsuarioIn:ListarTipoDeUsuarioIn)
  {
    return this.http.get<ListarTiposDeUsuarioOut>(`${this.baseUrl+MetodosUrl.TiposDeUsuario.LISTAR}`);
  }

}
