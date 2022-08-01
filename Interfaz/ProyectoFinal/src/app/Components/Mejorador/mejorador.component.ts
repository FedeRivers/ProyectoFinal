import { Component, Input, OnInit, Output } from '@angular/core';
import { AltaMejoradorIn } from '../../Parametros/Entrada/AltaMejoradorIn';
import { MejoradorService } from '../../Services/mejorador.service';
import { Mejorador } from './class/mejorador';
import { BajaMejoradorIn } from '../../Parametros/Entrada/BajaMejoradorIn';
import { ModificarMejoradorIn } from '../../Parametros/Entrada/ModificarMejoradorIn';
import { ListarMejoradorIn } from '../../Parametros/Entrada/ListarMejoradorIn';
import { Observable } from 'rxjs/internal/Observable';
import { ListarMejoradorOut } from '../../Parametros/Salida/ListarMejoradorOut';



@Component({
  selector: 'app-mejorador',
  templateUrl: './mejorador.component.html',
  styleUrls: ['./mejorador.component.css']
})
export class MejoradorComponent implements OnInit {
  private AltaMejoradorIn:AltaMejoradorIn;
  private BajaMejoradorIn:BajaMejoradorIn;
  private ModificarMejoradorIn:ModificarMejoradorIn;
  private Mejorador: Mejorador;
  private terminoDeBusqueda: string='';
  //private Mejoradores: Observable<Mejorador[]> = new Observable;
  private Mejoradores: Mejorador[];

  constructor(private mejoradorServicio:MejoradorService) {
    this.AltaMejoradorIn = new AltaMejoradorIn();
    this.BajaMejoradorIn = new BajaMejoradorIn();
    this.ModificarMejoradorIn = new ModificarMejoradorIn();
    this.Mejorador = new Mejorador();
    this.Mejoradores = [];
    this.Listar();
  }

  ngOnInit(): void {
    
  }

  public get TerminoDeBusqueda(): string {
    return this.terminoDeBusqueda;
  }
  public set TerminoDeBusqueda(value: string) {
    this.terminoDeBusqueda = value;
    this.Listar();
  }

  
  public get mejoradores():Mejorador[] {
    return this.Mejoradores;
  }
  public set mejoradores(value: Mejorador[]) {
    this.Mejoradores = value;
  }


  

  @Input()
  set Nombre(value:string)
  {
    this.Mejorador.Nombre = value;
  }; 
  get Nombre() : string
  {
    return this.Mejorador.Nombre;
  };
 
  @Input()
  set Mail(value:string){
    this.Mejorador.Mail = value;
  }; 
  @Input()
  set Direccion(value:string){
    this.Mejorador.Direccion = value;
  };

  AltaMejorador(){
    this.AltaMejoradorIn.mejorador = this.Mejorador;
    this.mejoradorServicio.Agregar(this.AltaMejoradorIn)
      .subscribe( mejorador => console.log('Respuesta', mejorador));
  }

  BajaMejorador(){
    this.Mejorador.IdMejorador = 1;
    this.BajaMejoradorIn.idMejorador = this.Mejorador.IdMejorador;
    this.mejoradorServicio.Baja(this.BajaMejoradorIn)
      .subscribe( mejorador => console.log('Respuesta', mejorador));
  }

  ModificarMejorador(){
    this.Mejorador.IdMejorador = 1;
    this.ModificarMejoradorIn.mejorador = this.Mejorador;
    this.mejoradorServicio.Modificar(this.ModificarMejoradorIn)
      .subscribe( mejorador => console.log('Respuesta', mejorador))
  }

  onSelect(mejorador:Mejorador){
    this.Mejorador.Nombre = mejorador.Nombre;
  }

  Listar(){
    let listarMejoradorIn:ListarMejoradorIn;
    listarMejoradorIn = new ListarMejoradorIn();
    listarMejoradorIn.terminoDeBusqueda = this.terminoDeBusqueda;
    this.mejoradorServicio.Listar(listarMejoradorIn)
    .subscribe( mejorador => {
      if(mejorador.Mejoradores!=undefined){
        mejorador.Mejoradores.forEach(( valor : Mejorador)=>{
          this.mejoradores.push(valor);
        })
      }
    }
      )
  }
}
