import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from './class/usuario';

import { AltaUsuarioIn } from 'src/app/Parametros/Entrada/AltaUsuarioIn';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ListarUsuariosIn } from 'src/app/Parametros/Entrada/ListarUsuariosIn';
import { ModalComponent } from '../Modal/modal.component';
import { ModificarUsuarioIn } from 'src/app/Parametros/Entrada/ModificarUsuarioIn';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private usuario: Usuario;
  private altaUsuarioIn: AltaUsuarioIn;
  private modificarUsuarioIn: ModificarUsuarioIn;
  private usuarios: Usuario[] = [];
  private terminoDeBusqueda: string = "";
  @ViewChild("modal") modal!: ModalComponent;

  constructor(private usuarioServicio: UsuarioService) {
    this.usuario = new Usuario;
    this.altaUsuarioIn = new AltaUsuarioIn;
    this.modificarUsuarioIn = new ModificarUsuarioIn;
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


  Agregar()
  {
    this.usuario.Contrasena = '123456789';
    this.altaUsuarioIn.usuario = this.usuario;
    this.usuarioServicio.Agregar(this.altaUsuarioIn)
      .subscribe( usuario => {
        this.modal.Error = false;
        this.modal.open(); 
       }, err => {
         this.modal.Error = true;
         this.modal.open(); 
       });
  }


  Modificar()
  {
    this.modificarUsuarioIn.usuario = this.usuario;
    this.usuarioServicio.Modificar(this.modificarUsuarioIn)
      .subscribe( usuario => {
        this.modal.Error = false;
        this.modal.open(); 
       }, err => {
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


  Seleccionar(usuario:Usuario){}
}
