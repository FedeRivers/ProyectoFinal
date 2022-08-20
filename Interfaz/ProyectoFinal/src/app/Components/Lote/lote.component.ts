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

@Component({
  selector: 'app-lote',
  templateUrl: './lote.component.html',
  styleUrls: ['./lote.component.css']
})
export class LoteComponent extends FormularioBase implements OnInit {
  
  private lote: Lote; 
  private lotes: Lote[];
  private mejoradores: Mejorador[];
  private terminoDeBusqueda: string='';
  private mensajeNumeroInvalido = '';
  private mensajeDescripcionInvalido = '';
  private mensajeMejoradorInvalido = '';
  private numeroEsValido = false;
  private descripcionEsValida = false;
  private mejoradorEsValido = false;
  
  @ViewChild("modal") modal: ModalComponent;
  
  constructor(private loteServicio: LoteService, private mejoradorServicio:MejoradorService) {
    super();
    this.lote = new Lote();
    this.lotes = [];
    this.mejoradores = [];
    this.modal = new ModalComponent();
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

  public get NumeroEsValido() {
    return this.numeroEsValido;
  }
  public set NumeroEsValido(value) {
    this.numeroEsValido = value;
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

  AltaLote()
  {
    let altaLoteIn : AltaLoteIn = new AltaLoteIn();
    altaLoteIn.Lote = this.lote;
    this.loteServicio.Agregar(altaLoteIn)
    .subscribe( lote => {
      this.modal.Confirmado = true;
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Alta.EXITO,false);
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Alta.ERROR,true);
    });
  }

  BajaLote()
  {
    let bajaLoteIn : BajaLoteIn = new BajaLoteIn();
    bajaLoteIn.IdLote = this.lote.IdLote;
    this.loteServicio.Baja(bajaLoteIn)
    .subscribe( lote => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Baja.EXITO,false);
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
          this.mejoradores = this.mejoradores.filter(mejorador => mejorador.IdMejorador != this.lote.Mejorador.IdMejorador);
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
    this.lote = new Lote();
    this.Listar();
    this.Ocultar();
    this.BtnAlta = false;
    this.BtnBaja = false;
    this.BtnModificar = false;
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
        break;
    }
  }

  ValidarNumeroLote()
  {
    this.mensajeNumeroInvalido = this.ValidarNumero(this.lote.Numero.toString());
    this.mensajeNumeroInvalido != '' ? this.numeroEsValido = false : this.numeroEsValido = true;
    return this.numeroEsValido;
  }

  ValidarDescripcion()
  {
    this.mensajeDescripcionInvalido = this.ValidarLetrasNumerosYEspacio(this.lote.Descripcion);
    this.mensajeDescripcionInvalido != '' ? this.descripcionEsValida = false : this.descripcionEsValida = true;
    return this.descripcionEsValida;
  }

  ValidarMejorador()
  {
    /*this.mensajeMejoradorInvalido = this.ValidarNumero(this.lote.Mejorador.IdMejorador.toString());
    this.mensajeMejoradorInvalido != '' ? this.mejoradorEsValido = false : this.mejoradorEsValido = true;
    return this.mejoradorEsValido;*/
    this.mejoradorEsValido  = this.lote.Mejorador.IdMejorador != undefined;
    this.mensajeDescripcionInvalido = this.mejoradorEsValido ? '' :RecursosDeIdioma.MensajesFormularios.CAMPO_OBLIGATORIO;
    return this.mejoradorEsValido;
  }

  Confirmar(){
    if(this.BtnAlta)
    {
      this.AltaLote();
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
    return this.numeroEsValido && this.DescripcionEsValida && this.mejoradorEsValido;
  }


}