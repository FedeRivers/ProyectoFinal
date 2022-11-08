import {Component,EventEmitter,Input,OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { RecursosDeIdioma } from '../Constantes/constantes';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent implements OnInit {
  closeResult = '';
  private aceptar: EventEmitter<string>;
  private confirmar: EventEmitter<string>;
  private cancelar: EventEmitter<string>;
  private mensaje: string = '';
  private error: boolean;
  private confirmado: boolean = false;
 
  @ViewChild("content") content!: TemplateRef<any>;
  
 
  constructor(config?: NgbModalConfig,private modalService?: NgbModal) { 
    this.Mensaje = RecursosDeIdioma.MensajesServicios.Confirmacion.PREGUNTA;
    this.error = false;
    if(config!=undefined)
    {
      config.backdrop = 'static';
      config.keyboard = false;
    }
    this.aceptar = new EventEmitter();
    this.confirmar = new EventEmitter();
    this.cancelar = new EventEmitter();
  }
  
  ngOnInit(): void {
  }

  public get Mensaje(): string {
    return this.mensaje;
  }
  public set Mensaje(value: string) {
    this.mensaje = value;
  }

  public get Error(): boolean {
    return this.error;
  }
  public set Error(value: boolean) {
    this.error = value;
  }
  
  @Output()
  public get Aceptar(): EventEmitter<string> {
    return this.aceptar;
  }
  public set Aceptar(value: EventEmitter<string>) {
    this.aceptar = value;
  }
 
  @Output()
  public get Confirmar(): EventEmitter<string> {
    return this.confirmar;
  }
  public set Confirmar(value: EventEmitter<string>) {
    this.confirmar = value;
  }

  public get Confirmado(): boolean {
    return this.confirmado;
  }
  public set Confirmado(value: boolean) {
    this.confirmado = value;
  }
  @Output()
  public get Cancelar(): EventEmitter<string> {
    return this.cancelar;
  }
  public set Cancelar(value: EventEmitter<string>) {
    this.cancelar = value;
  }

  open() {
    this.modalService!.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(this.confirmado)
      {
        this.aceptar.emit();
        this.Mensaje = RecursosDeIdioma.MensajesServicios.Confirmacion.PREGUNTA;
        this.confirmado=false;
      }
      else
      {
        this.confirmar.emit();
        this.confirmado=true;
      } 
      this.error = false;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      if(this.confirmado)
      {
        this.aceptar.emit();
        this.confirmado=false;
      }
      else
      {
        this.cancelar.emit();
      }
      this.error = false;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  MostrarMensaje(mensaje:string,error:boolean)
  {
    this.mensaje = mensaje;
    this.error = error;
    this.open();     
  }

}
