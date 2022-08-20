import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { LoginIn } from '../../Parametros/Entrada/LoginIn';
import * as CryptoJS from 'crypto-js';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from 'src/app/Components/Usuario/class/usuario';
import { Keys } from '../../Components/Constantes/constantes';

/**
 * @title Input with error messages
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private loginIn:LoginIn;
  private usuario: Usuario;
  private loginValido:EventEmitter<Usuario>;

  constructor(private usuarioServicio:UsuarioService) { 
    this.loginIn = new LoginIn();
    this.usuario = new Usuario();
    this.loginValido = new EventEmitter();
  }
  
  ngOnInit(): void {
  }

  public get Usuario(): Usuario {
    return this.usuario;
  }
  public set Usuario(value: Usuario) {
    this.usuario = value;
  }


  @Input()
  set Mail(value:string){
    this.loginIn.mail = value;
  }; 
  @Input()
  set Contrasena(value:string){
    this.loginIn.contrasena = value;
  };

  @Output()
  get LoginValido()
  {
    return this.loginValido;
  }


  Login(){
    /*this.loginIn.contrasena = CryptoJS.AES.encrypt(this.loginIn.contrasena,"123").toString();
    this.usuarioServicio.Login(this.loginIn)
      .subscribe( usuario => console.log('Respuesta', usuario))*/
    this.usuarioServicio.Login(this.loginIn)
      .subscribe( loginOut => {
        this.loginValido.emit(loginOut.Usuario);
      })
  }

  /*
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
  }*/
} 






