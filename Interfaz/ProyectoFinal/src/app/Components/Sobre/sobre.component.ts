import { Component, OnInit, ViewChild } from '@angular/core';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { Semilla } from '../Semilla/class/semilla';
import { Estado } from '../Estado/class/estado';
import { ModalComponent } from '../Modal/modal.component';
import { Lote } from '../Lote/class/lote';
import { SobreService } from 'src/app/Services/sobre.service';
import { AltaSobreIn } from 'src/app/Parametros/Entrada/AltaSobreIn';
import { Sobre } from './class/sobre';
import { Camaras, Estados, RecursosDeIdioma } from '../Constantes/constantes';
import { BajaSobreIn } from 'src/app/Parametros/Entrada/BajaSobre';
import { ModificarSobreIn } from 'src/app/Parametros/Entrada/ModificarSobre';
import { ListarSobreIn } from 'src/app/Parametros/Entrada/ListarSobreIn';
import { SemillaService } from '../../Services/semilla.service';
import { ListarSemillaIn } from 'src/app/Parametros/Entrada/ListarSemillaIn';
import { EstadoService } from '../../Services/estados.service';
import { ListarEstadosIn } from '../../Parametros/Entrada/ListarEstadosIn';
import { LoteService } from '../../Services/lote.service';
import { ListarLotesIn } from '../../Parametros/Entrada/ListarLotesIn';

