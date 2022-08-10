import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AltaMejoradorIn } from '../../Parametros/Entrada/AltaMejoradorIn';
import { MejoradorService } from '../../Services/mejorador.service';
import { Mejorador } from './class/mejorador';
import { BajaMejoradorIn } from '../../Parametros/Entrada/BajaMejoradorIn';
import { ModificarMejoradorIn } from '../../Parametros/Entrada/ModificarMejoradorIn';
import { ListarMejoradorIn } from '../../Parametros/Entrada/ListarMejoradorIn';
import { ModalComponent } from '../Modal/modal.component';
import { Mensajes } from '../Modal/Mensajes/mensajes';

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
  private btnAlta: boolean = false;
  private btnBaja: boolean = false;
  private btnModificar: boolean = false;

  @ViewChild("modal") modal: ModalComponent;

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
    setTimeout(()=>{
      this.Listar();
    },500)
  }
  
  public get Mejoradores():Mejorador[] {
    return this.mejoradores;
  }
  public set Mejoradores(value: Mejorador[]) {
    this.mejoradores = value;
  }

  public get BtnAlta(): boolean {
    return this.btnAlta;
  }
  public set BtnAlta(value: boolean) {
    this.btnAlta = value;
  }

  public get BtnBaja(): boolean {
    return this.btnBaja;
  }
  public set BtnBaja(value: boolean) {
    this.btnBaja = value;
  }

  public get BtnModificar(): boolean {
    return this.btnModificar;
  }
  public set BtnModificar(value: boolean) {
    this.btnModificar = value;
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
         this.modal.Mensaje = Mensajes.AltaMejoradorExito;
         this.modal.Error = false;
         this.modal.open(); 
        }, err => {
          this.modal.Mensaje = Mensajes.AltaMejoradorError;
          this.modal.Error = true;
          this.modal.open(); 
        }
        );
  }

  BajaMejorador(){
    this.bajaMejoradorIn.idMejorador = this.mejorador.IdMejorador;
    this.mejoradorServicio.Baja(this.bajaMejoradorIn)
      .subscribe( mejorador => {
        this.modal.Mensaje = Mensajes.BajaMejoradorExito;
        this.modal.Error = false;
        this.modal.open(); 
       }, err => {
         this.modal.Mensaje = Mensajes.BajaMejoradorError;
         this.modal.Error = true;
         this.modal.open(); 
       }
       );
  }

  ModificarMejorador(){
    this.modificarMejoradorIn.mejorador = this.mejorador;
    this.mejoradorServicio.Modificar(this.modificarMejoradorIn)
      .subscribe( mejorador => {
        this.modal.Mensaje = Mensajes.ModificarMejoradorExito;
        this.modal.Error = false;
        this.modal.open(); 
       }, err => {
         this.modal.Mensaje = Mensajes.ModificarMejoradorError;
         this.modal.Error = true;
         this.modal.open(); 
       }
       );
  }

  Listar(){
    let listarMejoradorIn:ListarMejoradorIn;
    listarMejoradorIn = new ListarMejoradorIn();
    listarMejoradorIn.terminoDeBusqueda = this.terminoDeBusqueda;
    this.mejoradores = [];
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

  Seleccionar(mejorador:Mejorador)
  {
    this.mejorador.IdMejorador = mejorador.IdMejorador;
    this.mejorador.Nombre = mejorador.Nombre;
    this.mejorador.Mail = mejorador.Mail;
    this.mejorador.Direccion = mejorador.Direccion;  
    this.Ocultar();
  }

 Regresar()
  {
    this.mejorador = new Mejorador();
    this.Ocultar();
    this.btnAlta = false;
    this.btnBaja = false;
    this.btnModificar = false;
  }
  Ocultar()
  {
    this.EstaSeleccionado = !this.EstaSeleccionado;
  }

  BotonSeleccionado(boton:string)
  {
    switch(boton)
    {
      case "Alta":
        this.btnAlta = true;
        break;
      case "Baja":
        this.btnBaja = true;
        break;
      case "Modificar":
        this.btnModificar = true;
        break;
    }
    
  }
 


 
}
