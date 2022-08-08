import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from './class/usuario';

import { AltaUsuarioIn } from 'src/app/Parametros/Entrada/AltaUsuarioIn';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ListarUsuariosIn } from 'src/app/Parametros/Entrada/ListarUsuariosIn';
import { ModalComponent } from '../Modal/modal.component';
import { ModificarUsuarioIn } from 'src/app/Parametros/Entrada/ModificarUsuarioIn';
import { BajaUsuarioIn } from 'src/app/Parametros/Entrada/BajaUsuarioIn';
import { RecursosDeIdioma } from '../Constantes/constantes';

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
  @ViewChild("modal") modal: ModalComponent;

  constructor(private usuarioServicio: UsuarioService) {
    this.usuario = new Usuario;
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
    }, 1500)
  }

  /*Lista de usuario*/
  public get Usuarios(): Usuario[]
  {
    return this.usuarios;
  }
  public set Usuarios(value: Usuario[])
  {
    this.usuarios = value;
  }

  /*Usuario*/
  public get Usuario(): Usuario
  {
    return this.usuario;
  }
  public set Usuario(value: Usuario)
  {
    this.usuario = value;
  }


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
  }
  Ocultar()
  {
    this.EstaSeleccionado = !this.EstaSeleccionado;
  }

}
