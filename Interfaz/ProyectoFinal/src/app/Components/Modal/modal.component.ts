import {Component,EventEmitter,Input,OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
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

    this.Error = false;
    this.Mensaje = '';
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

  @Input() Error:boolean;
  @Input() Mensaje:string;

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

}
