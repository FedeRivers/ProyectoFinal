import { Component, OnInit, ViewChild } from '@angular/core';
import { AltaSemillaIn } from 'src/app/Parametros/Entrada/AltaSemillaIn';
import { BajaSemillaIn } from 'src/app/Parametros/Entrada/BajaSemillaIn';
import { ListarSemillaIn } from 'src/app/Parametros/Entrada/ListarSemillaIn';
import { ListarTaxonomiaIn } from 'src/app/Parametros/Entrada/ListarTaxonomiaIn';
import { ModificarSemillaIn } from 'src/app/Parametros/Entrada/ModificarSemillaIn';
import { SemillaService } from 'src/app/Services/semilla.service';
import { TaxonomiaService } from 'src/app/Services/taxonomia.service';
import { RecursosDeIdioma } from '../Constantes/constantes';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { ModalComponent } from '../Modal/modal.component';
import { Taxonomia } from '../Taxonomia/class/taxonomia';
import { Semilla } from './class/semilla';


@Component({
  selector: 'app-semilla',
  templateUrl: './semilla.component.html',
  styleUrls: ['./semilla.component.css']
})
export class SemillaComponent extends FormularioBase implements OnInit {

  private semilla: Semilla;
  private semillas: Semilla[];
  private taxonomias: Taxonomia[] = [];
  private terminoDeBusqueda: string = "";

  private nombreEsValido: boolean = false; 
  private taxonomiaEsValida: boolean = false; 

  private mensajeNombreInvalido: string = '';
  private mensajeTaxonomiaInvalida: string = '';

  
  @ViewChild("modal") modal: ModalComponent;

  constructor(private semillaServicio: SemillaService, private taxonomiaServicio:TaxonomiaService) {
    super();
    this.semilla = new Semilla();
    this.semillas = [];
    this.taxonomias = [];
    this.Listar();
    this.modal = new ModalComponent();
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
    },500)
  }


  // #region Get y Set de usuario y lista de usuarios

  public get Semilla(): Semilla {
    return this.semilla;
  }
  public set Semilla(value: Semilla) {
    this.semilla = value;
  }
  public get Semillas(): Semilla[] {
    return this.semillas;
  }
  public set Semillas(value: Semilla[]) {
    this.semillas = value;
  }
  public get Taxonomias(): Taxonomia[] {
    return this.taxonomias;
  }
  public set Taxonomias(value: Taxonomia[]) {
    this.taxonomias = value;
  }
  //#endregion

  //#region Get y Set de validar datos introducidos por el usuario.
  public get NombreEsValido(): boolean {
    return this.nombreEsValido;
  }
  public set NombreEsValido(value: boolean) {
    this.nombreEsValido = value;
  }
  public get TaxonomiaEsValida(): boolean {
    return this.taxonomiaEsValida;
  }
  public set TaxonomiaEsValida(value: boolean) {
    this.taxonomiaEsValida = value;
  }
  //#endregion

  //#region Get y Set de mensajes de error para mostrar al usuario
  public get MensajeNombreInvalido(): string {
    return this.mensajeNombreInvalido;
  }
  public set MensajeNombreInvalido(value: string) {
    this.mensajeNombreInvalido = value;
  }
  public get MensajetaxonomiaInvalida(): string {
    return this.mensajeTaxonomiaInvalida;
  }
  public set MensajetaxonomiaInvalida(value: string) {
    this.mensajeTaxonomiaInvalida = value;
  }

  //#endregion
  
  AltaSemilla()
  {
    let altaSemillaIn: AltaSemillaIn = new AltaSemillaIn();
    altaSemillaIn.Semilla = this.semilla;
    this.semillaServicio.Agregar(altaSemillaIn)
      .subscribe( semilla => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Semilla.Alta.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Semilla.Alta.ERROR,true);
      });
  }

  BajaSemilla()
  {
    let bajaSemillaIn: BajaSemillaIn = new BajaSemillaIn();
    bajaSemillaIn.IdSemilla = this.semilla.IdSemilla;
    this.semillaServicio.Baja(bajaSemillaIn)
    .subscribe( semilla => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Semilla.Baja.EXITO,false);
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Semilla.Baja.ERROR,true);
     });
  }

  ModificarSemilla()
  {
    let modificarSemillaIn: ModificarSemillaIn = new ModificarSemillaIn();
    modificarSemillaIn.Semilla = this.semilla;
    this.semillaServicio.Modificar(modificarSemillaIn)
      .subscribe( semilla => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Semilla.Modificar.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Semilla.Modificar.ERROR,true);
      });
  }

  Listar()
  {
    let listarSemillaIn: ListarSemillaIn = new ListarSemillaIn();
    listarSemillaIn.terminoDeBusqueda = this.terminoDeBusqueda;
    this.semillas = [];
    this.semillaServicio.Listar(listarSemillaIn)
      .subscribe( lista => {
        if (lista.Semillas != undefined) {
            this.semillas = lista.Semillas;
          }
      }, err => {
        this.modal.Error = true;
        this.modal.open();
    });
  }

  ListarTaxonomias()
  {
    this.taxonomias = [];
    this.taxonomiaServicio.Listar(new ListarTaxonomiaIn())
      .subscribe( lista =>{
        if(lista.Taxonomias!=undefined) {
          this.taxonomias = lista.Taxonomias;
        }
      }, err => {
        this.modal.Error = true;
        this.modal.open();
    });
  }

  Seleccionar(semilla:Semilla)
  {
    this.semilla = semilla;
    this.Ocultar();
  }

 Regresar()
  {
    this.Listar();
    this.Ocultar();
    this.Limpiar();
  }

  Limpiar()
  {
    this.semilla= new Semilla();
    this.BtnAlta = false;
    this.BtnBaja = false;
    this.BtnModificar = false;
    this.mensajeNombreInvalido = '';
    this.mensajeTaxonomiaInvalida = '';
  }

  BotonSeleccionado(boton:string)
  {
    switch(boton)
    {
      case "Alta":
        this.BtnAlta = true;
        this.ListarTaxonomias();
        break;
      case "Baja":
        this.BtnBaja = true;
        break;
      case "Modificar":
        this.BtnModificar = true;
        this.ListarTaxonomias();
        break;
    }
  }

  ValidarNombre():boolean
  {
    this.mensajeNombreInvalido = this.ValidarLetras(this.semilla.Nombre);
    this.mensajeNombreInvalido != '' ? this.nombreEsValido = false : this.nombreEsValido = true;
    return this.nombreEsValido;
  }

  ValidarTaxonomia():boolean
  {
    this.mensajeTaxonomiaInvalida = this.ValidarNumero(this.semilla.Taxonomia.IdTaxonomia.toString());
    this.mensajeTaxonomiaInvalida != '' ? this.taxonomiaEsValida = false: this.taxonomiaEsValida = true;
    return this.taxonomiaEsValida;
  }
  
  ValidarFormulario():boolean
  {
    return this.nombreEsValido && this.taxonomiaEsValida;
  }

  Confirmar()
  {
    if(this.BtnAlta)
    {
      this.AltaSemilla();
    }
    else if(this.BtnBaja)
    {
      this.BajaSemilla();
    }
    else
    {
      this.ModificarSemilla();
    }
  }

  AbrirModal()
  {
    this.modal.open();
  }

}
