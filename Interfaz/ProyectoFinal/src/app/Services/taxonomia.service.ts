import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { AltaTaxonomiaIn } from '../Parametros/Entrada/AltaTaxonomiaIn';
import { BajaTaxonomiaIn } from '../Parametros/Entrada/BajaTaxonomiaIn';
import { ListarTaxonomiaIn } from '../Parametros/Entrada/ListarTaxonomiaIn';
import { ModificarTaxonomiaIn } from '../Parametros/Entrada/ModificarTaxonomiaIn';
import { AltaTaxonomiaOut } from '../Parametros/Salida/AltaTaxonomiaOut';
import { BajaTaxonomiaOut } from '../Parametros/Salida/BajaTaxonomiaOut';
import { ListarTaxonomiaOut } from '../Parametros/Salida/ListarTaxonomiaOut';
import { ModificarTaxonomiaOut } from '../Parametros/Salida/ModificarTaxonomia';

@Injectable({
  providedIn: 'root'
})
export class TaxonomiaService {
  private baseUrl: string = "https://localhost/ProyectoFinal/api/Taxonomia/";
  
  constructor(private http:HttpClient) { }

  public Agregar(altaTaxonomiaIn:AltaTaxonomiaIn){
    return this.http.post<AltaTaxonomiaOut>(`${this.baseUrl+ MetodosUrl.Taxonomia.ALTA}`,altaTaxonomiaIn);
  }

  public Baja(bajaTaxonomiaIn:BajaTaxonomiaIn){
    return this.http.post<BajaTaxonomiaOut>(`${this.baseUrl+MetodosUrl.Taxonomia.BAJA}`,bajaTaxonomiaIn);
  }

  public Modificar(modificarTaxonomiaIn:ModificarTaxonomiaIn){
    return this.http.post<ModificarTaxonomiaOut>(`${this.baseUrl+MetodosUrl.Taxonomia.MODIFICAR}`,modificarTaxonomiaIn);
  }

  public Listar(listarMejoradorIn:ListarTaxonomiaIn){
    return this.http.get<ListarTaxonomiaOut>(`${this.baseUrl+MetodosUrl.Taxonomia.LISTAR}?TerminoDeBusqueda=${listarMejoradorIn.TerminoDeBusqueda}`);
  }
}
