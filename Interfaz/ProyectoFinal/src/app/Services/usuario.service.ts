import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Components/Usuario/class/usuario';
import { AltaUsuarioIn } from '../Parametros/Entrada/AltaUsuarioIn';
import { HttpHeaders } from '@angular/common/http';
import { LoginIn } from 'src/app/Parametros/Entrada/LoginIn';
import { ListarUsuariosIn } from '../Parametros/Entrada/ListarUsuariosIn';
import { MetodosUrl } from './Metodos/MetodosUrl';
import { ListarUsuariosOut } from '../Parametros/Salida/ListarUsuariosOut';
import { ModificarUsuarioIn } from '../Parametros/Entrada/ModificarUsuarioIn';
import { BajaUsuarioIn } from '../Parametros/Entrada/BajaUsuarioIn';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Usuario/";
  constructor( private http:HttpClient ) {   }

  public Agregar(altaUsuarioIn:AltaUsuarioIn){
    return this.http.post(`${this.baseUrl+MetodosUrl.AltaUsuario}`,altaUsuarioIn);
  }

  public Baja(bajaUsuarioIn:BajaUsuarioIn){
    return this.http.post(`${this.baseUrl+MetodosUrl.BajaUsuario}`,bajaUsuarioIn);
  }

  public Modificar(modificarUsuarioIn:ModificarUsuarioIn){
    return this.http.post(`${this.baseUrl+MetodosUrl.ModificarUsuario}`,modificarUsuarioIn);
  }

  public Login(loginIn:LoginIn){
    return this.http.get(`${this.baseUrl+MetodosUrl.Login}?Mail=${loginIn.mail}&Contrasena=${loginIn.contrasena}`);
  }

  public Listar(listarUsuariosIn:ListarUsuariosIn){
    return this.http.get<ListarUsuariosOut>(`${this.baseUrl+MetodosUrl.ListarUsuarios}?TerminoDeBusqueda=${listarUsuariosIn.terminoDeBusqueda}`);
  }
}
