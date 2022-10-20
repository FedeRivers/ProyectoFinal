import { Component, OnInit, ViewChild } from '@angular/core';
import { AltaTaxonomiaIn } from 'src/app/Parametros/Entrada/AltaTaxonomiaIn';
import { BajaTaxonomiaIn } from 'src/app/Parametros/Entrada/BajaTaxonomiaIn';
import { ListarTaxonomiaIn } from 'src/app/Parametros/Entrada/ListarTaxonomiaIn';
import { ModificarTaxonomiaIn } from 'src/app/Parametros/Entrada/ModificarTaxonomiaIn';
import { TaxonomiaService } from 'src/app/Services/taxonomia.service';
import { RecursosDeIdioma } from '../Constantes/constantes';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { ModalComponent } from '../Modal/modal.component';
import { Taxonomia } from './class/taxonomia';

@Component({
  selector: 'app-taxonomia',
  templateUrl: './taxonomia.component.html',
  styleUrls: ['./taxonomia.component.css']
})
export class TaxonomiaComponent extends FormularioBase implements OnInit {
  
  private taxonomia: Taxonomia;
  private taxonomias: Taxonomia[];
  private terminoDeBusqueda: string='';
  private nombreEsValido:boolean = false;
  private mensajeNombreInvalido: string = '';

  @ViewChild("modal") modal: ModalComponent;

  constructor(private taxonomiaServicio: TaxonomiaService) {
    super();
    this.taxonomias = [];
    this.taxonomia = new Taxonomia();
    this.modal = new ModalComponent();
    this.Listar();
  }

  public get Taxonomia(): Taxonomia {
    return this.taxonomia;
  }
  public set Taxonomia(value: Taxonomia) {
    this.taxonomia = value;
  }
  
  public get Taxonomias(): Taxonomia[] {
    return this.taxonomias;
  }
  public set Taxonomias(value: Taxonomia[]) {
    this.taxonomias = value;
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

  ngOnInit(): void {
  }

  //#region Get y Set de validar datos introducidos por el usuario.
    public get NombreEsValido(): boolean {
      return this.nombreEsValido;
    }
    public set NombreEsValido(value: boolean) {
      this.nombreEsValido = value;
    }
  //#endregion

  //#region Get y Set de mensajes de error para mostrar al usuario
    public get MensajeNombreInvalido(): string {
      return this.mensajeNombreInvalido;
    }
    public set MensajeNombreInvalido(value: string) {
      this.mensajeNombreInvalido = value;
    }
  //#endregion

  AltaTaxonomia()
  {
    let altaTaxonomiaIn:AltaTaxonomiaIn = new AltaTaxonomiaIn();
    altaTaxonomiaIn.Taxonomia = this.taxonomia;
    this.taxonomiaServicio.Agregar(altaTaxonomiaIn)
    .subscribe( taxonomia => {
      this.modal.Confirmado = true;
      if(taxonomia.Status.StatusCode == 200)
      {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Taxonomia.Alta.EXITO,false)
      }
      else
      {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Taxonomia.Alta.EXISTENOMBRE,true)
      }
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Taxonomia.Alta.ERROR,true)
    });
  }

  BajaTaxonomia()
  {
    let bajaTaxonomiaIn:BajaTaxonomiaIn = new BajaTaxonomiaIn();
    bajaTaxonomiaIn.IdTaxonomia = this.taxonomia.IdTaxonomia;
    this.taxonomiaServicio.Baja(bajaTaxonomiaIn)
    .subscribe( taxonomia => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Taxonomia.Baja.EXITO,false)
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Taxonomia.Baja.ERROR,true)
    });
  }

  ModificarTaxonomia()
  {
    let modificarTaxonomiaIn:ModificarTaxonomiaIn = new ModificarTaxonomiaIn();
    modificarTaxonomiaIn.Taxonomia = this.taxonomia;
    this.taxonomiaServicio.Modificar(modificarTaxonomiaIn)
    .subscribe( taxonomia => {
      if(taxonomia.Status.StatusCode == 200)
      {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Taxonomia.Modificar.EXITO,false)
      }
      else
      {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Taxonomia.Modificar.EXISTENOMBRE,true)
      }
     }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Taxonomia.Modificar.ERROR,true)
    });
  }

  Listar()
  {
    let listarTaxonomiaIn: ListarTaxonomiaIn = new ListarTaxonomiaIn();
    listarTaxonomiaIn.terminoDeBusqueda = this.terminoDeBusqueda;
    this.taxonomias = [];
    this.taxonomiaServicio.Listar(listarTaxonomiaIn)
      .subscribe(lista => {
        if (lista.Taxonomias != undefined) {
            this.taxonomias = lista.Taxonomias
          }
      }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Taxonomia.Listar.ERROR,true)
    });
  }

  Seleccionar(taxonomia:Taxonomia)
  {
    this.taxonomia = taxonomia;
    this.Ocultar();
  }
  
  Regresar()
  {
    this.Limpiar();
    this.Listar();
    this.Ocultar();
  }

  Limpiar()
  {
    this.taxonomia = new Taxonomia();
    this.BtnAlta = false;
    this.BtnBaja = false;
    this.BtnModificar = false;
    this.nombreEsValido = false;
  }

  BotonSeleccionado(boton:string)
  {
    switch(boton)
    {
      case "Alta":
        this.BtnAlta = true;
        break;
      case "Baja":
        this.BtnBaja = true;
        break;
      case "Modificar":
        this.BtnModificar = true;
        break;
    }
  }

  ValidarNombre():boolean
  {
    this.mensajeNombreInvalido = this.ValidarLetrasNumerosEspaciosYPunto(this.Taxonomia.Nombre);
    this.mensajeNombreInvalido != '' ? this.nombreEsValido = false : this.nombreEsValido = true;
    return this.nombreEsValido;
  }

  ValidarFormulario():boolean
  {
    return this.nombreEsValido;
  }

  Confirmar(){
    if(this.BtnAlta)
    {
      this.AltaTaxonomia();
    }
    else if(this.BtnBaja)
    {
      this.BajaTaxonomia();
    }
    else
    {
      this.ModificarTaxonomia();
    }
  }

  AbrirModal(){
    this.modal.open();
  }

}
