import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AltaUsuarioIn } from '../Parametros/Entrada/AltaUsuarioIn';
import { LoginIn } from 'src/app/Parametros/Entrada/LoginIn';
import { ListarUsuariosIn } from '../Parametros/Entrada/ListarUsuariosIn';
import { ListarUsuariosOut } from '../Parametros/Salida/ListarUsuariosOut';
import { ModificarUsuarioIn } from '../Parametros/Entrada/ModificarUsuarioIn';
import { BajaUsuarioIn } from '../Parametros/Entrada/BajaUsuarioIn';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { LoginOut } from '../Parametros/Salida/LoginOut';
import { AltaUsuarioOut } from '../Parametros/Salida/AltaUsuarioOut';
import { ModificarUsuarioOut } from '../Parametros/Salida/ModificarUsuarioOut';
import { ResetearContrasenaIn } from '../Parametros/Entrada/ResetearContrasenaIn';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Usuario/";
  constructor( private http:HttpClient ) {   }

  public Agregar(altaUsuarioIn:AltaUsuarioIn){
    return this.http.post<AltaUsuarioOut>(`${this.baseUrl+MetodosUrl.Usuario.ALTA}`,altaUsuarioIn);
  }

  public Baja(bajaUsuarioIn:BajaUsuarioIn){
    return this.http.post(`${this.baseUrl+MetodosUrl.Usuario.BAJA}`,bajaUsuarioIn);
  }

  public Modificar(modificarUsuarioIn:ModificarUsuarioIn){
    return this.http.post<ModificarUsuarioOut>(`${this.baseUrl+MetodosUrl.Usuario.MODIFICAR}`,modificarUsuarioIn);
  }

  public Login(loginIn:LoginIn){
    return this.http.get<LoginOut>(`${this.baseUrl+MetodosUrl.Usuario.LOGIN}?Mail=${loginIn.mail}&Contrasena=${loginIn.contrasena}`);
  }

  public Listar(listarUsuariosIn:ListarUsuariosIn){
    return this.http.get<ListarUsuariosOut>(`${this.baseUrl+MetodosUrl.Usuario.LISTAR}?TerminoDeBusqueda=${listarUsuariosIn.TerminoDeBusqueda}`);
  }

  public ResetearContrasena(resetearContrasenaIn:ResetearContrasenaIn)
  {
    return this.http.post(`${this.baseUrl+MetodosUrl.Usuario.RESETEARCONTRASENA}`,resetearContrasenaIn);
  }

}
