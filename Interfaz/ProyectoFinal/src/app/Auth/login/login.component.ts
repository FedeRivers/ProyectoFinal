import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { LoginIn } from '../../Parametros/Entrada/LoginIn';
import * as CryptoJS from 'crypto-js';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from 'src/app/Components/Usuario/class/usuario';


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
  private loading: boolean = false;


  constructor(private usuarioServicio:UsuarioService) { 
    this.usuario = new Usuario();
    this.loginIn = new LoginIn();
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

  public get Loading(): boolean {
    return this.loading;
  }
  public set Loading(value: boolean) {
    this.loading = value;
  }


  @Input()
  set Mail(value:string){
    this.loginIn.mail = value;
  }; 
  @Input()
  set Contrasena(value:string){
    if(value!="")
    {
      this.loginIn.contrasena = CryptoJS.SHA256(value).toString(); 
    }
    else
    {
      this.loginIn.contrasena = value;
    }
  };

  @Output()
  get LoginValido()
  {
    return this.loginValido;
  }

  Login(){
    this.loading = true;
    this.usuarioServicio.Login(this.loginIn)
      .subscribe( loginOut => {
        this.usuario = loginOut.Usuario;
        this.loginValido.emit(loginOut.Usuario);
        this.loading = false;
    })
    
  }
} 






