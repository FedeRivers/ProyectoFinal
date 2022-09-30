import { Component, OnInit, ViewChild } from '@angular/core';
import { ListarSobreIn } from 'src/app/Parametros/Entrada/ListarSobreIn';
import { ModificarSobreIn } from 'src/app/Parametros/Entrada/ModificarSobre';
import { SobreService } from 'src/app/Services/sobre.service';
import { Estados, RecursosDeIdioma } from '../Constantes/constantes';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { ModalComponent } from '../Modal/modal.component';
import { Sobre } from '../Sobre/class/sobre';

@Component({
  selector: 'app-ingresarHumedad',
  templateUrl: './ingresarHumedad.component.html',
  styleUrls: ['./ingresarHumedad.component.css']
})
export class IngresarHumedadComponent extends FormularioBase implements OnInit {
  
  private sobre: Sobre;
  private sobres: Sobre[];
  
  private listarSobreIn: ListarSobreIn;

  private humedadEsValida: boolean = false; 

  private mensajeHumedadInvalida: string = '';
  
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
  public get HumedadEsValida(): boolean {
    return this.humedadEsValida;
  }
  public set HumedadEsValida(value: boolean) {
    this.humedadEsValida = value;
  }
  //#endregion

  //#region Get y Set de mensajes de error para mostrar al usuario  
  public get MensajeHumedadInvalida(): string {
    return this.mensajeHumedadInvalida;
  }
  public set MensajeHumedadInvalida(value: string) {
    this.mensajeHumedadInvalida = value;
  }
  //#endregion
  
  IngresarHumedad()
  {
    let modificarSobreIn: ModificarSobreIn = new ModificarSobreIn();
    this.sobre.Estado.IdEstado = Estados.DESTRUIDO;
    this.sobre.Ubicacion.Camara.IdCamara = 2;
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
    this.listarSobreIn.IdEstado = Estados.ANALIZANDOHUMEDAD;
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
    this.BtnModificar = false;
    this.mensajeHumedadInvalida = '';
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

  ValidarHumedad():boolean
  {
    this.mensajeHumedadInvalida = this.ValidarPorcentaje(this.Sobre.Humedad);
    this.mensajeHumedadInvalida != '' ? this.humedadEsValida = false : this.humedadEsValida = true;
    return this.humedadEsValida;
  }
  
  ValidarFormulario():boolean
  {
    return this.humedadEsValida;
  }

  Confirmar()
  {
    if(this.BtnModificar)
    {
      this.IngresarHumedad();
    }
  }

  AbrirModal()
  {
    this.modal.open();
  }

}
