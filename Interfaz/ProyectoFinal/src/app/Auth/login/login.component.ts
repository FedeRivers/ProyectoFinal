import { Component, Input, OnInit, Output } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { LoginIn } from '../../Parametros/Entrada/LoginIn';
import * as CryptoJS from 'crypto-js';

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
  constructor(private usuarioServicio:UsuarioService) { 
    this.loginIn = new LoginIn();
  }
  
  ngOnInit(): void {
  }

  @Input()
  set Mail(value:string){
    this.loginIn.mail = value;
  }; 
  @Input()
  set Contrasena(value:string){
    this.loginIn.contrasena = value;
  };

  Login(){
    this.loginIn.contrasena = CryptoJS.AES.encrypt(this.loginIn.contrasena,"123").toString();
    this.usuarioServicio.Login(this.loginIn)
      .subscribe( usuario => console.log('Respuesta', usuario))
  }
} 






