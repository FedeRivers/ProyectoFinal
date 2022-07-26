import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetodosUrl } from '../Components/Constantes/constantes';
import { AltaSobreIn } from '../Parametros/Entrada/AltaSobreIn';
import { BajaSobreIn } from '../Parametros/Entrada/BajaSobre';
import { BuscarDuplicadosIn } from '../Parametros/Entrada/BuscarDuplicadosIn';
import { ExisteSobreIn } from '../Parametros/Entrada/ExisteSobreIn';
import { ListarSobreIn } from '../Parametros/Entrada/ListarSobreIn';
import { ModificarSobreIn } from '../Parametros/Entrada/ModificarSobre';
import { BuscarDuplicadosOut } from '../Parametros/Salida/BuscarDuplicadosOut';
import { ExisteSobreOut } from '../Parametros/Salida/ExisteSobreOut';
import { ListarSobresOut } from '../Parametros/Salida/ListarSobresOut';
import { ModificarSobreOut } from '../Parametros/Salida/ModificarSobreOut';
import { ExportarExcelIn } from '../Parametros/Entrada/ExportarExcelIn';
import { ExportarExcelOut } from '../Parametros/Salida/ExportarExcelOut';
import { ListarSobresParaDevolucionOut } from '../Parametros/Salida/ListarSobresParaDevolucionOut';
import { ListarSobresParaDevolucionIn } from '../Parametros/Entrada/ListarSobresParaDevolucionIn';
import { DevolverSobresIn } from '../Parametros/Entrada/DevolverSobresIn';
import { DevolverSobresOut } from '../Parametros/Salida/DevolverSobresOut';

@Injectable({
  providedIn: 'root'
})
export class SobreService {

  private baseUrl: string = "https://localhost/ProyectoFinal/api/Sobre/";
  
  constructor( private http:HttpClient ) { }

  public Agregar(altaSobreIn:AltaSobreIn)
  {
    return this.http.post(`${this.baseUrl+ MetodosUrl.Sobre.ALTA}`,altaSobreIn);
  }

  public Baja(bajaSobreIn:BajaSobreIn)
  {
    return this.http.post(`${this.baseUrl+MetodosUrl.Sobre.BAJA}`,bajaSobreIn);
  }

  public Modificar(modificarSobreIn:ModificarSobreIn)
  {
    return this.http.post<ModificarSobreOut>(`${this.baseUrl+MetodosUrl.Sobre.MODIFICAR}`,modificarSobreIn);
  }

  public DevolverSobres(devolverSobresIn:DevolverSobresIn)
  {
    return this.http.post<DevolverSobresOut>(`${this.baseUrl+MetodosUrl.Sobre.DEVOLVERSOBRES}`,devolverSobresIn);
  }

  public Listar(listarSobreIn:ListarSobreIn)
  {
    return this.http.get<ListarSobresOut>(`${this.baseUrl+MetodosUrl.Sobre.LISTAR}?NumeroSobre=${listarSobreIn.NumeroSobre}&NumeroLote=${listarSobreIn.NumeroLote}&NombreSemilla=${listarSobreIn.NombreSemilla}&IdCamara=${listarSobreIn.IdCamara}&IdEstado=${listarSobreIn.IdEstado}&IdCamara=${listarSobreIn.IdCamara}`);
  }

  public ListarSobresParaDevolucion(listarSobresParaDevolucionIn:ListarSobresParaDevolucionIn)
  {
    return this.http.get<ListarSobresParaDevolucionOut>(`${this.baseUrl+MetodosUrl.Sobre.LISTARSOBRESPARADEVOLUCION}`)
  }

  public ExisteSobre(existeSobreIn:ExisteSobreIn)
  {
    return this.http.post<ExisteSobreOut>(`${this.baseUrl+ MetodosUrl.Sobre.EXISTESOBRE}`,existeSobreIn);
  }

  public BuscarDuplicados(buscarDuplicadosIn:BuscarDuplicadosIn)
  {
    return this.http.post<BuscarDuplicadosOut>(`${this.baseUrl+ MetodosUrl.Sobre.BUSCARDUPLICADOS}`,buscarDuplicadosIn);
  }

  public ExportarExcel(exportarExcelIn:ExportarExcelIn)
  {
    return this.http.post<ExportarExcelOut>(`${this.baseUrl+MetodosUrl.Sobre.EXPORTAREXCEL}`,exportarExcelIn);
  }
}
