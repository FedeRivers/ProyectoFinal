import { Component, OnInit } from '@angular/core';
import { SobreService } from 'src/app/Services/sobre.service';
import { BuscarDuplicadosIn } from '../../Parametros/Entrada/BuscarDuplicadosIn';
import { Sobre } from '../Sobre/class/sobre';
import { Semilla } from 'src/app/Components/Semilla/class/semilla';
import { FormularioBase } from '../FormularioBase/class/formularioBase';

@Component({
  selector: 'app-buscar-duplicados',
  templateUrl: './buscarDuplicados.component.html',
  styleUrls: ['./buscarDuplicados.component.css']
})
export class BuscarDuplicadosComponent extends FormularioBase implements OnInit {

  private textoIngresado: string = '';
  private listaDeBusqueda: string[] ;
  private sobres: Sobre[];
  private sobre: Sobre;
  private mostrarTabla: boolean = false;


  constructor( private sobreServicio: SobreService ){
    super();
    this.listaDeBusqueda = [];
    this.sobres = [];
    this.sobre = new Sobre();
  }

  ngOnInit(): void {
  }


  public get ListaDeBusqueda(): string[] {
    return this.listaDeBusqueda;
  }
  public set ListaDeBusqueda(value: string[]) {
    this.listaDeBusqueda = value;
  }

  public get TextoIngresado(): string {
    return this.textoIngresado;
  }
  public set TextoIngresado(value: string) {
    this.textoIngresado = value;
  }

  public get Sobres(): Sobre[] {
    return this.sobres;
  }
  public set Sobres(value: Sobre[]) {
    this.sobres = value;
  }

  public get Sobre(): Sobre {
    return this.sobre;
  }
  public set Sobre(value: Sobre) {
    this.sobre = value;
  }

  public get MostrarTabla(): boolean {
    return this.mostrarTabla;
  }
  public set MostrarTabla(value: boolean) {
    this.mostrarTabla = value;
  }

  BuscarDuplicados()
  {
    if(this.textoIngresado.trim() != "")
    {
      let buscarDuplicadosIn:BuscarDuplicadosIn = new BuscarDuplicadosIn();
      this.listaDeBusqueda = this.textoIngresado.trim().split(/\r\n|\r|\n/).filter( texto => texto!="");
      this.listaDeBusqueda.forEach( nombre => {
        let semilla:Semilla = new Semilla();
        semilla.Nombre = nombre;
        buscarDuplicadosIn.NombresDeSemillas.push(semilla);
      });
      
      this.sobreServicio.BuscarDuplicados(buscarDuplicadosIn)
      .subscribe( sobres => {
        this.Sobres = sobres.Sobres;
        this.mostrarTabla = true;
      }, err => {
        //this.modal.MostrarMensaje(RecursosDeIdioma.MensajesServicios.Usuario.Modificar.ERROR,true);
      });
    }
  }

  Limpiar()
  {
    this.textoIngresado = '';
    this.listaDeBusqueda = [];
    this.mostrarTabla = false;
  }

  VerDetalle(sobre:Sobre)
  {
    this.sobre = sobre;
  }

  ValidarDuplicado(sobre:Sobre):string
  {
    return sobre.Germinacion >= 50 && sobre.Peso >= 200 ? 'table-danger' : sobre.Semilla.Taxonomia.Nombre != null ? 'table-success' : 'table-primary';
  }

  CambiarColor(TablaD:Element,i:any):string
  {
    return '.table-active'
  }
}
