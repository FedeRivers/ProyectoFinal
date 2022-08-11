import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from './class/usuario';
import { AltaUsuarioIn } from 'src/app/Parametros/Entrada/AltaUsuarioIn';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ListarUsuariosIn } from 'src/app/Parametros/Entrada/ListarUsuariosIn';
import { ModalComponent } from '../Modal/modal.component';
import { ModificarUsuarioIn } from 'src/app/Parametros/Entrada/ModificarUsuarioIn';
import { BajaUsuarioIn } from 'src/app/Parametros/Entrada/BajaUsuarioIn';
import { ExpresionesRegulares, RecursosDeIdioma } from '../Constantes/constantes';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private usuario: Usuario;
  private altaUsuarioIn: AltaUsuarioIn;
  private bajaUsuarioIn: BajaUsuarioIn;
  private modificarUsuarioIn: ModificarUsuarioIn;
  private usuarios: Usuario[] = [];
  private terminoDeBusqueda: string = "";
  private estaSeleccionado: boolean = false;

  private btnAlta: boolean = false;
  private btnBaja: boolean = false;
  private btnModificar: boolean = false;

  private nombreEsValido: boolean = false; 
  private apellidoEsValido: boolean = false; 
  private mailEsValido: boolean = false; 
  private cedulaEsValida: boolean = false; 
  private mensajeNombreInvalido: string = '';
  private mensajeApellidoInvalido: string = '';
  private mensajeMailInvalido: string = '';
  private mensajeCedulaInvalido: string = '';

  @ViewChild("modal") modal: ModalComponent;

  constructor(private usuarioServicio: UsuarioService) {
    this.usuario = new Usuario();
    this.altaUsuarioIn = new AltaUsuarioIn;
    this.bajaUsuarioIn = new BajaUsuarioIn;
    this.modificarUsuarioIn = new ModificarUsuarioIn;
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
    setTimeout(() => {
      this.Listar();
    },500)
  }


  // #region Get y Set de usuario y lista de usuarios
  public get Usuario(): Usuario
  {
    return this.usuario;
  }
  public set Usuario(value: Usuario)
  {
    this.usuario = value;
  }

  public get Usuarios(): Usuario[]
  {
    return this.usuarios;
  }
  public set Usuarios(value: Usuario[])
  {
    this.usuarios = value;
  }
  //#endregion

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
  // #endregion

  //#region Get y Set de validar datos introducidos por el usuario.
  public get NombreEsValido(): boolean {
    return this.nombreEsValido;
  }
  public set NombreEsValido(value: boolean) {
    this.nombreEsValido = value;
  }
  public get ApellidoEsValido(): boolean {
    return this.apellidoEsValido;
  }
  public set ApellidoEsValido(value: boolean) {
    this.apellidoEsValido = value;
  }
  public get MailEsValido(): boolean {
    return this.mailEsValido;
  }
  public set MailEsValido(value: boolean) {
    this.mailEsValido = value;
  }
  public get CedulaEsValida(): boolean {
    return this.cedulaEsValida;
  }
  public set CedulaEsValida(value: boolean) {
    this.cedulaEsValida = value;
  }
  //#endregion

  //#region Get y Set de mensajes de error para mostrar al usuario
  public get MensajeNombreInvalido(): string {
    return this.mensajeNombreInvalido;
  }
  public set MensajeNombreInvalido(value: string) {
    this.mensajeNombreInvalido = value;
  }
  public get MensajeApellidoInvalido(): string {
    return this.mensajeApellidoInvalido;
  }
  public set MensajeApellidoInvalido(value: string) {
    this.mensajeApellidoInvalido = value;
  }
  public get MensajeMailInvalido(): string {
    return this.mensajeMailInvalido;
  }
  public set MensajeMailInvalido(value: string) {
    this.mensajeMailInvalido = value;
  }
  public get MensajeCedulaInvalido(): string {
    return this.mensajeCedulaInvalido;
  }
  public set MensajeCedulaInvalido(value: string) {
    this.mensajeCedulaInvalido = value;
  }
  //#endregion
  
  AltaUsuario()
  {
    this.usuario.Contrasena = '123456789';
    this.altaUsuarioIn.usuario = this.usuario;
    this.usuarioServicio.Agregar(this.altaUsuarioIn)
      .subscribe( usuario => {
        this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Usuario.Alta.EXITO;
        this.modal.Error = false;
        this.modal.open();     
       }, err => {
         this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Usuario.Alta.ERROR;
         this.modal.Error = true;
         this.modal.open(); 
       });
  }

  BajaUsuario()
  {
    this.bajaUsuarioIn.IdUsuario = this.usuario.IdUsuario;
    this.usuarioServicio.Baja(this.bajaUsuarioIn)
    .subscribe( usuario => {
      this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Usuario.Baja.EXITO;
      this.modal.Error = false;
      this.modal.open(); 
     }, err => {
       this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Usuario.Baja.ERROR;
       this.modal.Error = true;
       this.modal.open(); 
     });
  }

  ModificarUsuario()
  {
    this.modificarUsuarioIn.usuario = this.usuario;
    this.usuarioServicio.Modificar(this.modificarUsuarioIn)
      .subscribe( usuario => {
        this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Usuario.Modificar.EXITO;
        this.modal.Error = false;
        this.modal.open(); 
       }, err => {
         this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.Usuario.Modificar.ERROR;
         this.modal.Error = true;
         this.modal.open(); 
       });
  }

  Listar()
  {
    let listarUsuariosIn: ListarUsuariosIn;
    listarUsuariosIn = new ListarUsuariosIn();
    listarUsuariosIn.terminoDeBusqueda = this.terminoDeBusqueda;
    this.usuarios = [];
    this.usuarioServicio.Listar(listarUsuariosIn)
      .subscribe(lista => {
        if (lista.Usuarios != undefined) {
            lista.Usuarios.forEach((valor: Usuario) => {
            this.usuarios.push(valor);
          })
        }
      }, err => {
        this.modal.Error = true;
        this.modal.open();
      });
  }


  Seleccionar(usuario:Usuario)
  {
    this.usuario.IdUsuario = usuario.IdUsuario;
    this.usuario.Nombre = usuario.Nombre;
    this.usuario.Apellido = usuario.Apellido;  
    this.usuario.Mail = usuario.Mail;
    this.usuario.Cedula = usuario.Cedula;
    this.usuario.Contrasena = usuario.Contrasena;
    this.usuario.Activo = usuario.Activo;
    this.Ocultar();
  }

 Regresar()
  {
    this.usuario = new Usuario();
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
    if(this.usuario.Nombre != '')
    {
      if(ExpresionesRegulares.LETRAS_Y_ESPACIOS.test(this.usuario.Nombre))
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
      this.mensajeNombreInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_OBLIGATORIO
    }
    return this.nombreEsValido;
  }

  ValidarApellido():boolean
  {
    if(this.usuario.Apellido != '')
    {
      if(ExpresionesRegulares.LETRAS_Y_ESPACIOS.test(this.usuario.Apellido))
      {
        this.apellidoEsValido = true;
      }
      else
      {
        this.apellidoEsValido = false;
        this.mensajeApellidoInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO;
      }
    }
    else
    {
      this.apellidoEsValido = false;
      this.mensajeApellidoInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_OBLIGATORIO;
    }

    return this.apellidoEsValido;
  }

  ValidarMail():boolean
  {
    if(this.usuario.Mail != '')
    {
      if(ExpresionesRegulares.MAIL.test(this.usuario.Mail))
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
      this.MailEsValido = false;
      this.mensajeMailInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_OBLIGATORIO;
    }
    return this.mailEsValido;
  }

  ValidarCedula():boolean
  {
    if(this.usuario.Cedula != '')
    {
      if(ExpresionesRegulares.NUMEROS.test(this.usuario.Cedula))
      {
        this.cedulaEsValida = true;
      }
      else
      {
        this.cedulaEsValida = false;
        this.mensajeCedulaInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO;
      }
    }
    else
    {
      this.cedulaEsValida = false;
      this.mensajeCedulaInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_OBLIGATORIO;
    }
    return this.cedulaEsValida;
  }

  
  ValidarFormulario():boolean
  {
    return this.nombreEsValido && this.apellidoEsValido && this.mailEsValido && this.cedulaEsValida;
  }
}
