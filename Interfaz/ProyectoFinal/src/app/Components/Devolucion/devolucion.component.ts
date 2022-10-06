import { Component, OnInit, ViewChild } from '@angular/core';
import { ListarLotesParaDevolucionIn } from 'src/app/Parametros/Entrada/ListarLotesParaDevolucionIn';
import { LoteService } from 'src/app/Services/lote.service';
import { SobreService } from 'src/app/Services/sobre.service';
import { Lote } from '../Lote/class/lote';
import { FormularioBase } from '../FormularioBase/class/formularioBase';
import { ModalComponent } from '../Modal/modal.component';
import { RecursosDeIdioma } from '../Constantes/constantes';
import { Sobre } from '../Sobre/class/sobre';
import { ListarSobreIn } from '../../Parametros/Entrada/ListarSobreIn';
import { ListarSobresParaDevolucionIn } from 'src/app/Parametros/Entrada/ListarSobresParaDevolucionIn';
import { DevolverLotesIn } from '../../Parametros/Entrada/DevolverLotesIn';
import { DevolverSobresIn } from 'src/app/Parametros/Entrada/DevolverSobresIn';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.component.html',
  styleUrls: ['./devolucion.component.css']
})
export class DevolucionComponent extends FormularioBase implements OnInit {

  private lotes: Lote[];
  private lotesSeleccionados: Lote[];
  private sobres: Sobre[];
  private sobresSeleccionados: Sobre[];
  private devolucionPorSobre: boolean = false;

  @ViewChild("modal") modal: ModalComponent;

  constructor(private loteServicio: LoteService,private sobreServicio: SobreService)
  {
    super();
    this.modal = new ModalComponent();
    this.sobresSeleccionados = [];
    this.lotesSeleccionados = [];
    this.sobres = [];
    this.lotes = [];
    this.ListarSobres();
    this.ListarLotes();
  }

  ngOnInit(): void {
  }

  //#region GET Y SET
  public get Lotes(): Lote[] {
    return this.lotes;
  }
  public set Lotes(value: Lote[]) {
    this.lotes = value;
  }

  public get Sobres(): Sobre[] {
    return this.sobres;
  }
  public set Sobres(value: Sobre[]) {
    this.sobres = value;
  }

  public get DevolucionPorSobre(): boolean {
    return this.devolucionPorSobre;
  }
  public set DevolucionPorSobre(value: boolean) {
    this.devolucionPorSobre = value;
  }
  public get LotesSeleccionados(): Lote[] {
    return this.lotesSeleccionados;
  }
  public set LotesSeleccionados(value: Lote[]) {
    this.lotesSeleccionados = value;
  }
  public get SobresSeleccionados(): Sobre[] {
    return this.sobresSeleccionados;
  }
  public set SobresSeleccionados(value: Sobre[]) {
    this.sobresSeleccionados = value;
  }
  //#endregion

  ListarLotes()
  {
    let listarLotesParaDevolucionIn: ListarLotesParaDevolucionIn = new ListarLotesParaDevolucionIn();
    this.lotes = [];
    this.loteServicio.ListarLotesParaDevolucion(listarLotesParaDevolucionIn)
      .subscribe(lista => {
        if (lista != undefined) {
            this.lotes = lista.Lotes
          }
      }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Listar.ERROR,true)
    });
  }

  ListarSobres()
  {
    let listarSobresParaDevolucionIn : ListarSobresParaDevolucionIn = new ListarSobresParaDevolucionIn();
    this.sobres = [];
    this.sobreServicio.ListarSobresParaDevolucion(listarSobresParaDevolucionIn)
      .subscribe( lista => {
        if (lista.Sobres != undefined) {
            this.sobres = lista.Sobres;
          }
      }, err => {
        this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Listar.ERROR,true)
    });
  }

  DevolverLotes()
  {
    let devolverLotesIn : DevolverLotesIn = new DevolverLotesIn();
    devolverLotesIn.Lotes = this.lotesSeleccionados;
    this.loteServicio.DevolverLotes(devolverLotesIn)
    .subscribe( lista => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Devolucion.EXITO,false);
    }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Lote.Devolucion.ERROR,true);
  });
  }

  DevolverSobres()
  {
    let devolverSobresIn : DevolverSobresIn = new DevolverSobresIn();
    devolverSobresIn.Sobres = this.sobresSeleccionados;
    this.sobreServicio.DevolverSobres(devolverSobresIn)
    .subscribe( lista => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Devolucion.EXITO,false);
    }, err => {
      this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Sobre.Devolucion.ERROR,true)
  });
  }

  SeleccionarLote(event:any,lote:Lote)
  {
    if(event.target.checked!=undefined && lote!=null)
    {
      if(event.target.checked)
      {
        this.lotesSeleccionados.push(lote);
      }
      else
      {
        this.lotesSeleccionados = this.lotesSeleccionados.filter( loteEnLista => loteEnLista.NumeroLote != lote.NumeroLote );
      }
    }
  }

  SeleccionarSobre(event:any,sobre:Sobre)
  {
    if(event.target.checked!=undefined && sobre!=null)
    {
      if(event.target.checked)
      {
        this.sobresSeleccionados.push(sobre);
      }
      else
      {
        this.sobresSeleccionados = this.sobresSeleccionados.filter( sobreEnLista => sobreEnLista.IdSobre != sobre.IdSobre );
      }
    }
  }


  Confirmar()
  {
    this.devolucionPorSobre ? this.DevolverSobres() : this.DevolverLotes();
  }


  Limpiar()
  {
    this.sobresSeleccionados = [];
    this.lotesSeleccionados = [];
    this.devolucionPorSobre ? this.ListarSobres() : this.ListarLotes();
  }

  CambiarTab(devolucionPorSobre:boolean)
  {
    this.devolucionPorSobre = devolucionPorSobre;
    this.Limpiar()
  }

  AbrirModal()
  {
    this.modal.open();
  }
  

}
