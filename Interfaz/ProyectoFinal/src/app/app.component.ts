import { Component } from '@angular/core';
import { Usuario } from './Components/Usuario/class/usuario';
import { Keys, RecursosDeIdioma } from './Components/Constantes/constantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private usuario: Usuario;
  private moduloMejorador: boolean = false;
  private moduloUsuario: boolean = false;
  private moduloTipoDeUsuario: boolean = false;
  private moduloTaxonomia: boolean = false;
  private moduloLote: boolean = false;
  private moduloLogin: boolean = false;
  private moduloSemilla: boolean = false;
  private moduloSobre: boolean = false;
  private moduloIngresarHumedad: boolean = false;
  private moduloIngresarGerminacion: boolean = false;
  private moduloBuscarDuplicados: boolean = false;
  private moduloEstadisticas: boolean = false;

  constructor(){
    this.usuario = new Usuario();
    let session:Usuario =  JSON.parse(sessionStorage.getItem(Keys.USUARIO)!);
    if(session!=null){
      this.usuario = session;
      this.ValidarPermisos();
    }
  }

  public get Usuario(): Usuario {
    return this.usuario;
  }
  public set Usuario(value: Usuario) {
    this.usuario = value;
  }
  public get ModuloMejorador(): boolean {
    return this.moduloMejorador;
  }
  public set ModuloMejorador(value: boolean) {
    this.moduloMejorador = value;
  }

  public get ModuloUsuario(): boolean {
    return this.moduloUsuario;
  }
  public set ModuloUsuario(value: boolean) {
    this.moduloUsuario = value;
  }

  public get ModuloTipoDeUsuario(): boolean {
    return this.moduloTipoDeUsuario;
  }
  public set ModuloTipoDeUsuario(value: boolean) {
    this.moduloTipoDeUsuario = value;
  }

  public get ModuloTaxonomia(): boolean {
    return this.moduloTaxonomia;
  }
  public set ModuloTaxonomia(value: boolean) {
    this.moduloTaxonomia = value;
  }

  public get ModuloLote(): boolean {
    return this.moduloLote;
  }
  public set ModuloLote(value: boolean) {
    this.moduloLote = value;
  }  

  public get ModuloLogin(): boolean {
    return this.moduloLogin;
  }
  public set ModuloLogin(value: boolean) {
    this.moduloLogin = value;
  }

  public get ModuloSemilla(): boolean {
    return this.moduloSemilla;
  }
  public set ModuloSemilla(value: boolean) {
    this.moduloSemilla = value;
  }

  public get ModuloSobre(): boolean {
    return this.moduloSobre;
  }
  public set ModuloSobre(value: boolean) {
    this.moduloSobre = value;
  }

  public get ModuloIngresarHumedad(): boolean {
    return this.moduloIngresarHumedad;
  }
  public set ModuloIngresarHumedad(value: boolean) {
    this.moduloIngresarHumedad = value;
  }

  public get ModuloIngresarGerminacion(): boolean {
    return this.moduloIngresarGerminacion;
  }
  public set ModuloIngresarGerminacion(value: boolean) {
    this.moduloIngresarGerminacion = value;
  }

  public get ModuloBuscarDuplicados(): boolean {
    return this.moduloBuscarDuplicados;
  }
  public set ModuloBuscarDuplicados(value: boolean) {
    this.moduloBuscarDuplicados = value;
  }

  public get ModuloEstadisticas(): boolean {
    return this.moduloEstadisticas;
  }
  public set ModuloEstadisticas(value: boolean) {
    this.moduloEstadisticas = value;
  }


  ListarFormularios(usuario:Usuario)
  {
    if(usuario!=undefined)
    {
      this.usuario = usuario;
      sessionStorage.setItem('usuario',JSON.stringify(usuario));
      this.ValidarPermisos();
    }
  }

  ValidarPermisos()
  {
    this.usuario.TipoDeUsuario.Modulos.forEach( modulo => {
      switch(modulo.Nombre){
        case RecursosDeIdioma.Formularios.MEJORADOR: this.moduloMejorador = true;
          break;
        case RecursosDeIdioma.Formularios.USUARIO: this.moduloUsuario = true;
          break;
        case RecursosDeIdioma.Formularios.TIPODEUSUARIO: this.moduloTipoDeUsuario = true;
          break;
        case RecursosDeIdioma.Formularios.TAXONOMIA: this.moduloTaxonomia = true;
          break;
        case RecursosDeIdioma.Formularios.LOTE: this.moduloLote = true;
          break;
        case RecursosDeIdioma.Formularios.SEMILLA: this.moduloSemilla = true;
          break;
        case RecursosDeIdioma.Formularios.SOBRE: this.moduloSobre = true;
          break;
        case RecursosDeIdioma.Formularios.INGRESARHUMEDAD: this.moduloIngresarHumedad = true;
          break;
        case RecursosDeIdioma.Formularios.INGRESARGERMINACION: this.moduloIngresarGerminacion = true;
          break;
        case RecursosDeIdioma.Formularios.BUSCARDUPLICADOS: this.ModuloBuscarDuplicados = true;
          break;
        case RecursosDeIdioma.Formularios.ESTADISTICAS: this.ModuloEstadisticas = true;
          break;
      }
    });
  }

  CerrarSesion()
  {
    sessionStorage.clear();
    this.usuario = new Usuario();
    this.moduloMejorador = false;
    this.moduloUsuario = false;
    this.moduloTipoDeUsuario = false;
    this.moduloTaxonomia = false;
    this.moduloLote= false;
    this.moduloSemilla = false;
    this.moduloSobre = false;
    this.moduloIngresarHumedad = false;
    this.moduloIngresarGerminacion = false;
    this.moduloBuscarDuplicados = false;
    this.moduloEstadisticas = false;
  }


}
