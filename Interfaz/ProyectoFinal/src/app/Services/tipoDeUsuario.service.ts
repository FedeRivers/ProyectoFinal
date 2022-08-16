import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { ListarTiposDeUsuarioOut } from '../Parametros/Salida/ListarTiposDeUsuarioOut';
import { ListarTipoDeUsuarioIn } from '../Parametros/Entrada/ListarTipoDeUsuarioIn';
import { ListarModulosPorTipoDeUsuarioOut } from '../Parametros/Salida/ListarModulosPorTipoDeUsuarioOut';
import { ListarModulosPorTipoDeUsuarioIn } from 'src/app/Parametros/Entrada/ListarModulosPorTipoDeUsuarioIn';
import { AgregarModuloIn } from '../Parametros/Entrada/AgregarModuloIn';
import { EliminarModuloIn } from '../Parametros/Entrada/EliminarModuloIn';




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

  public ListarModulosPorTipoDeUsuario(listarModulosPorTipoDeUsuario:ListarModulosPorTipoDeUsuarioIn)
  {
    return this.http.get<ListarModulosPorTipoDeUsuarioOut>(`${this.baseUrl+MetodosUrl.TiposDeUsuario.LISTARMODULOSPORTIPODEUSUARIO}?IdTipoDeUsuario=${listarModulosPorTipoDeUsuario.IdTipoDeUsuario}`);
  }

  public AgregarModulo(agregarModuloIn:AgregarModuloIn)
  {
    return this.http.post(`${this.baseUrl+MetodosUrl.TiposDeUsuario.AGREGARMODULO}`,agregarModuloIn);
  }

  public EliminarModulo(eliminarModuloIn:EliminarModuloIn)
  {
    return this.http.post(`${this.baseUrl+MetodosUrl.TiposDeUsuario.ELIMINARMODULO}`,eliminarModuloIn);
  }

  

  

}
