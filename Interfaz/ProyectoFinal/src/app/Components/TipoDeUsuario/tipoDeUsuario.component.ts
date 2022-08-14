import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoDeUsuarioService } from '../../Services/tipoDeUsuario.service';
import { ModalComponent } from '../Modal/modal.component';
import { TipoDeUsuario } from './class/tipoDeUsuario';
import { ListarTipoDeUsuarioIn } from '../../Parametros/Entrada/ListarTipoDeUsuarioIn';
import { ListarModulosPorTipoDeUsuarioIn } from 'src/app/Parametros/Entrada/ListarModulosPorTipoDeUsuarioIn';
import { Modulo } from '../Modulo/class/modulo';
import { ModificarTipoDeUsuarioIn } from 'src/app/Parametros/Entrada/ModificarTipoDeUsuario';
import { RecursosDeIdioma } from '../Constantes/constantes';


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

  ModificarTipoDeUsuario()
  {
    let modificarTipoDeUsuarioIn:ModificarTipoDeUsuarioIn = new ModificarTipoDeUsuarioIn();
    modificarTipoDeUsuarioIn.Modulos = this.tipoDeUsuario.Modulos;
    this.tipoDeUsuarioService.ModificarTipoDeUsuario(modificarTipoDeUsuarioIn)
    .subscribe( tipoDeUsuario => {
      this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.TipoDeUsuario.Modificar.EXITO;
      this.modal.Error = false;
      this.modal.open(); 
     }, err => {
       this.modal.Mensaje = RecursosDeIdioma.MensajesServicios.TipoDeUsuario.Modificar.ERROR;
       this.modal.Error = true;
       this.modal.open(); 
     });

  }

  BotonModificar()
  {
    this.modal.open();
  }

  Seleccionar(tipoDeUsuario:TipoDeUsuario)
  {
    this.tipoDeUsuario.IdTipoDeUsuario = tipoDeUsuario.IdTipoDeUsuario;
    this.tipoDeUsuario.Nombre = tipoDeUsuario.Nombre;
    this.tipoDeUsuario.Active = tipoDeUsuario.Active;
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

  AgregarModuloATipoDeUsuario(modulo:Modulo)//Agrega un módulo a la lista de módulos que tiene un tipo de usuario
  {
    this.tipoDeUsuario.Modulos.push(modulo);
    this.modulos.splice(this.modulos.indexOf(modulo),1);
  }

  QuitarModuloATipoDeUsuario(modulo:Modulo)//Quita un módulo a la lista de módulos que tiene un tipo de usuario
  {
    this.modulos.push(modulo);
    this.tipoDeUsuario.Modulos.splice(this.tipoDeUsuario.Modulos.indexOf(modulo),1);
  }


  FiltrarListaDeModulos()
  {
    this.tipoDeUsuario.Modulos.forEach(moduloTipoUsuario => {
      this.modulos = this.modulos.filter(modulo => moduloTipoUsuario.IdModulo != modulo.IdModulo);
    });
  }


}
