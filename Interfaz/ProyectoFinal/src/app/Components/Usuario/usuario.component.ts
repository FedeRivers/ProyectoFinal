import { Component, OnInit } from '@angular/core';
import { Usuario } from './class/usuario';

import { AltaUsuarioIn } from 'src/app/Parametros/Entrada/AltaUsuarioIn';
import { UsuarioService } from 'src/app/Services/usuario.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  private usuario : Usuario; 
  private altaUsuarioIn:AltaUsuarioIn;
  constructor( private usuarioServicio:UsuarioService )
  {
    this.usuario = new Usuario;
    this.altaUsuarioIn = new AltaUsuarioIn;
  }

  ngOnInit(): void {
  }

  

  Agregar(event:Event){
    this.usuario.Nombre = 'PEPITO';
    this.usuario.Apellido = 'DIDIMAO';
    this.altaUsuarioIn.usuario = this.usuario;
    this.usuarioServicio.Agregar(this.altaUsuarioIn)
    .subscribe( usuario => {
      console.log('Respuesta', usuario);
    }, err => {
      console.log(err);
    }
    );

    
  }
}
