import { Component, OnInit, ViewChild } from '@angular/core';
import { ListarSobreIn } from 'src/app/Parametros/Entrada/ListarSobreIn';
import { ModificarSobreIn } from 'src/app/Parametros/Entrada/ModificarSobre';
import { SobreService } from 'src/app/Services/sobre.service';
import { RecursosDeIdioma, Estados } from '../Constantes/constantes';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { ModalComponent } from '../Modal/modal.component';
import { Sobre } from '../Sobre/class/sobre';

@Component({
  selector: 'app-ingresar-germinacion',
  templateUrl: './ingresarGerminacion.component.html',
  styleUrls: ['./ingresarGerminacion.component.css']
})
export class IngresarGerminacionComponent extends FormularioBase implements OnInit {

  private sobre: Sobre;
  private sobres: Sobre[];
  
  private listarSobreIn: ListarSobreIn;
  private cantidadDeSemillasGerminadas!: number;
  private cantidadDeSemillasEsValido: boolean = false;
  private cantidadDeSemillasGerminadasEsValido: boolean = false;
  private cantidadDeSemillasDeshabilitado: boolean = false;
  private mensajeCantidadSemillasInvalido: string = '';
  private mensajeCantidadSemillasGerminadasInvalido: string = '';

  @ViewChild("modal") modal: ModalComponent;

  constructor(private sobreServicio: SobreService) {
    super();
    this.listarSobreIn = new ListarSobreIn();
    this.modal = new ModalComponent();
    this.sobre = new Sobre();
    this.sobres = [];
    this.Listar();
  }

  ngOnInit(): void {
  }

  public set NumeroSobre(value: number) {
    this.listarSobreIn.NumeroSobre = value;
    setTimeout(() => {
      this.Listar();
    },1000)
  }

  // #region Get y Set de sobre y lista de sobres
  public get Sobre(): Sobre {
    return this.sobre;
  }
  public set Sobre(value: Sobre) {
    this.sobre = value;
  }
  public get Sobres(): Sobre[] {
    return this.sobres;
  }
  public set Sobres(value: Sobre[]) {
    this.sobres = value;
  }
  public get CantidadDeSemillasGerminadas(): number {
    return this.cantidadDeSemillasGerminadas;
  }
  public set CantidadDeSemillasGerminadas(value: number){
    if(value == null)
    {
      this.cantidadDeSemillasGerminadas = 0;
    }
    else
    {
      this.cantidadDeSemillasGerminadas = value;
    }
    this.CalcularGerminacion();
  }
  //#endregion

  //#region Get y Set de validar datos introducidos por el usuario.
  public get CantidadDeSemillasGerminadasEsValido(): boolean {
    return this.cantidadDeSemillasGerminadasEsValido;
  }
  public set CantidadDeSemillasGerminadasEsValido(value: boolean) {
    this.cantidadDeSemillasGerminadasEsValido = value;
  }
  public get CantidadDeSemillasDeshabilitado(): boolean {
    return this.cantidadDeSemillasDeshabilitado;
  }
  public set CantidadDeSemillasDeshabilitado(value: boolean) {
    this.cantidadDeSemillasDeshabilitado = value;
  }
  //#endregion

  //#region Get y Set de mensajes de error para mostrar al usuario
  public get MensajeCantidadSemillasInvalido(): string {
    return this.mensajeCantidadSemillasInvalido;
  }
  public set MensajeCantidadSemillasInvalido(value: string) {
    this.mensajeCantidadSemillasInvalido = value;
  }
  public get MensajeCantidadSemillasGerminadasInvalido(): string {
    return this.mensajeCantidadSemillasGerminadasInvalido;
  }
  public set MensajeCantidadSemillasGerminadasInvalido(value: string) {
    this.mensajeCantidadSemillasGerminadasInvalido = value;
  }
  //#endregion
  
  IngresarGerminacion()
  {
    let modificarSobreIn: ModificarSobreIn = new ModificarSobreIn();
    if(this.cantidadDeSemillasDeshabilitado)
    {
      this.sobre.Estado.IdEstado = Estados.DESTRUIDO;
      this.sobre.Ubicacion.Camara.IdCamara = 3; 
    }

    modificarSobreIn.Sobre = this.sobre;
    this.sobreServicio.Modificar(modificarSobreIn)
      .subscribe( sobre => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.ERROR,true);
      });
  }

  CalcularGerminacion()
  {
    if(this.cantidadDeSemillasDeshabilitado)
    {
      this.sobre.Germinacion = this.cantidadDeSemillasGerminadas * 100 / this.sobre.CantidadDeSemillas;
    }
    else
    {
      this.sobre.Vigor = this.cantidadDeSemillasGerminadas * 100 / this.sobre.CantidadDeSemillas;
    }
  }

  Listar()
  {
    this.listarSobreIn.IdEstado = Estados.GERMINANDO;
    this.sobres = [];
    this.sobreServicio.Listar(this.listarSobreIn)
      .subscribe( lista => {
        if (lista.Sobres != undefined) {
            this.sobres = lista.Sobres;
          }
      }, err => {
        this.modal.Error = true;
        this.modal.open();
    });
  }

  Seleccionar(sobre:Sobre)
  {
    this.sobre = sobre;
    this.cantidadDeSemillasDeshabilitado = this.sobre.CantidadDeSemillas!=undefined; 
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
    this.sobre= new Sobre();
    this.BtnAlta = false;
    this.BtnBaja = false;
    this.BtnModificar = false;
  }

  BotonSeleccionado(boton:string)
  {
    switch(boton)
    {
      case "Modificar":
        this.BtnModificar = true;
        break;
    }
  }

  ValidarCantidadDeSemillas():boolean
  {
    this.mensajeCantidadSemillasInvalido = this.ValidarPorcentaje(this.Sobre.CantidadDeSemillas);
    this.mensajeCantidadSemillasInvalido != '' ? this.cantidadDeSemillasEsValido = false : this.cantidadDeSemillasEsValido = true;
    return this.cantidadDeSemillasEsValido;
  }

  ValidarSemillasGerminadas():boolean
  {
    this.mensajeCantidadSemillasGerminadasInvalido = this.ValidarPorcentaje(this.cantidadDeSemillasGerminadas);
    if(this.mensajeCantidadSemillasGerminadasInvalido != '')
    {
      this.cantidadDeSemillasGerminadasEsValido = false;
    }
    else if(this.cantidadDeSemillasGerminadas > this.sobre.CantidadDeSemillas)
    {
      this.cantidadDeSemillasGerminadasEsValido = false;
      this.MensajeCantidadSemillasGerminadasInvalido = RecursosDeIdioma.MensajesFormularios.CAMPO_INVALIDO
    }
    else
    {
      this.cantidadDeSemillasGerminadasEsValido = true;
    }
    return this.cantidadDeSemillasGerminadasEsValido;
  }


  
  ValidarFormulario():boolean
  {
    return this.cantidadDeSemillasEsValido && this.cantidadDeSemillasGerminadasEsValido;
  }

  Confirmar()
  {
    if(this.BtnModificar)
    {
      this.IngresarGerminacion();
    }
  }

  AbrirModal()
  {
    this.modal.open();
  }

}
