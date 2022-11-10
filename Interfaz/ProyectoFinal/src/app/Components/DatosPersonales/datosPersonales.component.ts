import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../Usuario/class/usuario';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { ModificarUsuarioIn } from '../../Parametros/Entrada/ModificarUsuarioIn';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ModalComponent } from '../Modal/modal.component';
import { RecursosDeIdioma } from '../Constantes/constantes';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datosPersonales.component.html',
  styleUrls: ['./datosPersonales.component.css']
})
export class DatosPersonalesComponent extends FormularioBase implements OnInit {

  private contrasena!: string;
  private contrasenaNueva!: string;
  private confirmarContrasenaNueva!: string;

  private contrasenaEsValida:boolean=false;
  private contrasenaNuevaEsValida:boolean=false;
  private confirmarContrasenaNuevaEsValida:boolean=false;

  private mensajeContrasenaInvalida!: string;
  private mensajeContrasenaNuevaInvalida!: string;
  private mensajeConfirmarContrasenaNuevaInvalida!: string;

  private cambiarContrasena: boolean = false;

  private usuario: Usuario;
  private placeholder: string = '******';


  @ViewChild("modal") modal: ModalComponent;

  constructor(private usuarioServicio: UsuarioService) 
  { 
    super();
    this.modal = new ModalComponent();
    this.usuario = JSON.parse(sessionStorage.getItem('usuario')!); 
  }

  ngOnInit(): void {
  }

  public get Contrasena(): string {
    return this.contrasena;
  }
  public set Contrasena(value: string) {
    this.contrasena = value;
  }

  public get ContrasenaNueva(): string {
    return this.contrasenaNueva;
  }
  public set ContrasenaNueva(value: string) {
    this.contrasenaNueva = value;
  }

  public get ConfirmarContrasenaNueva(): string {
    return this.confirmarContrasenaNueva;
  }
  public set ConfirmarContrasenaNueva(value: string) {
    this.confirmarContrasenaNueva = value;
  }

  public get MensajeContrasenaInvalida(): string {
    return this.mensajeContrasenaInvalida;
  }
  public set MensajeContrasenaInvalida(value: string) {
    this.mensajeContrasenaInvalida = value;
  }

  public get MensajeContrasenaNuevaInvalida(): string {
    return this.mensajeContrasenaNuevaInvalida;
  }
  public set MensajeContrasenaNuevaInvalida(value: string) {
    this.mensajeContrasenaNuevaInvalida = value;
  }

  public get MensajeConfirmarContrasenaNuevaInvalida(): string {
    return this.mensajeConfirmarContrasenaNuevaInvalida;
  }
  public set MensajeConfirmarContrasenaNuevaInvalida(value: string) {
    this.mensajeConfirmarContrasenaNuevaInvalida = value;
  }

  public get Usuario(): Usuario {
    return this.usuario;
  }
  public set Usuario(value: Usuario) {
    this.usuario = value;
  }

  public get CambiarContrasena(): boolean {
    return this.cambiarContrasena;
  }
  public set CambiarContrasena(value: boolean) {
    this.cambiarContrasena = value;
    this.cambiarContrasena ? this.placeholder = 'Ingrese contraseña actual' : this.placeholder = '******';
  }

  public get Placeholder(): string {
    return this.placeholder;
  }
  public set Placeholder(value: string) {
    this.placeholder = value;
  }



  public ValidarContrasena():boolean
  {
    this.mensajeContrasenaInvalida = this.CampoVacio(this.contrasena);
    this.mensajeContrasenaInvalida != '' ? this.contrasenaEsValida = false 
    : this.contrasenaEsValida = CryptoJS.SHA256(this.contrasena).toString() == this.usuario.Contrasena;
    ! this.contrasenaEsValida && this.mensajeContrasenaInvalida == '' 
    ? this.mensajeContrasenaInvalida = RecursosDeIdioma.MensajesFormularios.CONTRASENA_INVALIDA : '';
    return this.contrasenaEsValida;
  }

  public ValidarContrasenaNueva():boolean
  {
    this.mensajeContrasenaNuevaInvalida = this.CampoVacio(this.contrasenaNueva);
    this.mensajeContrasenaNuevaInvalida != '' ? this.contrasenaNuevaEsValida = false : this.contrasenaNuevaEsValida = true;
    return this.contrasenaNuevaEsValida;
  }

  public ValidarConfirmarContrasenaNueva():boolean
  {
    this.mensajeConfirmarContrasenaNuevaInvalida = this.CampoVacio(this.confirmarContrasenaNueva);
    this.mensajeConfirmarContrasenaNuevaInvalida != '' ? this.confirmarContrasenaNuevaEsValida = false 
    : this.confirmarContrasenaNuevaEsValida = this.contrasenaNueva == this.confirmarContrasenaNueva;
    ! this.confirmarContrasenaNuevaEsValida && this.mensajeConfirmarContrasenaNuevaInvalida == '' 
    ? this.mensajeConfirmarContrasenaNuevaInvalida = RecursosDeIdioma.MensajesFormularios.CONTRASENA_INVALIDA : '';
    return this.confirmarContrasenaNuevaEsValida;
  }

  ModificarUsuario()
  {
    let modificarUsuarioIn:ModificarUsuarioIn = new ModificarUsuarioIn();
    modificarUsuarioIn.Usuario = this.usuario;
    modificarUsuarioIn.Usuario.Contrasena = CryptoJS.SHA256(this.contrasenaNueva).toString();
    this.usuarioServicio.Modificar(modificarUsuarioIn)
    .subscribe( usuario => {
      this.LimpiarCampos();
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Modificar.EXITO,false);
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Modificar.ERROR,true);
    });
  }

  LimpiarCampos()
  {
    this.contrasena = '';
    this.contrasenaNueva = '';
    this.confirmarContrasenaNueva = '';
  }

  AbrirModal()
  {
    this.modal.open();
  }

  ValidarFormulario():boolean
  {
    return this.contrasenaEsValida && this.contrasenaNuevaEsValida &&  this.confirmarContrasenaNuevaEsValida;
  }
}
