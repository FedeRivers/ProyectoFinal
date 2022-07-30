import { Component, Input, OnInit } from '@angular/core';
import { AltaMejoradorIn } from '../Parametros/Entrada/AltaMejoradorIn';
import { MejoradorService } from '../Services/mejorador.service';
import { Mejorador } from './class/mejorador';
import { BajaMejoradorIn } from '../Parametros/Entrada/BajaMejoradorIn';
import { ModificarMejoradorIn } from '../Parametros/Entrada/ModificarMejoradorIn';

@Component({
  selector: 'app-mejorador',
  templateUrl: './mejorador.component.html',
  styleUrls: ['./mejorador.component.css']
})
export class MejoradorComponent implements OnInit {
  private AltaMejoradorIn!:AltaMejoradorIn;
  private BajaMejoradorIn!:BajaMejoradorIn;
  private ModificarMejoradorIn!:ModificarMejoradorIn;
  private Mejorador!: Mejorador;

  constructor(private mejoradorServicio:MejoradorService) { }

  ngOnInit(): void {
  }

  @Input()
  set Nombre(value:string){
    this.Mejorador.nombre = value;
  }; 
  @Input()
  set Mail(value:string){
    this.Mejorador.mail = value;
  }; 
  @Input()
  set Direccion(value:string){
    this.Mejorador.direccion = value;
  };

  AltaMejorador(){
    this.AltaMejoradorIn.mejorador = this.Mejorador;
    this.mejoradorServicio.Agregar(this.AltaMejoradorIn)
      .subscribe( mejorador => console.log('Respuesta', mejorador))
  }

  BajaMejorador(){
    this.Mejorador.idMejorador = 1;
    this.BajaMejoradorIn.idMejorador = this.Mejorador.idMejorador;
    this.mejoradorServicio.Baja(this.BajaMejoradorIn)
      .subscribe( mejorador => console.log('Respuesta', mejorador))
  }

  ModificarMejorador(){
    this.ModificarMejoradorIn.mejorador = this.Mejorador;
    this.mejoradorServicio.Modificar(this.ModificarMejoradorIn)
      .subscribe( mejorador => console.log('Respuesta', mejorador))
  }


}
