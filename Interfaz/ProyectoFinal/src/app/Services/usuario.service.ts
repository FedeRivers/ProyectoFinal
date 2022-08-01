import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Components/Usuario/class/usuario';
import { AltaUsuarioIn } from '../Parametros/Entrada/AltaUsuarioIn';
import { HttpHeaders } from '@angular/common/http';
import { LoginIn } from 'src/app/Parametros/Entrada/LoginIn';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Usuario";
  constructor( private http:HttpClient ) {   }

  public Agregar(altaUsuarioIn:AltaUsuarioIn){
    return this.http.post(this.baseUrl,altaUsuarioIn);
  }

  public Login(loginIn:LoginIn){
    return this.http.get(`${this.baseUrl}?Mail=${loginIn.mail}&Contrasena=${loginIn.contrasena}`);
  }
}
