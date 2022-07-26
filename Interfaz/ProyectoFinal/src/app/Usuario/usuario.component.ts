import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './Services/usuario.service';
import { Usuario } from './class/usuario';
import { AltaUsuarioIn } from '../Parametros/Entrada/AltaUsuarioIn';



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
    this.usuario.nombre = 'PEPITO';
    this.usuario.apellido = 'DIDIMAO';
    this.altaUsuarioIn.usuario = this.usuario;
    this.usuarioServicio.Agregar(this.altaUsuarioIn)
    .subscribe( usuario => console.log('Respuesta', usuario))

    
  }
}
