import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-duplicados',
  templateUrl: './buscarDuplicados.component.html',
  styleUrls: ['./buscarDuplicados.component.css']
})
export class BuscarDuplicadosComponent implements OnInit {

  private textoIngresado: string = '';
  private listaDeBusqueda: string[] ;


  constructor(){
    this.listaDeBusqueda = [];
  }

  ngOnInit(): void {
  }


  public get ListaDeBusqueda(): string[] {
    return this.listaDeBusqueda;
  }
  public set ListaDeBusqueda(value: string[]) {
    this.listaDeBusqueda = value;
  }

  public get TextoIngresado(): string {
    return this.textoIngresado;
  }
  public set TextoIngresado(value: string) {
    this.textoIngresado = value;
  }




  BuscarDuplicados()
  {
    this.listaDeBusqueda = this.textoIngresado.trim().split(/\r\n|\r|\n/);
  }
}
