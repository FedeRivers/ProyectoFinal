import { Component, OnInit, ViewChild } from '@angular/core';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { Semilla } from '../Semilla/class/semilla';
import { Estado } from '../Estado/class/estado';
import { ModalComponent } from '../Modal/modal.component';
import { Lote } from '../Lote/class/lote';
import { SobreService } from 'src/app/Services/sobre.service';
import { AltaSobreIn } from 'src/app/Parametros/Entrada/AltaSobreIn';
import { Sobre } from './class/sobre';
import { RecursosDeIdioma } from '../Constantes/constantes';
import { BajaSobreIn } from 'src/app/Parametros/Entrada/BajaSobre';
import { ModificarSobreIn } from 'src/app/Parametros/Entrada/ModificarSobre';
import { ListarSobreIn } from 'src/app/Parametros/Entrada/ListarSobreIn';
import { SemillaService } from '../../Services/semilla.service';
import { ListarSemillaIn } from 'src/app/Parametros/Entrada/ListarSemillaIn';
import { EstadoService } from '../../Services/estados.service';
import { ListarEstadosIn } from '../../Parametros/Entrada/ListarEstadosIn';
import { LoteService } from '../../Services/lote.service';
import { ListarLotesIn } from '../../Parametros/Entrada/ListarLotesIn';

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
  
  private lote: Lote;
  private lotes: Lote[];

  private terminoDeBusqueda: string = "";
  
  private ubicacionEsValida: boolean = false; 
  private humedadEsValida: boolean = false;
  private germinacionEsValida: boolean = false; 
  private loteEsValido: boolean = false;
  private semillaEsValida: boolean = false;
  private estadoEsValido: boolean = false;

  private mensajeUbicacionInvalida: string = '';
  private mensajeHumedadInvalida: string = '';
  private mensajeGerminacionInvalida: string = '';
  private mensajeLoteInvalido: string = '';
  private mensajeSemillaInvalida: string = '';
  private mensajeEstadoInvalida: string = '';


  @ViewChild("modal") modal: ModalComponent;
  


  constructor(private sobreServicio: SobreService,private semillaServicio: SemillaService,private estadoService: EstadoService,private loteService:LoteService) {
    super();
    this.modal = new ModalComponent();
    this.semilla = new Semilla();
    this.estado = new Estado();
    this.sobre = new Sobre();
    this.lote = new Lote();
    this.semillas = [];
    this.estados = [];
    this.sobres = [];
    this.lotes = [];
    this.Listar();
  }


  ngOnInit(): void {
  }

  public get TerminoDeBusqueda(): string {
    return this.terminoDeBusqueda;
  }
  public set TerminoDeBusqueda(value: string) {
    this.terminoDeBusqueda = value;
    setTimeout(() => {
      this.Listar();
    },500)
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
  public get Estado(): Estado {
    return this.estado;
  }
  public set Estado(value: Estado) {
    this.estado = value;
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

  //#endregion

  //#region Get y Set de mensajes de error para mostrar al usuario
  
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
    modificarSobreIn.Sobre = this.sobre;
    this.sobreServicio.Modificar(modificarSobreIn)
      .subscribe( sobre => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.ERROR,true);
      });
  }

  Listar()
  {
    let listarSobreIn: ListarSobreIn = new ListarSobreIn();
    listarSobreIn.terminoDeBusqueda = this.terminoDeBusqueda;
    this.sobres = [];
    this.sobreServicio.Listar(listarSobreIn)
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

  Seleccionar(sobre:Sobre)
  {
    this.sobre = sobre;
    this.Ocultar();
  }

 Regresar()
  {
    this.Listar();
    this.Ocultar();
    this.Limpiar();
  }

  Limpiar()
  {
    this.semilla= new Semilla();
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
        this.ListarEstados();
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
    }
  }

  ValidarUbicacion():boolean
  {
    this.mensajeUbicacionInvalida = this.ValidarLetras(this.sobre.Ubicacion);
    this.mensajeUbicacionInvalida != '' ? this.ubicacionEsValida = false : this.ubicacionEsValida = true;
    return this.ubicacionEsValida;
  }

  ValidarHumedad():boolean
  {
    this.mensajeHumedadInvalida = this.ValidarNumero(this.sobre.Humedad.toString());
    this.mensajeHumedadInvalida != '' ? this.humedadEsValida = false: this.humedadEsValida = true;
    return this.humedadEsValida;
  }

  ValidarGerminacion():boolean
  {
    this.mensajeGerminacionInvalida = this.ValidarNumero(this.sobre.Germinacion.toString());
    this.mensajeGerminacionInvalida != '' ? this.germinacionEsValida = false: this.germinacionEsValida = true;
    return this.germinacionEsValida;
  }

  ValidarLote():boolean
  {
    this.mensajeLoteInvalido = this.ValidarNumero(this.sobre.Lote.IdLote.toString());
    this.mensajeLoteInvalido != '' ? this.loteEsValido = false: this.loteEsValido = true;
    return this.loteEsValido;
  }

  ValidarSemilla():boolean
  {
    this.mensajeSemillaInvalida = this.ValidarNumero(this.sobre.Semilla.IdSemilla.toString());
    this.mensajeSemillaInvalida != '' ? this.semillaEsValida = false: this.semillaEsValida = true;
    return this.semillaEsValida;
  }

  ValidarEstado():boolean
  {
    this.mensajeEstadoInvalida = this.ValidarNumero(this.sobre.Estado.IdEstado.toString());
    this.mensajeEstadoInvalida != '' ? this.estadoEsValido = false: this.estadoEsValido = true;
    return this.estadoEsValido;
  }
  
  ValidarFormulario():boolean
  {
    return this.ubicacionEsValida && this.humedadEsValida && this.germinacionEsValida && this.loteEsValido && this.semillaEsValida && this.estadoEsValido; 
  }

  Confirmar()
  {
    if(this.BtnAlta)
    {
      this.AltaSobre();
    }
    else if(this.BtnBaja)
    {
      this.BajaSobre();
    }
    else
    {
      this.ModificarSobre();
    }
  }

  AbrirModal()
  {
    this.modal.open();
  }

}
