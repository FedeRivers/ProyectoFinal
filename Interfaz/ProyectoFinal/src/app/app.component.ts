import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFinal';
  public listaDePermisos: string [];
  Mejorador:boolean=false;
  Usuario:boolean=false;
  TipoDeUsuario:boolean=false;
  Taxonomia: boolean = false;
  Lote : boolean = false;

  constructor(){
    this.listaDePermisos = ["1","2","3","4","5"];
    this.ValidarPermisos();
  }

  ValidarPermisos()
  {
    this.listaDePermisos.forEach(permiso => {
      switch(permiso){
        case "1": this.Mejorador = true;
          break;
        case "2": this.Usuario = true;
          break;
        case "3": this.TipoDeUsuario = true;
          break;
        case "4": this.Taxonomia = true;
          break;
        case "5": this.Lote = true;
          break;
      }

    });

  }




}
