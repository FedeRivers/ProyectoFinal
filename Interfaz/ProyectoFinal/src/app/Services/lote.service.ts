import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { AltaLoteIn } from '../Parametros/Entrada/AltaLoteIn';
import { BajaLoteIn } from '../Parametros/Entrada/BajaLoteIn';
import { ListarLotesIn } from '../Parametros/Entrada/ListarLotesIn';
import { ModificarLoteIn } from '../Parametros/Entrada/ModicarLoteIn';
import { ListarLotesOut } from '../Parametros/Salida/ListarLotesOut';

@Injectable({
  providedIn: 'root'
})
export class LoteService {
  
  private baseUrl: string = "https://localhost/ProyectoFinal/api/Lote/";
  
  constructor(private http:HttpClient) { }

  public Agregar(altaLoteIn:AltaLoteIn){
    return this.http.post(`${this.baseUrl+ MetodosUrl.Lote.ALTA}`,altaLoteIn);
  }

  public Baja(bajaLoteIn:BajaLoteIn){
    return this.http.post(`${this.baseUrl+ MetodosUrl.Lote.BAJA}`,bajaLoteIn);
  }

  public Modificar(modificarLoteIn:ModificarLoteIn){
    return this.http.post(`${this.baseUrl+ MetodosUrl.Lote.MODIFICAR}`,modificarLoteIn);
  }

  public Listar(listarLoteIn:ListarLotesIn){
    return this.http.get<ListarLotesOut>(`${this.baseUrl+ MetodosUrl.Lote.LISTAR}?TerminoDeBusqueda=${listarLoteIn.terminoDeBusqueda}`);
  }
}
