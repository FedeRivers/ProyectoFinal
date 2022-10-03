import { Component, OnInit, ViewChild } from '@angular/core';
import { ListarEstadosIn } from 'src/app/Parametros/Entrada/ListarEstadosIn';
import { ListarSobreIn } from 'src/app/Parametros/Entrada/ListarSobreIn';
import { ModificarSobreIn } from 'src/app/Parametros/Entrada/ModificarSobre';
import { EstadoService } from 'src/app/Services/estados.service';
import { SobreService } from 'src/app/Services/sobre.service';
import { Camaras, Estados, RecursosDeIdioma } from '../Constantes/constantes';
import { Estado } from '../Estado/class/estado';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { Lote } from '../Lote/class/lote';
import { ModalComponent } from '../Modal/modal.component';
import { Semilla } from '../Semilla/class/semilla';
import { Usuario } from '../Usuario/class/usuario';
import { Sobre } from 'src/app/Components/Sobre/class/sobre';
import * as XLSX from 'xlsx';
import { ExportarExcelIn } from '../../Parametros/Entrada/ExportarExcelIn';

@Component({
  selector: 'app-secado',
  templateUrl: './secado.component.html',
  styleUrls: ['./secado.component.css']
})
export class SecadoComponent  extends FormularioBase implements OnInit {

  private sobre: Sobre;
  private sobres: Sobre[];
  private sobresAExportar: Sobre[];
  
  private estado: Estado;
  private estados: Estado[];
  
  private semilla: Semilla;

  private lote: Lote;
  
  private idTipoDeUsuario:number; 

  private listarSobreIn: ListarSobreIn;
  
  private btnTomarHumedad: boolean = false;
  private btnIngresarPeso: boolean = false;
  private pesoEsValido: boolean = false;

  private mensajePesoInvalido: string = '';

  @ViewChild("modal") modal: ModalComponent;

  constructor(private sobreServicio: SobreService,private estadoService: EstadoService)
  {
    super();
    let usuario:Usuario = JSON.parse(sessionStorage.getItem('usuario')!); 
    this.idTipoDeUsuario =  usuario.TipoDeUsuario.IdTipoDeUsuario;
    this.listarSobreIn = new ListarSobreIn();
    this.modal = new ModalComponent();
    this.semilla = new Semilla();
    this.estado = new Estado();
    this.sobre = new Sobre();
    this.lote = new Lote();
    this.estados = [];
    this.sobres = [];
    this.sobresAExportar = [];
    this.ListarSobres();
    this.ListarEstados();
  }

  ngOnInit(): void {
  }

  public set NumeroSobre(value: number) {
    this.listarSobreIn.NumeroSobre = value;
    setTimeout(() => {
      this.ListarSobres();
    },1000)
  }

  public set NumeroLote(value: number) {
    this.listarSobreIn.NumeroLote = value;
    setTimeout(() => {
      this.ListarSobres();
    },1000)
  }

  public set NombreSemilla(value: string) {
    this.listarSobreIn.NombreSemilla = value;
    setTimeout(() => {
      this.ListarSobres();
    },1000)
  }
  
  public set EstadoSobre(value: number){
    this.listarSobreIn.IdEstado = value;
    setTimeout(() => {
      this.ListarSobres();
    },1000)
  }

  public set Camara(value: number){
    this.listarSobreIn.IdCamara = value;
    setTimeout(() => {
      this.ListarSobres();
    },1000)
  }


  // #region Get y Set de sobres, items, semilla, lotes y estados.
  public get Sobres(): Sobre[] {
    return this.sobres;
  }
  public set Sobres(value: Sobre[]) {
    this.sobres = value;
  }
  public get Sobre(): Sobre {
    return this.sobre;
  }
  public set Sobre(value: Sobre) {
    this.sobre = value;
  }
  public get Semilla(): Semilla {
    return this.semilla;
  }
  public set Semilla(value: Semilla) {
    this.semilla = value;
  }
  public get Estados(): Estado[] {
    return this.estados;
  }
  public set Estados(value: Estado[]) {
    this.estados = value;
  }
  public get Lote(): Lote {
    return this.lote;
  }
  public set Lote(value: Lote) {
    this.lote = value;
  }
  public get SobresAExportar(): Sobre[] {
    return this.sobresAExportar;
  }
  public set SobresAExportar(value: Sobre[]) {
    this.sobresAExportar = value;
  }
  public get PesoEsValido(): boolean {
    return this.pesoEsValido;
  }
  public set PesoEsValido(value: boolean) {
    this.pesoEsValido = value;
  }
  public get MensajePesoInvalido(): string {
    return this.mensajePesoInvalido;
  }
  public set MensajePesoInvalido(value: string) {
    this.mensajePesoInvalido = value;
  }
  public get BtnTomarHumedad(): boolean {
    return this.btnTomarHumedad;
  }
  public set BtnTomarHumedad(value: boolean) {
    this.btnTomarHumedad = value;
  }
  //#endregion

