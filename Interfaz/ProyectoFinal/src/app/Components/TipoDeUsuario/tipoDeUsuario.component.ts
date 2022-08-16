import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoDeUsuarioService } from '../../Services/tipoDeUsuario.service';
import { ModalComponent } from '../Modal/modal.component';
import { TipoDeUsuario } from './class/tipoDeUsuario';
import { ListarTipoDeUsuarioIn } from '../../Parametros/Entrada/ListarTipoDeUsuarioIn';
import { ListarModulosPorTipoDeUsuarioIn } from 'src/app/Parametros/Entrada/ListarModulosPorTipoDeUsuarioIn';
import { Modulo } from '../Modulo/class/modulo';
import { RecursosDeIdioma } from '../Constantes/constantes';
import { AgregarModuloIn } from 'src/app/Parametros/Entrada/AgregarModuloIn';
import { EliminarModuloIn } from 'src/app/Parametros/Entrada/EliminarModuloIn';


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
    this.ListarModulosPorTipoDeUsuario(new TipoDeUsuario());
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
        if(tipoDeUsuario.IdTipoDeUsuario!=null)
        {
          this.tipoDeUsuario.Modulos = lista.Modulos;
          this.FiltrarListaDeModulos();
        }
        else
        {
          this.modulos = lista.Modulos;
        }
      }
    },err => {
        this.modal.Mensaje = err;
        this.modal.Error = true;
        this.modal.open();
    });
  }

  AgregarModulo(modulo:Modulo)
  {
    let agregarModuloIn:AgregarModuloIn = new AgregarModuloIn();
    agregarModuloIn.TipoDeUsuario = this.tipoDeUsuario;
    agregarModuloIn.Modulo = modulo;
    this.tipoDeUsuarioService.AgregarModulo(agregarModuloIn)
    .subscribe( resp => {
      this.tipoDeUsuario.Modulos.push(modulo);
      this.modulos = this.Modulos.filter(moduloAEliminar => moduloAEliminar.IdModulo != modulo.IdModulo);
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.TipoDeUsuario.AgregarModulo.ERROR,true);
     });
  }

  EliminarModulo(modulo:Modulo)
  {
    let eliminarModuloIn:EliminarModuloIn = new EliminarModuloIn();
    eliminarModuloIn.TipoDeUsuario = this.tipoDeUsuario;
    eliminarModuloIn.Modulo = modulo;
    this.tipoDeUsuarioService.EliminarModulo(eliminarModuloIn)
    .subscribe( resp => {
      this.modulos.push(modulo);
      this.tipoDeUsuario.Modulos = this.tipoDeUsuario.Modulos.filter( moduloAEliminar => moduloAEliminar.IdModulo != modulo.IdModulo);
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.TipoDeUsuario.EliminarModulo.ERROR,true);
     });
  }

  BotonModificar()
  {
    this.modal.open();
  }

  Seleccionar(tipoDeUsuario:TipoDeUsuario)
  {
    this.tipoDeUsuario = tipoDeUsuario
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

  FiltrarListaDeModulos()
  {
    this.tipoDeUsuario.Modulos.forEach(moduloTipoUsuario => {
      this.modulos = this.modulos.filter(modulo => moduloTipoUsuario.IdModulo != modulo.IdModulo);
    });
  }


}
