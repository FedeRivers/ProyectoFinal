import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../class/usuario';
import { AltaUsuarioIn } from '../../Parametros/Entrada/AltaUsuarioIn';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Usuario";
  constructor( private http:HttpClient ) {   }

  public Agregar(altaUsuarioIn:AltaUsuarioIn){
    return this.http.post(this.baseUrl,altaUsuarioIn);
  }

}
