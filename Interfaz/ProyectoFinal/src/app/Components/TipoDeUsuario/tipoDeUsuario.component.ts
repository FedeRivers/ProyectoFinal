import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoDeUsuarioService } from '../../Services/tipoDeUsuario.service';
import { ModalComponent } from '../Modal/modal.component';
import { Usuario } from '../Usuario/class/usuario';
import { TipoDeUsuario } from './class/tipoDeUsuario';
import { ListarTipoDeUsuarioIn } from '../../Parametros/Entrada/ListarTipoDeUsuarioIn';

@Component({
  selector: 'app-tipoDeUsuario',
  templateUrl: './tipoDeUsuario.component.html',
  styleUrls: ['./tipoDeUsuario.component.css']
})
export class TipoDeUsuarioComponent implements OnInit {

  private tiposDeUsuario: TipoDeUsuario[] = [];
 
  @ViewChild("modal") modal!: ModalComponent;
  
  constructor( private tipoDeUsuarioService:TipoDeUsuarioService ) {
    this.Listar();
    this.modal = new ModalComponent();
   }
   
  ngOnInit(): void {
  }


  public get TiposDeUsuario(): TipoDeUsuario[] {
    return this.tiposDeUsuario;
  }
  public set TiposDeUsuario(value: TipoDeUsuario[]) {
    this.tiposDeUsuario = value;
  }

  Listar(){
    let listarTipoDeUsuarioIn:ListarTipoDeUsuarioIn;
    listarTipoDeUsuarioIn = new ListarTipoDeUsuarioIn();
    this.tiposDeUsuario = [];
    this.tipoDeUsuarioService.ListarTipoDeUsuario(listarTipoDeUsuarioIn)
    .subscribe( lista => {
      if(lista.TiposDeUsuario!=undefined){
         lista.TiposDeUsuario.forEach(( valor : TipoDeUsuario)=>{
          this.tiposDeUsuario.push(valor);
        })
      }
    }, err => {
         this.modal.Mensaje = err;
         this.modal.Error = true;
         this.modal.open(); 
    });
  }
}
