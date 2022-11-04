import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { AltaLoteIn } from '../Parametros/Entrada/AltaLoteIn';
import { BajaLoteIn } from '../Parametros/Entrada/BajaLoteIn';
import { ListarLotesIn } from '../Parametros/Entrada/ListarLotesIn';
import { ModificarLoteIn } from '../Parametros/Entrada/ModicarLoteIn';
import { ListarLotesOut } from '../Parametros/Salida/ListarLotesOut';
import { ExisteLoteIn } from '../Parametros/Entrada/ExisteLoteIn';
import { ExisteLoteOut } from '../Parametros/Salida/ExisteLoteOut';
import { ListarLotesParaDevolucionOut } from '../Parametros/Salida/ListarLotesParaDevolucionOut';
import { ListarLotesParaDevolucionIn } from '../Parametros/Entrada/ListarLotesParaDevolucionIn';
import { DevolverLotesOut } from '../Parametros/Salida/DevolverLotesOut';
import { DevolverLotesIn } from '../Parametros/Entrada/DevolverLotesIn';
import { BajaLoteOut } from '../Parametros/Salida/BajaLoteOut';

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
    return this.http.post<BajaLoteOut>(`${this.baseUrl+ MetodosUrl.Lote.BAJA}`,bajaLoteIn);
  }

  public Modificar(modificarLoteIn:ModificarLoteIn){
    return this.http.post(`${this.baseUrl+ MetodosUrl.Lote.MODIFICAR}`,modificarLoteIn);
  }

  public DevolverLotes(devolverLotesIn:DevolverLotesIn)
  {
    return this.http.post<DevolverLotesOut>(`${this.baseUrl+MetodosUrl.Lote.DEVOLVERLOTES}`,devolverLotesIn);
  }

  public Listar(listarLoteIn:ListarLotesIn){
    return this.http.post<ListarLotesOut>(`${this.baseUrl+ MetodosUrl.Lote.LISTAR}`,listarLoteIn);
  }

  public ListarLotesParaDevolucion(listarLotesParaDevolucionIn:ListarLotesParaDevolucionIn)
  {
    return this.http.get<ListarLotesParaDevolucionOut>(`${this.baseUrl+ MetodosUrl.Lote.LISTARLOTEPARADEVOLUCION}`);
  }

  public ExisteLote(existeLoteIn:ExisteLoteIn){
    return this.http.post<ExisteLoteOut>(`${this.baseUrl+ MetodosUrl.Lote.EXISTELOTE}`,existeLoteIn);
  }


}
