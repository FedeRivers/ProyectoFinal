import { Component, OnInit, ViewChild } from '@angular/core';
import { AltaMejoradorIn } from '../../Parametros/Entrada/AltaMejoradorIn';
import { MejoradorService } from '../../Services/mejorador.service';
import { Mejorador } from './class/mejorador';
import { BajaMejoradorIn } from '../../Parametros/Entrada/BajaMejoradorIn';
import { ModificarMejoradorIn } from '../../Parametros/Entrada/ModificarMejoradorIn';
import { ListarMejoradorIn } from '../../Parametros/Entrada/ListarMejoradorIn';
import { ModalComponent } from '../Modal/modal.component';
import { RecursosDeIdioma } from '../Constantes/constantes';
import { FormularioBase } from '../FormularioBase/class/formularioBase';



@Component({
  selector: 'app-mejorador',
  templateUrl: './mejorador.component.html',
  styleUrls: ['./mejorador.component.css']
})
export class MejoradorComponent extends FormularioBase implements OnInit  {
  private altaMejoradorIn:AltaMejoradorIn;
  private bajaMejoradorIn:BajaMejoradorIn;
  private modificarMejoradorIn:ModificarMejoradorIn;
  private mejorador: Mejorador;
  private terminoDeBusqueda: string='';
  private mejoradores: Mejorador[];
  private nombreEsValido:boolean = false;
  private mailEsValido: boolean = false;
  private direccionEsValido: boolean = false;
  private mensajeNombreInvalido: string = '';
  private mensajeMailInvalido: string = '';
  private mensajeDireccionInvalido: string = '';


  @ViewChild("modal") modal: ModalComponent;

  constructor(private mejoradorServicio:MejoradorService) {
    super();
    this.altaMejoradorIn = new AltaMejoradorIn();
    this.bajaMejoradorIn = new BajaMejoradorIn();
    this.modificarMejoradorIn = new ModificarMejoradorIn();
    this.mejorador = new Mejorador();
    this.mejoradores = []; 
    this.Listar();
    this.modal = new ModalComponent();
  }

  ngOnInit(): void {
    
  }

  public get TerminoDeBusqueda(): string {
    return this.terminoDeBusqueda;
  }
  public set TerminoDeBusqueda(value: string) {
    this.terminoDeBusqueda = value;
    setTimeout(()=>{
      this.Listar();
    },500)
  }
  
  public get Mejorador(): Mejorador {
    return this.mejorador;
  }
  public set Mejorador(value: Mejorador) {
    this.mejorador = value;
  }
  public get Mejoradores():Mejorador[] {
    return this.mejoradores;
  }
  public set Mejoradores(value: Mejorador[]) {
    this.mejoradores = value;
  }

  //#region Get y Set de validar datos introducidos por el usuario.
  public get NombreEsValido(): boolean {
    return this.nombreEsValido;
  }
  public set NombreEsValido(value: boolean) {
    this.nombreEsValido = value;
  }
  public get MailEsValido(): boolean {
    return this.mailEsValido;
  }
  public set MailEsValido(value: boolean) {
    this.mailEsValido = value;
  }
  public get DireccionEsValido(): boolean {
    return this.direccionEsValido;
  }
  public set DireccionEsValido(value: boolean) {
    this.direccionEsValido = value;
  }
  //#endregion
  //#region Get y Set de mensajes de error para mostrar al usuario
  public get MensajeNombreInvalido(): string {
    return this.mensajeNombreInvalido;
  }
  public set MensajeNombreInvalido(value: string) {
    this.mensajeNombreInvalido = value;
  }
  public get MensajeMailInvalido(): string {
    return this.mensajeMailInvalido;
  }
  public set MensajeMailInvalido(value: string) {
    this.mensajeMailInvalido = value;
  }
  public get MensajeDireccionInvalido(): string {
    return this.mensajeDireccionInvalido;
  }
  public set MensajeDireccionInvalido(value: string) {
    this.mensajeDireccionInvalido = value;
  }
  //#endregion
  
  AltaMejorador()
  {
    this.altaMejoradorIn.mejorador = this.mejorador;
    this.mejoradorServicio.Agregar(this.altaMejoradorIn)
      .subscribe( mejorador => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Mejorador.Alta.EXITO,false);
        }, err => {
          this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Mejorador.Alta.ERROR,true);
      });
  }

  BajaMejorador()
  {
    this.bajaMejoradorIn.idMejorador = this.mejorador.IdMejorador;
    this.mejoradorServicio.Baja(this.bajaMejoradorIn)
      .subscribe( mejorador => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Mejorador.Alta.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Mejorador.Alta.ERROR,true);
      });
  }

  ModificarMejorador()
  {
    this.modificarMejoradorIn.mejorador = this.mejorador;
    this.mejoradorServicio.Modificar(this.modificarMejoradorIn)
      .subscribe( mejorador => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Mejorador.Alta.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Mejorador.Alta.ERROR,true);
      });
  }

  Listar()
  {
    let listarMejoradorIn:ListarMejoradorIn = new ListarMejoradorIn();
    listarMejoradorIn.terminoDeBusqueda = this.terminoDeBusqueda;
    this.mejoradores = [];
    this.mejoradorServicio.Listar(listarMejoradorIn)
    .subscribe( lista => {
      if(lista.Mejoradores!=undefined){
          this.mejoradores = lista.Mejoradores;
        }
    }, err => {
      this.modal.Error = true;
      this.modal.open();
    });
  }

  Seleccionar(mejorador:Mejorador)
  {
    this.mejorador = mejorador;
    this.Ocultar();
  }

 Regresar()
  {
    this.mejorador = new Mejorador();
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
        break;
      case "Baja":
        this.BtnBaja = true;
        break;
      case "Modificar":
        this.BtnModificar = true;
        break;
    }
  }
 
  ValidarNombre():boolean
  {
    this.mensajeNombreInvalido = this.ValidarLetras(this.mejorador.Nombre);
    this.mensajeNombreInvalido != '' ? this.nombreEsValido = false : this.nombreEsValido = true;
    return this.nombreEsValido;
  }

  ValidarMailMejorador():boolean
  {
    this.mensajeMailInvalido = this.ValidarMail(this.mejorador.Mail);
    this.mensajeMailInvalido != '' ? this.mailEsValido = false : this.mailEsValido = true;
    return this.mailEsValido;
  }

  ValidarDireccion():boolean
  {
    this.mensajeDireccionInvalido =  this.ValidarLetrasNumerosEspaciosYPunto(this.mejorador.Direccion);
    this.mensajeDireccionInvalido != '' ? this.direccionEsValido = false : this.direccionEsValido = true;
    return this.direccionEsValido;
  }

  ValidarFormulario():boolean
  {
    return this.nombreEsValido && this.mailEsValido && this.direccionEsValido;
  }

  Confirmar(){
    if(this.BtnAlta)
    {
      this.AltaMejorador();
    }
    else if(this.BtnBaja)
    {
      this.BajaMejorador();
    }
    else
    {
      this.ModificarMejorador();
    }
  }

  AbrirModal(){
    this.modal.open();
  }

}
