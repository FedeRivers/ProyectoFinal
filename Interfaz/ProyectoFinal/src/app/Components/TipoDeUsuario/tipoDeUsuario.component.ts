import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoDeUsuarioService } from '../../Services/tipoDeUsuario.service';
import { ModalComponent } from '../Modal/modal.component';
import { TipoDeUsuario } from './class/tipoDeUsuario';
import { ListarTipoDeUsuarioIn } from '../../Parametros/Entrada/ListarTipoDeUsuarioIn';
import { ListarModulosPorTipoDeUsuarioIn } from 'src/app/Parametros/Entrada/ListarModulosPorTipoDeUsuarioIn';
import { Modulo } from '../Modulo/class/modulo';

@Component({
  selector: 'app-tipoDeUsuario',
  templateUrl: './tipoDeUsuario.component.html',
  styleUrls: ['./tipoDeUsuario.component.css']
})
export class TipoDeUsuarioComponent implements OnInit {

  private tipoDeUsuario: TipoDeUsuario;
  private tiposDeUsuario: TipoDeUsuario[];
  private modulos: Modulo[];
  private estaSeleccionado: boolean = false;
  private mensajeNombreInvalido: string = '';

  @ViewChild("modal") modal!: ModalComponent;
  
  constructor( private tipoDeUsuarioService:TipoDeUsuarioService ) {
    this.tipoDeUsuario = new TipoDeUsuario();
    this.tiposDeUsuario = [];
    this.modulos = [];
    this.Listar();
    this.modal = new ModalComponent();
   }
   
  ngOnInit(): void {
  }

  public get TipoDeUsuario(): TipoDeUsuario {
    return this.tipoDeUsuario;
  }
  public set TipoDeUsuario(value: TipoDeUsuario) {
    this.tipoDeUsuario = value;
  } 
  public get TiposDeUsuario(): TipoDeUsuario[] {
    return this.tiposDeUsuario;
  }
  public set TiposDeUsuario(value: TipoDeUsuario[]) {
    this.tiposDeUsuario = value;
  }
  public get Modulos(): Modulo[] {
    return this.modulos;
  }
  public set Modulos(value: Modulo[]) {
    this.modulos = value;
  }
  public get EstaSeleccionado(): boolean {
    return this.estaSeleccionado;
  }
  public set EstaSeleccionado(value: boolean) {
    this.estaSeleccionado = value;
  }
  public get MensajeNombreInvalido(): string {
    return this.mensajeNombreInvalido;
  }
  public set MensajeNombreInvalido(value: string) {
    this.mensajeNombreInvalido = value;
  }


  Listar()
  {
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
  
  ListarModulosPorTipoDeUsuario(tipoDeUsuario:TipoDeUsuario){
    let listarModulosPorTipoDeUsuarioIn:ListarModulosPorTipoDeUsuarioIn = new ListarModulosPorTipoDeUsuarioIn();
    listarModulosPorTipoDeUsuarioIn.IdTipoDeUsuario = tipoDeUsuario.IdTipoDeUsuario;
    this.tipoDeUsuario.Modulos = [];
    this.tipoDeUsuarioService.ListarModulosPorTipoDeUsuario(listarModulosPorTipoDeUsuarioIn)
    .subscribe( lista => {
      if(lista.Modulos!=undefined){
        lista.Modulos.forEach((valor : Modulo)=>{
          if(tipoDeUsuario.IdTipoDeUsuario!=null)
          {
            this.tipoDeUsuario.Modulos.push(valor);
          }
          else
          {
            this.modulos.push(valor);
          }
        })
      }
    },err => {
        this.modal.Mensaje = err;
        this.modal.Error = true;
        this.modal.open();
    });
  }

  Modificar(tipoDeUsuario:TipoDeUsuario)
  {

  }

  Seleccionar(tipoDeUsuario:TipoDeUsuario)
  {
    this.tipoDeUsuario.IdTipoDeUsuario = tipoDeUsuario.IdTipoDeUsuario;
    this.tipoDeUsuario.Nombre = tipoDeUsuario.Nombre;
    this.tipoDeUsuario.Active = tipoDeUsuario.Active;
    this.ListarModulosPorTipoDeUsuario(new TipoDeUsuario())
    this.ListarModulosPorTipoDeUsuario(tipoDeUsuario);
    this.Ocultar();

  }

  Regresar()
  {
    this.tipoDeUsuario = new TipoDeUsuario();
    this.Ocultar();
  }
  Ocultar()
  {
    this.EstaSeleccionado = !this.EstaSeleccionado;
  }

}
