import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AltaMejoradorIn } from '../../Parametros/Entrada/AltaMejoradorIn';
import { MejoradorService } from '../../Services/mejorador.service';
import { Mejorador } from './class/mejorador';
import { BajaMejoradorIn } from '../../Parametros/Entrada/BajaMejoradorIn';
import { ModificarMejoradorIn } from '../../Parametros/Entrada/ModificarMejoradorIn';
import { ListarMejoradorIn } from '../../Parametros/Entrada/ListarMejoradorIn';
import { ListarMejoradorOut } from '../../Parametros/Salida/ListarMejoradorOut';
import { ModalComponent } from '../Modal/modal.component';



@Component({
  selector: 'app-mejorador',
  templateUrl: './mejorador.component.html',
  styleUrls: ['./mejorador.component.css']
})
export class MejoradorComponent implements OnInit {
  private altaMejoradorIn:AltaMejoradorIn;
  private bajaMejoradorIn:BajaMejoradorIn;
  private modificarMejoradorIn:ModificarMejoradorIn;
  private mejorador: Mejorador;
  private terminoDeBusqueda: string='';
  private mejoradores: Mejorador[];
  private estaSeleccionado: boolean = false;
  @ViewChild("modal") modal!: ModalComponent;

  constructor(private mejoradorServicio:MejoradorService) {
    this.altaMejoradorIn = new AltaMejoradorIn();
    this.bajaMejoradorIn = new BajaMejoradorIn();
    this.modificarMejoradorIn = new ModificarMejoradorIn();
    this.mejorador = new Mejorador();
    this.mejoradores = []; 
    this.Listar();
    this.modal = new ModalComponent();
  }

  ngOnInit(): void {
    
  }

  public get EstaSeleccionado(): boolean {
    return this.estaSeleccionado;
  }
  public set EstaSeleccionado(value: boolean) {
    this.estaSeleccionado = value;
  }



  public get TerminoDeBusqueda(): string {
    return this.terminoDeBusqueda;
  }
  public set TerminoDeBusqueda(value: string) {
    this.terminoDeBusqueda = value;
    this.Listar();
  }

  
  public get Mejoradores():Mejorador[] {
    return this.mejoradores;
  }
  public set Mejoradores(value: Mejorador[]) {
    this.mejoradores = value;
  }


  

  @Input()
  set Nombre(value:string){
    this.mejorador.Nombre = value;
  }; 
  get Nombre() : string{
    return this.mejorador.Nombre;
  };
 
  @Input()
  set Mail(value:string){
    this.mejorador.Mail = value;
  }; 
  get Mail(){
    return this.mejorador.Mail;
  };

  @Input()
  set Direccion(value:string){
    this.mejorador.Direccion = value;
  };
  get Direccion(){
    return this.mejorador.Direccion;
  };

  AltaMejorador(){
    this.altaMejoradorIn.mejorador = this.mejorador;
    this.mejoradorServicio.Agregar(this.altaMejoradorIn)
      .subscribe( mejorador => {
         console.log('Respuesta', mejorador)
        }, err => {
          console.log(err);
        }
        );
  }

  BajaMejorador(){
    this.bajaMejoradorIn.idMejorador = this.mejorador.IdMejorador;
    this.mejoradorServicio.Baja(this.bajaMejoradorIn)
      .subscribe( mejorador => console.log('Respuesta', mejorador));
  }

  ModificarMejorador(){
    this.modificarMejoradorIn.mejorador = this.mejorador;
    this.mejoradorServicio.Modificar(this.modificarMejoradorIn)
      .subscribe( mejorador => console.log('Respuesta', mejorador))
  }

  Seleccionar(mejorador:Mejorador)
  {
    this.mejorador.IdMejorador = mejorador.IdMejorador;
    this.mejorador.Nombre = mejorador.Nombre;
    this.mejorador.Mail = mejorador.Mail;
    this.mejorador.Direccion = mejorador.Direccion;  
    this.modal.Prueba='PEPITO';
    this.modal.open(); 
    this.Ocultar();
  }

 Regresar()
  {
    this.mejorador = new Mejorador();
    this.Ocultar();
  }
  Ocultar()
  {
    this.EstaSeleccionado = !this.EstaSeleccionado;
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
