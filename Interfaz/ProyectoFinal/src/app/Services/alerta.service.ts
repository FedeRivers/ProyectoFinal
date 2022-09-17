import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { ListarAlertasIn } from '../Parametros/Entrada/ListarAlertasIn';
import { ListarAlertasOut } from '../Parametros/Salida/ListarAlertasOut';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Alerta/";

  constructor( private http:HttpClient ) { }

  public Listar(listarAlertasIn:ListarAlertasIn){
    return this.http.get<ListarAlertasOut>(`${this.baseUrl+MetodosUrl.Alerta.LISTAR}?IdTipoDeUsuario=${listarAlertasIn.IdTipoDeUsuario}`);
  } 
}
