import {Component,EventEmitter,Input,OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

import { ParametroBaseOut } from '../../Parametros/Salida/ParametroBaseOut';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  closeResult = '';
  private cerrar: EventEmitter<string>;
  private aceptar: EventEmitter<string>;

  @ViewChild("content") content!: TemplateRef<any>;
  
 
  constructor(config?: NgbModalConfig,private modalService?: NgbModal) { 
    this.ParametroOut = new ParametroBaseOut();
    this.Error = false;
    if(config!=undefined)
    {
      config.backdrop = 'static';
      config.keyboard = false;
    }
    this.cerrar = new EventEmitter();
    this.aceptar = new EventEmitter();
  }
  
  ngOnInit(): void {
  }

  @Output()
  public get Cerrar(): EventEmitter<string> {
    return this.cerrar;
  }
  public set Cerrar(value: EventEmitter<string>) {
    this.cerrar = value;
  }
  @Output()
  public get Aceptar(): EventEmitter<string> {
    return this.aceptar;
  }
  public set Aceptar(value: EventEmitter<string>) {
    this.aceptar = value;
  }

  @Input() Error:boolean;
  @Input() ParametroOut:ParametroBaseOut;
  
  open() {
    this.modalService!.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.aceptar.emit();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.cerrar.emit();
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

  MensajeResultado():string
  {
    return this.Error ? this.ParametroOut.MensajeError : this.ParametroOut.MensajeExito;
  }


}
