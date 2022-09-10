import { Component, OnInit, ViewChild } from '@angular/core';
import { ListarSobreIn } from 'src/app/Parametros/Entrada/ListarSobreIn';
import { ModificarSobreIn } from 'src/app/Parametros/Entrada/ModificarSobre';
import { SobreService } from 'src/app/Services/sobre.service';
import { RecursosDeIdioma } from '../Constantes/constantes';
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

  private germinacionEsValido: boolean = false; 
  private vigorEsValido: boolean = false;
  private vigorDeshabilitado: boolean = false;
  private mensajeGerminacionInvalida: string = '';
  private mensajeVigorInvalido: string = '';

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
  //#endregion

  //#region Get y Set de validar datos introducidos por el usuario.
  public get GerminacionEsValido(): boolean {
    return this.germinacionEsValido;
  }
  public set GerminacionEsValido(value: boolean) {
    this.germinacionEsValido = value;
  }
  public get VigorEsValido(): boolean {
    return this.vigorEsValido;
  }
  public set VigorEsValido(value: boolean) {
    this.vigorEsValido = value;
  }
  public get VigorDeshabilitado(): boolean {
    return this.vigorDeshabilitado;
  }
  public set VigorDeshabilitado(value: boolean) {
    this.vigorDeshabilitado = value;
  }
  //#endregion

  //#region Get y Set de mensajes de error para mostrar al usuario

  public get MensajeGerminacionInvalida(): string {
    return this.mensajeGerminacionInvalida;
  }
  public set MensajeGerminacionInvalida(value: string) {
    this.mensajeGerminacionInvalida = value;
  }

  public get MensajeVigorInvalido(): string {
    return this.mensajeVigorInvalido;
  }
  public set MensajeVigorInvalido(value: string) {
    this.mensajeVigorInvalido = value;
  }

  //#endregion
  
  IngresarGerminacion()
  {
    let modificarSobreIn: ModificarSobreIn = new ModificarSobreIn();
    modificarSobreIn.Sobre = this.sobre;
    this.sobreServicio.Modificar(modificarSobreIn)
      .subscribe( sobre => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.EXITO,false);
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.ERROR,true);
      });
  }

  Listar()
  {
    let listarSobreIn: ListarSobreIn = new ListarSobreIn();
    listarSobreIn.IdEstado = 4;
    this.sobres = [];
    this.sobreServicio.Listar(listarSobreIn)
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
    this.vigorDeshabilitado = this.sobre.Vigor!=undefined; 
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
    this.mensajeVigorInvalido = '';
    this.mensajeGerminacionInvalida = '';
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

  ValidarVigor():boolean
  {
    this.mensajeGerminacionInvalida = this.ValidarNumero(this.Sobre.Vigor.toString());
    this.mensajeGerminacionInvalida != '' ? this.vigorEsValido = false : this.vigorEsValido = true;
    return this.vigorEsValido;
  }

  ValidarGerminacion():boolean
  {
    this.mensajeGerminacionInvalida = this.ValidarNumero(this.sobre.Germinacion.toString());
    this.mensajeGerminacionInvalida != '' ? this.germinacionEsValido = false: this.germinacionEsValido = true;
    return this.germinacionEsValido;
  }
  
  ValidarFormulario():boolean
  {
    return this.vigorEsValido && !this.vigorDeshabilitado || this.vigorDeshabilitado && this.germinacionEsValido;
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
