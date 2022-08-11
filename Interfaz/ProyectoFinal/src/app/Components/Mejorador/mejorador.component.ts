import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AltaMejoradorIn } from '../../Parametros/Entrada/AltaMejoradorIn';
import { MejoradorService } from '../../Services/mejorador.service';
import { Mejorador } from './class/mejorador';
import { BajaMejoradorIn } from '../../Parametros/Entrada/BajaMejoradorIn';
import { ModificarMejoradorIn } from '../../Parametros/Entrada/ModificarMejoradorIn';
import { ListarMejoradorIn } from '../../Parametros/Entrada/ListarMejoradorIn';
import { ModalComponent } from '../Modal/modal.component';
import { ExpresionesRegulares, RecursosDeIdioma } from '../Constantes/constantes';

@Component({
  selector: 'app-mejorador',
  templateUrl: './mejorador.component.html',
  styleUrls: ['./mejorador.component.css']
})
export class MejoradorComponent implements OnInit {
  private altaMejoradorIn:AltaMejoradorIn;
  private bajaMejoradorIn:BajaMejoradorIn;
  private modificarMejoradorIn:ModificarMejoradorIn;
  private mejorador: Mejorador;
  private terminoDeBusqueda: string='';
  private mejoradores: Mejorador[];
  private estaSeleccionado: boolean = false;
  private btnAlta: boolean = false;
  private btnBaja: boolean = false;
  private btnModificar: boolean = false;
  private nombreEsValido:boolean = false;
  private mailEsValido: boolean = false;
  private direccionEsValido: boolean = false;
  private mensajeNombreInvalido: string = '';
  private mensajeMailInvalido: string = '';
  private mensajeDireccionInvalido: string = '';


  @ViewChild("modal") modal: ModalComponent;

  constructor(private mejoradorServicio:MejoradorService) {
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

  public get EstaSeleccionado(): boolean {
    return this.estaSeleccionado;
  }
  public set EstaSeleccionado(value: boolean) {
    this.estaSeleccionado = value;
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

// #region Get y Set de botones (utilizado para habilitar y deshabilitar los mismos).
  public get BtnAlta(): boolean {
    return this.btnAlta;
  }
  public set BtnAlta(value: boolean) {
    this.btnAlta = value;
  }
  public get BtnBaja(): boolean {
    return this.btnBaja;
  }
  public set BtnBaja(value: boolean) {
    this.btnBaja = value;
  }
  public get BtnModificar(): boolean {
    return this.btnModificar;
  }
  public set BtnModificar(value: boolean) {
    this.btnModificar = value;
  }
  //#endregion
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
  
  AltaMejorador(){
    this.altaMejoradorIn.mejorador = this.mejorador;
    this.mejoradorServicio.Agregar(this.altaMejoradorIn)
      .subscribe( mejorador => {
         this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Mejorador.Alta.EXITO;
         this.modal.Error = false;
         this.modal.open(); 
        }, err => {
          this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Mejorador.Alta.ERROR;
          this.modal.Error = true;
          this.modal.open(); 
        }
        );
  }

  BajaMejorador(){
    this.bajaMejoradorIn.idMejorador = this.mejorador.IdMejorador;
    this.mejoradorServicio.Baja(this.bajaMejoradorIn)
      .subscribe( mejorador => {
        this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Mejorador.Baja.EXITO;
        this.modal.Error = false;
        this.modal.open(); 
       }, err => {
         this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Mejorador.Baja.ERROR;
         this.modal.Error = true;
         this.modal.open(); 
       }
       );
  }

  ModificarMejorador(){
    this.modificarMejoradorIn.mejorador = this.mejorador;
    this.mejoradorServicio.Modificar(this.modificarMejoradorIn)
      .subscribe( mejorador => {
        this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Mejorador.Modificar.EXITO;
        this.modal.Error = false;
        this.modal.open(); 
       }, err => {
         this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Mejorador.Modificar.ERROR;
         this.modal.Error = true;
         this.modal.open(); 
       }
       );
  }

  Listar(){
    let listarMejoradorIn:ListarMejoradorIn;
    listarMejoradorIn = new ListarMejoradorIn();
    listarMejoradorIn.terminoDeBusqueda = this.terminoDeBusqueda;
    this.mejoradores = [];
    this.mejoradorServicio.Listar(listarMejoradorIn)
    .subscribe( mejorador => {
      if(mejorador.Mejoradores!=undefined){
        mejorador.Mejoradores.forEach(( valor : Mejorador)=>{
          this.mejoradores.push(valor);
        })
      }
    }
      )
  }

  Seleccionar(mejorador:Mejorador)
  {
    this.mejorador.IdMejorador = mejorador.IdMejorador;
    this.mejorador.Nombre = mejorador.Nombre;
    this.mejorador.Mail = mejorador.Mail;
    this.mejorador.Direccion = mejorador.Direccion;  
    this.Ocultar();
  }

 Regresar()
  {
    this.mejorador = new Mejorador();
    this.Ocultar();
    this.btnAlta = false;
    this.btnBaja = false;
    this.btnModificar = false;
  }
  Ocultar()
  {
    this.EstaSeleccionado = !this.EstaSeleccionado;
  }

  BotonSeleccionado(boton:string)
  {
    switch(boton)
    {
      case "Alta":
        this.btnAlta = true;
        break;
      case "Baja":
        this.btnBaja = true;
        break;
      case "Modificar":
        this.btnModificar = true;
        break;
    }
    
  }
 
  ValidarNombre():boolean
  {
    if(this.mejorador.Nombre != '')
    {
      if(ExpresionesRegulares.LETRAS_Y_ESPACIOS.test(this.mejorador.Nombre))
      {
        this.nombreEsValido = true;
      }
      else
      {
        this.nombreEsValido = false;
        this.mensajeNombreInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO;
      }
    }
    else
    {
      this.nombreEsValido = false;
      this.mensajeNombreInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_OBLIGATORIO;
    }
    return this.nombreEsValido;
  }

  ValidarMail():boolean
  {
    if(this.mejorador.Mail != '')
    {
      if(ExpresionesRegulares.MAIL.test(this.mejorador.Mail))
      {
        this.mailEsValido = true;
      }
      else
      {
        this.mailEsValido = false;
        this.mensajeMailInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO;
      }
    }
    else
    {
      this.mailEsValido = false;
      this.mensajeNombreInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_OBLIGATORIO;
    }
    return this.mailEsValido;
  }

  ValidarDireccion():boolean
  {
    if(this.mejorador.Direccion != '')
    {
      if(ExpresionesRegulares.LETRAS_NUMEROS_Y_ESPACIOS.test(this.mejorador.Direccion))
      {
        this.direccionEsValido = true;
      }
      else
      {
        this.direccionEsValido = false;
        this.mensajeDireccionInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO;
      }
    }
    else
    {
      this.DireccionEsValido = false;
      this.mensajeDireccionInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_OBLIGATORIO;
    }
  return this.direccionEsValido;
  }

  ValidarFormulario():boolean
  {
    return this.nombreEsValido && this.mailEsValido && this.direccionEsValido;
  }

}
