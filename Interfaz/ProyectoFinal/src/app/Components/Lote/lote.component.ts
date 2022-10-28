import { Component, OnInit, ViewChild } from '@angular/core';
import { AltaLoteIn } from 'src/app/Parametros/Entrada/AltaLoteIn';
import { BajaLoteIn } from 'src/app/Parametros/Entrada/BajaLoteIn';
import { LoteService } from 'src/app/Services/lote.service';
import { MejoradorService } from 'src/app/Services/mejorador.service';
import { RecursosDeIdioma } from '../Constantes/constantes';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { ModalComponent } from '../Modal/modal.component';
import { Lote } from './class/lote';
import { ModificarLoteIn } from '../../Parametros/Entrada/ModicarLoteIn';
import { ListarLotesIn } from 'src/app/Parametros/Entrada/ListarLotesIn';
import { Mejorador } from '../Mejorador/class/mejorador';
import { ListarMejoradorIn } from '../../Parametros/Entrada/ListarMejoradorIn';
import { ExisteLoteIn } from 'src/app/Parametros/Entrada/ExisteLoteIn';

@Component({
  selector: 'app-lote',
  templateUrl: './lote.component.html',
  styleUrls: ['./lote.component.css']
})
export class LoteComponent extends FormularioBase implements OnInit {
  
  private lote: Lote; 
  private lotes: Lote[];
  private mejoradores: Mejorador[];
  private mejorador: Mejorador;

  private terminoDeBusqueda: string='';

  private mensajeNumeroInvalido = '';
  private mensajeDescripcionInvalido = '';
  private mensajeMejoradorInvalido = '';

  private numeroLoteEsValido : boolean = false;
  private descripcionEsValida : boolean = false;
  private mejoradorEsValido : boolean = false;
  
  @ViewChild("modal") modal: ModalComponent;
  
  constructor(private loteServicio: LoteService, private mejoradorServicio:MejoradorService) {
    super();
    this.Listar();
    this.lotes = [];
    this.mejoradores = [];
    this.lote = new Lote();
    console.log('MENSAJE EN CONSTRUCTOR');
    this.modal = new ModalComponent();
    this.mejorador = new Mejorador();
  }

