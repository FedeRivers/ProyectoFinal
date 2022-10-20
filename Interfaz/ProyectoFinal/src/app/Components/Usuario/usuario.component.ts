import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from './class/usuario';
import { AltaUsuarioIn } from 'src/app/Parametros/Entrada/AltaUsuarioIn';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ListarUsuariosIn } from 'src/app/Parametros/Entrada/ListarUsuariosIn';
import { ModalComponent } from '../Modal/modal.component';
import { ModificarUsuarioIn } from 'src/app/Parametros/Entrada/ModificarUsuarioIn';
import { BajaUsuarioIn } from 'src/app/Parametros/Entrada/BajaUsuarioIn';
import {  RecursosDeIdioma } from '../Constantes/constantes';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { TipoDeUsuario } from '../TipoDeUsuario/class/tipoDeUsuario';
import { ListarTipoDeUsuarioIn } from '../../Parametros/Entrada/ListarTipoDeUsuarioIn';
import { TipoDeUsuarioService } from '../../Services/tipoDeUsuario.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent extends FormularioBase implements OnInit {

  private usuario: Usuario;
  private altaUsuarioIn: AltaUsuarioIn;
  private bajaUsuarioIn: BajaUsuarioIn;
  private modificarUsuarioIn: ModificarUsuarioIn;
  private usuarios: Usuario[] = [];
  private tiposDeUsuario: TipoDeUsuario[] = [];
  private terminoDeBusqueda: string = "";

  private nombreEsValido: boolean = false; 
  private apellidoEsValido: boolean = false; 
  private mailEsValido: boolean = false; 
  private cedulaEsValida: boolean = false;
  private tipoDeUsuarioEsValido: boolean = false; 

  private mensajeNombreInvalido: string = '';
  private mensajeApellidoInvalido: string = '';
  private mensajeMailInvalido: string = '';
  private mensajeCedulaInvalida: string = '';
  private mensajeTipoDeUsuarioInvalido: string = '';
  
  @ViewChild("modal") modal: ModalComponent;

  constructor(private usuarioServicio: UsuarioService,private tipoDeUsuarioServicio:TipoDeUsuarioService) {
    super();
    this.usuario = new Usuario();
    this.altaUsuarioIn = new AltaUsuarioIn();
    this.bajaUsuarioIn = new BajaUsuarioIn();
    this.modificarUsuarioIn = new ModificarUsuarioIn();
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

  public get TiposDeUsuario(): TipoDeUsuario[] {
    return this.tiposDeUsuario;
  }
  public set TiposDeUsuario(value: TipoDeUsuario[]) {
    this.tiposDeUsuario = value;
  }
  //#endregion

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
  public get MensajeCedulaInvalida(): string {
    return this.mensajeCedulaInvalida;
  }
  public set MensajeCedulaInvalida(value: string) {
    this.mensajeCedulaInvalida = value;
  }
  //#endregion
  
  AltaUsuario()
  {
    this.altaUsuarioIn.usuario = this.usuario;
    this.usuarioServicio.Agregar(this.altaUsuarioIn)
      .subscribe( usuario => {
        usuario.ExisteCedula ? this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Alta.EXISTECEDULA,true) 
        : usuario.ExisteMail ? this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Alta.EXISTEMAIL,true)
        : this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Alta.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Alta.ERROR,true);
      });
  }

  BajaUsuario()
  {
    this.bajaUsuarioIn.IdUsuario = this.usuario.IdUsuario;
    this.usuarioServicio.Baja(this.bajaUsuarioIn)
    .subscribe( usuario => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Baja.EXITO,false);
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Baja.ERROR,true);
     });
  }

  ModificarUsuario()
  {
    this.modificarUsuarioIn.Usuario = this.usuario;
    this.usuarioServicio.Modificar(this.modificarUsuarioIn)
      .subscribe( usuario => {
        usuario.ExisteCedula ? this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Alta.EXISTECEDULA,true) 
        : usuario.ExisteMail ? this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Alta.EXISTEMAIL,true)
        : this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Modificar.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Modificar.ERROR,true);
      });
  }

  Listar()
  {
    let listarUsuariosIn: ListarUsuariosIn = new ListarUsuariosIn();
    listarUsuariosIn.terminoDeBusqueda = this.terminoDeBusqueda;
    this.usuarios = [];
    this.usuarioServicio.Listar(listarUsuariosIn)
      .subscribe(lista => {
        if (lista.Usuarios != undefined) {
            this.usuarios = lista.Usuarios;
          }
      }, err => {
        this.modal.Error = true;
        this.modal.open();
    });
  }

  ListarTiposDeUsuario()
  {
    this.TiposDeUsuario = [];
    this.tipoDeUsuarioServicio.ListarTipoDeUsuario(new ListarTipoDeUsuarioIn())
      .subscribe( lista =>{
        if(lista.TiposDeUsuario!=undefined) {
          this.tiposDeUsuario = lista.TiposDeUsuario;
        }
      }, err => {
        this.modal.Error = true;
        this.modal.open();
    });
  }


  Seleccionar(usuario:Usuario)
  {
    this.usuario = usuario;
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
    this.usuario = new Usuario();
    this.BtnAlta = false;
    this.BtnBaja = false;
    this.BtnModificar = false;
    this.nombreEsValido = false; 
    this.apellidoEsValido = false; 
    this.mailEsValido = false; 
    this.cedulaEsValida = false;
    this.tipoDeUsuarioEsValido = false; 
  }

  BotonSeleccionado(boton:string)
  {
    switch(boton)
    {
      case "Alta":
        this.BtnAlta = true;
        this.ListarTiposDeUsuario();
        break;
      case "Baja":
        this.BtnBaja = true;
        break;
      case "Modificar":
        this.BtnModificar = true;
        this.ListarTiposDeUsuario();
        break;
    }
  }

  ValidarNombre():boolean
  {
    this.mensajeNombreInvalido = this.ValidarLetras(this.usuario.Nombre);
    this.mensajeNombreInvalido != '' ? this.nombreEsValido = false : this.nombreEsValido = true;
    return this.nombreEsValido;
  }

  ValidarApellido():boolean
  {
    this.mensajeApellidoInvalido = this.ValidarLetrasYEspacio(this.usuario.Apellido);
    this.mensajeApellidoInvalido != '' ? this.apellidoEsValido = false : this.apellidoEsValido = true;
    return this.apellidoEsValido;
  }

  ValidarMailUsuario():boolean
  {
   this.mensajeMailInvalido = this.ValidarMail(this.usuario.Mail);
   this.mensajeMailInvalido != '' ? this.mailEsValido = false : this.mailEsValido = true;
   return this.mailEsValido;
  }

  ValidarCedulaUsuario():boolean
  {
    this.mensajeCedulaInvalida = this.ValidarCedula(this.usuario.Cedula);
    this.mensajeCedulaInvalida != '' ? this.cedulaEsValida = false : this.cedulaEsValida = true;
    return this.cedulaEsValida;
  }

  ValidarTipoDeUsuario():boolean
  {
    this.mensajeTipoDeUsuarioInvalido = this.ValidarNumero(this.usuario.TipoDeUsuario.IdTipoDeUsuario.toString());
    this.mensajeTipoDeUsuarioInvalido != '' ? this.tipoDeUsuarioEsValido = false: this.tipoDeUsuarioEsValido = true;
    return this.tipoDeUsuarioEsValido;
  }
  
  ValidarFormulario():boolean
  {
    return this.nombreEsValido && this.apellidoEsValido && this.mailEsValido && this.cedulaEsValida && this.tipoDeUsuarioEsValido;
  }

  Confirmar()
  {
    if(this.BtnAlta)
    {
      this.AltaUsuario();
    }
    else if(this.BtnBaja)
    {
      this.BajaUsuario();
    }
    else
    {
      this.ModificarUsuario();
    }
  }

  AbrirModal()
  {
    this.modal.open();
  }

}
