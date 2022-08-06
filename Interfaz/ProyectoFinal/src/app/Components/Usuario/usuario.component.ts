import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from './class/usuario';

import { AltaUsuarioIn } from 'src/app/Parametros/Entrada/AltaUsuarioIn';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { ListarUsuariosIn } from 'src/app/Parametros/Entrada/ListarUsuariosIn';
import { ModalComponent } from '../Modal/modal.component';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private usuario: Usuario;
  private altaUsuarioIn: AltaUsuarioIn;
  private usuarios: Usuario[] = [];
  private terminoDeBusqueda: string = "";
  
  @ViewChild("modal") modal: ModalComponent;
  constructor(private usuarioServicio: UsuarioService) {
    this.usuario = new Usuario;
    this.altaUsuarioIn = new AltaUsuarioIn;
    this.modal = new ModalComponent();
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
  public get Usuarios(): Usuario[] {
    return this.usuarios;
  }
  public set Usuarios(value: Usuario[]) {
    this.usuarios = value;
  }

  /*Usuario*/
  public get Usuario(): Usuario {
    return this.usuario;
  }
  public set Usuario(value: Usuario) {
    this.usuario = value;
  }


  Agregar(event: Event) {
    this.usuario.Contrasena = '123456789';
    this.altaUsuarioIn.usuario = this.usuario;
    this.usuarioServicio.Agregar(this.altaUsuarioIn)
      .subscribe(usuario => {
        console.log('Respuesta', usuario);
      }, err => {
        console.log(err);
      });
  }

  Listar() {
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
