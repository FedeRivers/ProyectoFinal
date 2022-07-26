import { Component, Input, OnInit } from '@angular/core';
import { ListarAlertasIn } from 'src/app/Parametros/Entrada/ListarAlertasIn';
import { AlertaService } from 'src/app/Services/alerta.service';
import { Usuario } from '../Usuario/class/usuario';
import { Alerta } from './alerta';
import { MensajeAlerta } from './class/mensajeAlerta';
import { Camaras, RecursosDeIdioma } from '../Constantes/constantes';
import {sprintf} from "sprintf-js";
import { DesactivarAlertaIn } from 'src/app/Parametros/Entrada/DesactivarAlertaIn';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  private alertas: Alerta[];
  private listaMensajesAlertas: MensajeAlerta[];
  private botonVisible: boolean = true;
  private listarAlertasIn:ListarAlertasIn;

  private cargarAlertas: boolean = false;
  public get CargarAlertas(): boolean {
    return this.cargarAlertas;
  }
  @Input()
  public set CargarAlertas(value: boolean) {
    this.cargarAlertas = value;
    if(value)
    {
      this.ListarAlertas();
    }
  }
  
  constructor(private alertaServicio?:AlertaService) { 
    this.alertas = [];
    this.listaMensajesAlertas = [];
    this.listarAlertasIn = new ListarAlertasIn();
    this.ListarAlertas();
  }

  ngOnInit(): void {
  }

  public get ListaMensajesAlertas(): MensajeAlerta[] {
    return this.listaMensajesAlertas;
  }
  public set ListaMensajesAlertas(value: MensajeAlerta[]) {
    this.listaMensajesAlertas = value;
  }
  
  public get Alertas(): Alerta[] {
    return this.alertas;
  }
  public set Alertas(value: Alerta[]) {
    this.alertas = value;
  }

  public get BotonVisible(): boolean {
    return this.botonVisible;
  }


  ListarAlertas()
  {
    let usuario:Usuario = JSON.parse(sessionStorage.getItem('usuario')!);
    this.listarAlertasIn.IdTipoDeUsuario = usuario.TipoDeUsuario.IdTipoDeUsuario;
    this.listarAlertasIn.CantidadDeAlertas +=1;
    this.alertaServicio!.Listar(this.listarAlertasIn)
      .subscribe( lista =>{
        this.alertas = lista.Alertas;
        this.botonVisible = this.alertas.length < this.listarAlertasIn.CantidadDeAlertas; 
        this.ListarMensajesAlerta();
      })
  }

  ListarMensajesAlerta()
  {
    this.listaMensajesAlertas = [];
    if(this.alertas.length > 0)
    {
      this.alertas.forEach(alerta => {
        let mensajeAlerta:MensajeAlerta = new MensajeAlerta();
        if( alerta.IdCamara == Camaras.SECADO )
        {
          mensajeAlerta.Titulo = RecursosDeIdioma.Alertas.Mensajes.Titulo.HUMEDAD;
          mensajeAlerta.Mensaje = sprintf(RecursosDeIdioma.Alertas.Mensajes.Cuerpo.HUMEDAD,alerta.NombreSemilla,alerta.NumeroLote.toString());
        }
        else
        {
          mensajeAlerta.Titulo = RecursosDeIdioma.Alertas.Mensajes.Titulo.GERMINACION;
          mensajeAlerta.Mensaje = sprintf(RecursosDeIdioma.Alertas.Mensajes.Cuerpo.GERMINACION,alerta.NombreSemilla,alerta.NumeroLote.toString());
        }
        mensajeAlerta.Fecha = alerta.FechaDeEjecucion;
        mensajeAlerta.IdAlerta = alerta.IdAlerta;
        this.listaMensajesAlertas.push(mensajeAlerta);
      });
    }
    else
    {
      let mensajeAlertaVacio:MensajeAlerta = new MensajeAlerta();
      mensajeAlertaVacio.Titulo = RecursosDeIdioma.Alertas.Mensajes.Titulo.VACIO;
      mensajeAlertaVacio.Mensaje = RecursosDeIdioma.Alertas.Mensajes.Cuerpo.VACIO;
      this.listaMensajesAlertas.push(mensajeAlertaVacio);
    }
  }

  CargarMas(){
    let alerta : Alerta = new Alerta();
    this.alertas.push(alerta);
  }

  DesactivarAlerta(mensajeAlerta:MensajeAlerta)
  {
    let desactivarAlertaIn:DesactivarAlertaIn = new DesactivarAlertaIn();
    desactivarAlertaIn.IdAlerta = mensajeAlerta.IdAlerta;
    this.alertaServicio!.DesactivarAlerta(desactivarAlertaIn)
      .subscribe( alerta =>{
        this.ListarAlertas();
      });
  }
}
