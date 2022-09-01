import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { AltaSobreIn } from '../Parametros/Entrada/AltaSobreIn';
import { BajaSobreIn } from '../Parametros/Entrada/BajaSobre';
import { ExisteSobreIn } from '../Parametros/Entrada/ExisteSobreIn';
import { ListarSobreIn } from '../Parametros/Entrada/ListarSobreIn';
import { ModificarSobreIn } from '../Parametros/Entrada/ModificarSobre';
import { ExisteSobreOut } from '../Parametros/Salida/ExisteSobreOut';
import { ListarSobresOut } from '../Parametros/Salida/ListarSobresOut';

@Injectable({
  providedIn: 'root'
})
export class SobreService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Sobre/";
  
  constructor( private http:HttpClient ) { }

  public Agregar(altaSobreIn:AltaSobreIn){
    return this.http.post(`${this.baseUrl+ MetodosUrl.Sobre.ALTA}`,altaSobreIn);
  }

  public Baja(bajaSobreIn:BajaSobreIn){
    return this.http.post(`${this.baseUrl+MetodosUrl.Sobre.BAJA}`,bajaSobreIn);
  }

  public Modificar(modificarSobreIn:ModificarSobreIn){
    return this.http.post(`${this.baseUrl+MetodosUrl.Sobre.MODIFICAR}`,modificarSobreIn);
  }

  public Listar(listarSobreIn:ListarSobreIn){
    return this.http.get<ListarSobresOut>(`${this.baseUrl+MetodosUrl.Sobre.LISTAR}?TerminoDeBusqueda=${listarSobreIn.terminoDeBusqueda}`);
  }

  public ExisteSobre(existeSobreIn:ExisteSobreIn){
    return this.http.get<ExisteSobreOut>(`${this.baseUrl+ MetodosUrl.Sobre.EXISTESOBRE}?Sobre=${existeSobreIn.Sobre}`)
  }
}