  ModificarSobre()
  {
    let modificarSobreIn: ModificarSobreIn = new ModificarSobreIn();
    this.sobre.Estado = this.estado;
    modificarSobreIn.Sobre = this.sobre;
    modificarSobreIn.IdTipoDeUsuario = this.idTipoDeUsuario;
    this.sobreServicio.Modificar(modificarSobreIn)
      .subscribe( resp => {
        resp.CamaraLlena ? this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.CAMARALLENA,true) 
         : this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.EXITO,false);
         this.ListarSobres();
       }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Modificar.ERROR,true);
      });
  }

  ListarSobres()
  {
    this.sobres = [];
    this.listarSobreIn.IdCamara = 1;
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

  ListarEstados()
  {
    this.estados = [];
    this.estadoService.Listar(new ListarEstadosIn())
      .subscribe( lista =>{
        if(lista.Estados!=undefined) {
          this.estados = lista.Estados;
        }
      }, err => {
      this.modal.Error = true;
      this.modal.open();
    });
  }

  exportarExcel():void {
    let exportarExcelIn = new ExportarExcelIn();
    exportarExcelIn.Sobres = this.sobresAExportar;
    this.sobreServicio.ExportarExcel(exportarExcelIn)
    .subscribe( resp =>{
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.sobresAExportar);

      const book: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
  
      XLSX.writeFile(book, 'pruebaExcel.xlsx');
      }, err => {
      this.modal.Error = true;
      this.modal.open();
    });

  }


  Seleccionar(event:any,boton:string,sobre?:Sobre)
  { 
    if(event.target.checked!=undefined && sobre!=null)
    {
      if(event.target.checked)
      {
        this.sobresAExportar.push(sobre);
      }
      else
      {
        this.sobresAExportar = this.sobresAExportar.filter( sobreEnLista => sobreEnLista.NumeroSobre != sobre.NumeroSobre );
      }
    }
    else
    {
      if(sobre!=null)
      {
        this.sobre = sobre;
      }
      this.BotonSeleccionado(boton);
    }

  }


  BotonSeleccionado(boton:string)
  {
    switch(boton)
    {
      case "IngresarPeso":
        this.btnIngresarPeso = true;
        this.estado.IdEstado = Estados.LISTOPARAEXPORTAR;
        this.AbrirModal();
        break;
        case "TomarHumedad":
          this.btnTomarHumedad = true;
          this.estado.IdEstado = Estados.ANALIZANDOHUMEDAD;
          this.sobre.Ubicacion.Camara.IdCamara = Camaras.HUMEDAD;
          this.AbrirModal();
        break;
      case "Editar":
        this.EstaSeleccionado = true;
        break;
    }
  }


  AbrirModal()
  {
    this.modal.open();
  }

  Regresar()
  {
    if(this.btnIngresarPeso)
    {
      this.sobre= new Sobre();
      this.Ocultar();
    }
    this.ListarSobres();
  }

  ValidarPeso()
  {
    this.mensajePesoInvalido = this.ValidarNumero(this.sobre.Peso.toString());
    this.mensajePesoInvalido == '' && (this.sobre.Peso > 0 && this.sobre.Peso < 1000) ? this.pesoEsValido = true : this.pesoEsValido = false;
    return this.pesoEsValido;
  }

  ValidarFormulario()
  {
    return this.pesoEsValido;
  }

  Confirmar()
  {
    if(this.BtnModificar ||  this.btnTomarHumedad || this.btnIngresarPeso)
    {
      this.ModificarSobre();
    }
  }


}
