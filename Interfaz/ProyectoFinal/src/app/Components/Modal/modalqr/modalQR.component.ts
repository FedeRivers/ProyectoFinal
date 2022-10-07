import {Component,Input,OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalQR',
  templateUrl: './modalQR.component.html'
})
export class ModalqrComponent implements OnInit {
  closeResult = '';
  private imagen!: string;

  @ViewChild("content") content!: TemplateRef<any>;
  
  constructor(config?: NgbModalConfig,private modalService?: NgbModal) {   
    if(config!=undefined)
    {
      config.backdrop = 'static';
      config.keyboard = false;
    }
  }

  //#region GET Y SET
  public get Imagen(): string {
    return this.imagen;
  }
  @Input()
  public set Imagen(value: string) {
    this.imagen = value;
  }
  //#endregion
  
  ngOnInit(): void {
  }

  open() {
    this.modalService!.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
