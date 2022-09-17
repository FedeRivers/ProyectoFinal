import { Component, OnInit } from '@angular/core';
import { ListarAlertasIn } from 'src/app/Parametros/Entrada/ListarAlertasIn';
import { AlertaService } from 'src/app/Services/alerta.service';
import { Usuario } from '../Usuario/class/usuario';
import { Alerta } from './alerta';


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  private alertas: Alerta[];

  constructor(private alertaServicio:AlertaService) { 
    this.alertas = [];
    this.listarAlertas();
  }

  ngOnInit(): void {
  }

  public get Alertas(): Alerta[] {
    return this.alertas;
  }
  public set Alertas(value: Alerta[]) {
    this.alertas = value;
  }

  listarAlertas()
  {
    let usuario:Usuario = JSON.parse(sessionStorage.getItem('usuario')!);
    let listarAlertasIn:ListarAlertasIn = new ListarAlertasIn();
    listarAlertasIn.IdTipoDeUsuario = usuario.TipoDeUsuario.IdTipoDeUsuario;
    this.alertaServicio.Listar(listarAlertasIn)
      .subscribe( lista =>{
        this.alertas = lista.Alertas;
      })
  }

  CargarMas(){
    let alerta : Alerta = new Alerta();
    this.alertas.push(alerta);
  }

}
