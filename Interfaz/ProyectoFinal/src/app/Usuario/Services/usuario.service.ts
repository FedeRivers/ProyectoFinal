import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../class/usuario';
import { AltaUsuarioIn } from '../../Parametros/Entrada/AltaUsuarioIn';
import { HttpHeaders } from '@angular/common/http';

/*export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Accept': ''
    //'Accept-Encoding': 'gzip,deflate,br',
    //'Connection': 'keep-alive'
    //Authorization: 'my-auth-token'
  })
};*/


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private baseUrl: string = "https://localhost/ProyectoFinal/api/Usuario";
  //private baseUrl: string = "https://localhost/ProyectoFinal/api/values";
  constructor( private http:HttpClient ) {   }
  

  public Agregar(altaUsuarioIn:AltaUsuarioIn){
    return this.http.post(this.baseUrl,altaUsuarioIn);
    //return this.http.get(this.baseUrl);
  }

}