  ngOnInit(): void {
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

  public get TerminoDeBusqueda(): string {
    return this.terminoDeBusqueda;
  }
  public set TerminoDeBusqueda(value: string) {
    this.terminoDeBusqueda = value;
    setTimeout(() => {
      this.Listar();
    },500)
  }

  public get MensajeNumeroInvalido() {
    return this.mensajeNumeroInvalido;
  }
  public set MensajeNumeroInvalido(value) {
    this.mensajeNumeroInvalido = value;
  }
  public get MensajeDescripcionInvalido() {
    return this.mensajeDescripcionInvalido;
  }
  public set MensajeDescripcionInvalido(value) {
    this.mensajeDescripcionInvalido = value;
  }
  public get MensajeMejoradorInvalido() {
    return this.mensajeMejoradorInvalido;
  }
  public set MensajeMejoradorInvalido(value) {
    this.mensajeMejoradorInvalido = value;
  }

  public get NumeroLoteEsValido() {
    return this.numeroLoteEsValido;
  }
  public set NumeroLoteEsValido(value) {
    this.numeroLoteEsValido = value;
  }

  public get DescripcionEsValida() {
    return this.descripcionEsValida;
  }
  public set DescripcionEsValida(value) {
    this.descripcionEsValida = value;
  }

  public get MejoradorEsValido() {
    return this.mejoradorEsValido;
  }
  public set MejoradorEsValido(value) {
    this.mejoradorEsValido = value;
  }

  public get Mejoradores(): Mejorador[] {
    return this.mejoradores;
  }
  public set Mejoradores(value: Mejorador[]) {
    this.mejoradores = value;
  }

  public get Mejorador(): Mejorador {
    return this.mejorador;
  }
  public set Mejorador(value: Mejorador) {
    this.mejorador = value;
  }

  ExisteLote()
  {
    let existeLoteIn : ExisteLoteIn = new ExisteLoteIn();
    existeLoteIn.Lote = this.lote;
    this.loteServicio.ExisteLote(existeLoteIn)
    .subscribe(existeLote => {
        existeLote.ExisteLote ? this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Alta.EXISTELOTE,true) : this.AltaLote(); 
      }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Alta.ERROR,true);
        this.numeroLoteEsValido = false;
    });
  }
    
  AltaLote()
  {
    let altaLoteIn : AltaLoteIn = new AltaLoteIn();
    altaLoteIn.Lote = this.lote;
    this.loteServicio.Agregar(altaLoteIn)
    .subscribe( lote => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Alta.EXITO,false);
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Alta.ERROR,true);
    });
  }

  BajaLote()
  {
    let bajaLoteIn : BajaLoteIn = new BajaLoteIn();
    bajaLoteIn.NumeroLote = this.lote.NumeroLote;
    this.loteServicio.Baja(bajaLoteIn)
    .subscribe( lote => {
      lote.LoteEliminado ? this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Baja.EXITO,false) : this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Baja.NOELIMINADO,true);
    }, err =>{
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Baja.ERROR,true);
    });
  }
  
  ModificarLote()
  {
    let modificarLoteIn : ModificarLoteIn = new ModificarLoteIn();
    modificarLoteIn.Lote = this.lote;
    this.loteServicio.Modificar(modificarLoteIn)
    .subscribe( lote => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Modificar.EXITO,false);
    }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Modificar.ERROR,true);
    });
  }

  Listar()
  {
   let listarLoteIn: ListarLotesIn = new ListarLotesIn();
    listarLoteIn.terminoDeBusqueda = this.terminoDeBusqueda;
    this.lotes = [];
    this.loteServicio.Listar(listarLoteIn)
      .subscribe(lista => {
        if (lista != undefined) {
            this.lotes = lista.Lotes
          }
      }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Listar.ERROR,true)
    });
  }

  ListarMejoradores()
  {
    this.mejoradores = [];
    this.mejoradorServicio.Listar(new ListarMejoradorIn())
      .subscribe( lista =>{
        if(lista.Mejoradores!=undefined) {
          this.mejoradores = lista.Mejoradores;
        }
      }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Listar.ERROR,true)
    });
  }

  Seleccionar(lote:Lote)
  {
    this.lote = lote;
    this.Ocultar();
  }
  
  Regresar()
  {
    this.Limpiar();
    this.Listar();
    this.Ocultar();
  }

  Limpiar()
  {
    this.lote = new Lote();
    this.BtnAlta = false;
    this.BtnBaja = false;
    this.BtnModificar = false;
    this.numeroLoteEsValido = false;
    this.descripcionEsValida = false;
    this.mejoradorEsValido = false;
  }


  BotonSeleccionado(boton:string)
  {
    switch(boton)
    {
      case "Alta":
        this.BtnAlta = true;
        this.ListarMejoradores();
        break;
      case "Baja":
        this.BtnBaja = true;
        break;
      case "Modificar":
        this.BtnModificar = true;
        this.ListarMejoradores();
        this.Mejorador = this.Lote.Mejorador;
        break;
    }
  }

  ValidarDescripcion():boolean
  {
    this.mensajeDescripcionInvalido = this.ValidarLetrasNumerosYEspacio(this.lote.Descripcion);
    this.mensajeDescripcionInvalido != '' ? this.descripcionEsValida = false : this.descripcionEsValida = true;
    return this.descripcionEsValida;
  }

  ValidarMejorador():boolean
  {
    if(this.lote.NumeroLote!=null && this.lote.Mejorador!=undefined)
    {
      setTimeout(() => {

      },500)
    }
    this.mejoradorEsValido  = this.lote.Mejorador.IdMejorador != undefined;
    this.mensajeDescripcionInvalido = this.mejoradorEsValido ? '' :RecursosDeIdioma.MensajesFormularios.CAMPO_OBLIGATORIO;
    return this.mejoradorEsValido;
  }

  ValidarNumeroLote()
  {
    this.mensajeNumeroInvalido = this.ValidarNumero(this.lote.NumeroLote.toString());
    this.mensajeNumeroInvalido != '' ? this.numeroLoteEsValido = false : this.numeroLoteEsValido = true;
    return this.numeroLoteEsValido;    
  }


  Confirmar(){
    if(this.BtnAlta)
    {
      this.ExisteLote();
    }
    else if(this.BtnBaja)
    {
      this.BajaLote();
    }
    else
    {
      this.ModificarLote();
    }
  }

  AbrirModal(){
    this.modal.open();
  }

  ValidarFormulario():boolean
  {
    return this.numeroLoteEsValido && this.DescripcionEsValida && this.mejoradorEsValido;
  }

  CAMBIO(mejorador:Mejorador)
  {
    this.Lote.Mejorador = mejorador;
  }
}
