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

  constructor(){
    this.listaDePermisos = ["1","2","3"];
    this.ValidarPermisos()
  }

  ValidarPermisos()
  {
    this.listaDePermisos.forEach(permiso => {
      switch(permiso){
        case "1": this.Mejorador = true;
          break;
        case "2": this.Usuario = true;
          break;
      }

    });

  }




}