import { Camara } from '../Camara/class/Camara';
import { ListarCamaraIn } from 'src/app/Parametros/Entrada/ListarCamaraIn';
import { CamaraService } from 'src/app/Services/camara.service';
import { Usuario } from '../Usuario/class/usuario';
import { ExisteSobreIn } from 'src/app/Parametros/Entrada/ExisteSobreIn';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent extends FormularioBase implements OnInit {
  
  private sobre: Sobre;
  private sobres: Sobre[];
  
  private semilla: Semilla;
  private semillas: Semilla[];

  private estado: Estado;
  private estados: Estado[];
  
  private camara: Camara;
  private camaras: Camara[];
  
  private idTipoDeUsuario:number; 

  private lote: Lote;
  private lotes: Lote[];

  private listarSobreIn: ListarSobreIn;
  
  private numeroSobreEsValido: boolean = false;
  private ubicacionEsValida: boolean = false; 
  private humedadEsValida: boolean = false;
  private germinacionEsValida: boolean = false; 
  private loteEsValido: boolean = false;
  private semillaEsValida: boolean = false;
  private estadoEsValido: boolean = false;

  private mensajeNumeroSobreInvalida: string = '';
  private mensajeUbicacionInvalida: string = '';
  private mensajeHumedadInvalida: string = '';
  private mensajeGerminacionInvalida: string = '';
  private mensajeLoteInvalido: string = '';
  private mensajeSemillaInvalida: string = '';
  private mensajeEstadoInvalida: string = '';

  private btnTomarHumedad: boolean = false;
  private btnGerminar: boolean = false;
  private btnSecar: boolean = false;




  @ViewChild("modal") modal: ModalComponent;
  


  constructor(private sobreServicio: SobreService,private semillaServicio: SemillaService,private loteService:LoteService,private estadoService: EstadoService,private camaraService: CamaraService) {
    super();
    let usuario:Usuario = JSON.parse(sessionStorage.getItem('usuario')!); 
    this.idTipoDeUsuario =  usuario.TipoDeUsuario.IdTipoDeUsuario;
    this.listarSobreIn = new ListarSobreIn();
    this.modal = new ModalComponent();
    this.semilla = new Semilla();
    this.estado = new Estado();
    this.camara = new Camara();
    this.sobre = new Sobre();
    this.lote = new Lote();
    this.semillas = [];
    this.estados = [];
    this.camaras = [];
    this.sobres = [];
    this.lotes = [];
    this.Listar();
    this.ListarEstados();
    this.ListarCamaras();
  }


  ngOnInit(): void {
  }


  public set NumeroSobre(value: number) {
    this.listarSobreIn.NumeroSobre = value;
    setTimeout(() => {
      this.Listar();
    },1000)
  }

  public set NumeroLote(value: number) {
    this.listarSobreIn.NumeroLote = value;
    setTimeout(() => {
      this.Listar();
    },1000)
  }

  public set NombreSemilla(value: string) {
    this.listarSobreIn.NombreSemilla = value;
    setTimeout(() => {
      this.Listar();
    },1000)
  }
  
  public set EstadoSobre(value: number){
    this.listarSobreIn.IdEstado = value;
    setTimeout(() => {
      this.Listar();
    },1000)
  }

  public set Camara(value: number){
    this.listarSobreIn.IdCamara = value;
    setTimeout(() => {
      this.Listar();
    },1000)
  }


  // #region Get y Set de usuario y lista de usuarios
  public get Sobres(): Sobre[] {
    return this.sobres;
  }
  public set Sobres(value: Sobre[]) {
    this.sobres = value;
  }
  public get Sobre(): Sobre {
    return this.sobre;
  }
  public set Sobre(value: Sobre) {
    this.sobre = value;
  }
  public get Semilla(): Semilla {
    return this.semilla;
  }
  public set Semilla(value: Semilla) {
    this.semilla = value;
  }
  public get Semillas(): Semilla[] {
    return this.semillas;
  }
  public set Semillas(value: Semilla[]) {
    this.semillas = value;
  }

  public get Estados(): Estado[] {
    return this.estados;
  }
  public set Estados(value: Estado[]) {
    this.estados = value;
  }
  public get Lote(): Lote {
    return this.lote;
  }
  public set Lote(value: Lote) {
    this.lote = value;
  }
  public get Lotes(): Lote[] {
    return this.lotes;
  }
  public set Lotes(value: Lote[]) {
    this.lotes = value;
  }
  public get Camaras(): Camara[] {
    return this.camaras;
  }
  public set Camaras(value: Camara[]) {
    this.camaras = value;
  }
  //#endregion

  //#region Get y Set de validar datos introducidos por el usuario.

  public get UbicacionEsValida(): boolean {
    return this.ubicacionEsValida;
  }
  public set UbicacionEsValida(value: boolean) {
    this.ubicacionEsValida = value;
  }

  public get HumedadEsValida(): boolean {
    return this.humedadEsValida;
  }
  public set HumedadEsValida(value: boolean) {
    this.humedadEsValida = value;
  }

  public get GerminacionEsValida(): boolean {
    return this.germinacionEsValida;
  }
  public set GerminacionEsValida(value: boolean) {
    this.germinacionEsValida = value;
  }

  public get LoteEsValido(): boolean {
    return this.loteEsValido;
  }
  public set LoteEsValido(value: boolean) {
    this.loteEsValido = value;
  }

  public get SemillaEsValida(): boolean {
    return this.semillaEsValida;
  }
  public set SemillaEsValida(value: boolean) {
    this.semillaEsValida = value;
  }

  public get EstadoEsValido(): boolean {
    return this.estadoEsValido;
  }
  public set EstadoEsValido(value: boolean) {
    this.estadoEsValido = value;
  }

  public get BtnTomarHumedad(): boolean {
    return this.btnTomarHumedad;
  }
  public set BtnTomarHumedad(value: boolean) {
    this.btnTomarHumedad = value;
  }

  public get BtnGerminar(): boolean {
    return this.btnGerminar;
  }
  public set BtnGerminar(value: boolean) {
    this.btnGerminar = value;
  }
  
  public get BtnSecar(): boolean {
    return this.btnSecar;
  }
  public set BtnSecar(value: boolean) {
    this.btnSecar = value;
  }

  //#endregion

  //#region Get y Set de mensajes de error para mostrar al usuario

  public get MensajeNumeroSobreInvalida(): string {
    return this.mensajeNumeroSobreInvalida;
  }
  public set MensajeNumeroSobreInvalida(value: string) {
    this.mensajeNumeroSobreInvalida = value;
  }

  public get NumeroSobreEsValido(): boolean {
    return this.numeroSobreEsValido;
  }
  public set NumeroSobreEsValido(value: boolean) {
    this.numeroSobreEsValido = value;
  }
  
  public get MensajeUbicacionInvalida(): string {
    return this.mensajeUbicacionInvalida;
  }
  public set MensajeUbicacionInvalida(value: string) {
    this.mensajeUbicacionInvalida = value;
  }

  public get MensajeHumedadInvalida(): string {
    return this.mensajeHumedadInvalida;
  }
  public set MensajeHumedadInvalida(value: string) {
    this.mensajeHumedadInvalida = value;
  }

  public get MensajeGerminacionInvalida(): string {
    return this.mensajeGerminacionInvalida;
  }
  public set MensajeGerminacionInvalida(value: string) {
    this.mensajeGerminacionInvalida = value;
  }

  public get MensajeLoteInvalido(): string {
    return this.mensajeLoteInvalido;
  }
  public set MensajeLoteInvalido(value: string) {
    this.mensajeLoteInvalido = value;
  }

  public get MensajeSemillaInvalida(): string {
    return this.mensajeSemillaInvalida;
  }
  public set MensajeSemillaInvalida(value: string) {
    this.mensajeSemillaInvalida = value;
  }

  public get MensajeEstadoInvalida(): string {
    return this.mensajeEstadoInvalida;
  }
  public set MensajeEstadoInvalida(value: string) {
    this.mensajeEstadoInvalida = value;
  }

  //#endregion
  
  AltaSobre()
  {
    let altaSobreIn: AltaSobreIn = new AltaSobreIn();
    altaSobreIn.Sobre = this.sobre;
    this.sobreServicio.Agregar(altaSobreIn)
      .subscribe( sobre => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Alta.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Alta.ERROR,true);
      });
  }

  BajaSobre()
  {
    let bajaSobreIn: BajaSobreIn = new BajaSobreIn();
    bajaSobreIn.IdSobre = this.sobre.IdSobre;
    this.sobreServicio.Baja(bajaSobreIn)
    .subscribe( sobre => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Baja.EXITO,false);
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Baja.ERROR,true);
     });
  }

  ModificarSobre()
  {
    let modificarSobreIn: ModificarSobreIn = new ModificarSobreIn();
    this.sobre.Estado = this.estado;
    modificarSobreIn.Sobre = this.sobre;
    modificarSobreIn.IdTipoDeUsuario = this.idTipoDeUsuario;
    this.sobreServicio.Modificar(modificarSobreIn)
      .subscribe( resp => {
        resp.CamaraLlena ? this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.CAMARALLENA,true) 
         : this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.ERROR,true);
      });
  }

  ExisteSobre()
  {
    let existeSobreIn:ExisteSobreIn = new ExisteSobreIn();
    existeSobreIn.Sobre = this.sobre;
    this.sobreServicio.ExisteSobre(existeSobreIn)
    .subscribe( resp => {
      resp.ExisteSobre ? this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Alta.EXISTESOBRE,true) : this.AltaSobre();
    })
  }

  Listar()
  {
    this.sobres = [];
    this.sobreServicio.Listar(this.listarSobreIn)
      .subscribe( lista => {
        if (lista.Sobres != undefined) {
            this.sobres = lista.Sobres;
          }
      }, err => {
        this.modal.Error = true;
        this.modal.open();
    });
  }

  ListarSemillas()
  {
    this.semillas = [];
    this.semillaServicio.Listar(new ListarSemillaIn())
      .subscribe( lista =>{
        if(lista.Semillas!=undefined) {
          this.semillas = lista.Semillas;
        }
      }, err => {
        this.modal.Error = true;
        this.modal.open();
    });
  }

  ListarEstados()
  {
    this.estados = [];
    this.estadoService.Listar(new ListarEstadosIn())
      .subscribe( lista =>{
        if(lista.Estados!=undefined) {
          this.estados = lista.Estados;
        }
      }, err => {
      this.modal.Error = true;
      this.modal.open();
    });
  }

  ListarCamaras()
  {
    this.camaras = [];
    this.camaraService.Listar(new ListarCamaraIn())
      .subscribe( lista =>{
        if(lista.Camaras!=undefined) {
          this.camaras = lista.Camaras;
        }
      }, err => {
      this.modal.Error = true;
      this.modal.open();
    });
  }

  ListarLotes()
  {
    this.lotes = [];
    this.loteService.Listar(new ListarLotesIn())
      .subscribe( lista =>{
        if(lista.Lotes!=undefined) {
          this.lotes = lista.Lotes;
        }
      }, err => {
      this.modal.Error = true;
      this.modal.open();
    });
  }

  Seleccionar(sobre:Sobre,btnSeleccionado:string)
  {
    this.sobre = sobre;
    this.BotonSeleccionado(btnSeleccionado);
    if(!this.btnGerminar && !this.btnTomarHumedad && !this.btnSecar)
    {
      this.Ocultar();
    }
  }

 Regresar()
  {
    this.Listar();
    this.Limpiar();
    if(!this.btnGerminar && !this.btnTomarHumedad && !this.btnSecar)
    {
      this.Ocultar();
    }
  }

  Limpiar()
  {
    this.sobre= new Sobre();
    this.BtnAlta = false;
    this.BtnBaja = false;
    this.BtnModificar = false;
    this.mensajeUbicacionInvalida = '';
    this.mensajeHumedadInvalida = '';
    this.mensajeGerminacionInvalida = '';
    this.mensajeLoteInvalido = '';
    this.mensajeSemillaInvalida = '';
    this.mensajeEstadoInvalida = '';
  }

  BotonSeleccionado(boton:string)
  {
    switch(boton)
    {
      case "Alta":
        this.BtnAlta = true;
        this.ListarSemillas();
        this.ListarLotes();
        break;
      case "Baja":
        this.BtnBaja = true;
        break;
      case "Modificar":
        this.BtnModificar = true;
        this.ListarSemillas();
        this.ListarEstados();
        this.ListarLotes();
        break;
      case "Secar":
        this.btnSecar = true;
        this.estado.IdEstado = Estados.SECANDO;
        this.sobre.Ubicacion.Camara.IdCamara = Camaras.SECADO;
        this.AbrirModal();
        break;
      case "Germinar":
        this.btnGerminar = true;
        this.idTipoDeUsuario = 3;
        this.estado.IdEstado = Estados.GERMINANDO;
        this.sobre.Ubicacion.Camara.IdCamara = Camaras.GERMINACION;
        this.AbrirModal();
        break;
      case "TomarHumedad":
        this.btnTomarHumedad = true;
        this.estado.IdEstado = Estados.ANALIZANDOHUMEDAD;
        this.sobre.Ubicacion.Camara.IdCamara = Camaras.HUMEDAD;
        this.AbrirModal();
        break;
    }
  }

  Confirmar()
  {
    if(this.BtnAlta)
    {
      this.ExisteSobre();
    }
    else if(this.BtnBaja)
    {
      this.BajaSobre();
    }
    else if(this.BtnModificar||this.btnGerminar||this.btnTomarHumedad||this.btnSecar)
    {
      this.ModificarSobre();
    }
  }

  AbrirModal()
  {
    this.modal.open();
  }

  //#region Validaciones
  ValidarNumeroSobre():boolean
  {
    this.mensajeNumeroSobreInvalida = this.ValidarNumero(this.sobre.NumeroSobre.toString());
    this.mensajeNumeroSobreInvalida != '' ? this.numeroSobreEsValido = false : this.numeroSobreEsValido = true;
    return this.numeroSobreEsValido;
  }

  ValidarLote():boolean
  {
    this.mensajeLoteInvalido = this.ValidarNumero(this.sobre.Lote.NumeroLote.toString());
    this.mensajeLoteInvalido != '' ? this.loteEsValido = false: this.loteEsValido = true;
    return this.loteEsValido;
  }

  ValidarSemilla():boolean
  {
    this.mensajeSemillaInvalida = this.ValidarNumero(this.sobre.Semilla.IdSemilla.toString());
    this.mensajeSemillaInvalida != '' ? this.semillaEsValida = false: this.semillaEsValida = true;
    return this.semillaEsValida;
  }
  
  ValidarFormulario():boolean
  {
    return this.loteEsValido && this.semillaEsValida; 
  }
  //#endregion

}
