import { Component, OnInit } from '@angular/core';
import { Alerta } from './alerta';


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  private alertas: Alerta[];

  constructor() { 
    this.alertas = [];
    this.listar();
  }

  ngOnInit(): void {
  }

  public get Alertas(): Alerta[] {
    return this.alertas;
  }
  public set Alertas(value: Alerta[]) {
    this.alertas = value;
  }

  listar()
  {
    let alerta : Alerta = new Alerta();
    alerta.Titulo = "Titulo 1";
    alerta.Texto = "Texto 1";
    let alerta2 : Alerta = new Alerta();
    alerta2.Titulo = "Titulo 2";
    alerta2.Texto = "Texto 2";
    this.alertas.push(alerta);
    this.alertas.push(alerta2);
  }

  CargarMas(){
    let alerta : Alerta = new Alerta();
    alerta.Titulo = "Cargar más";
    alerta.Texto = "Texto cargar más";
    this.alertas.push(alerta);
  }

}
