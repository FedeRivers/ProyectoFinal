import { Component, OnInit } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ItemValor } from './class/itemValor';
import { ItemColor } from './class/itemColor';
import { EstadisticaService } from 'src/app/Services/estadistica.service';
import { ObtenerEstadisticasIn } from 'src/app/Parametros/Entrada/obtenerEstadisticasIn';
import { Graficas } from '../Constantes/constantes';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  private graficaSeleccionada: number = Graficas.ObtenerCantidadesPorEspecie;

  //#region Calendario
  private hoveredDate: NgbDate | null = null;
  private fromDate: NgbDate | null;
  private toDate: NgbDate | null;
  //#endregion

  //#region Graficas
  private items: ItemValor[] = [];
  private customColors: ItemColor[] = [];
  private view: [number, number] = [1000, 500];
  
  private colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#F7DC6F', '#5499C7', '#A88DC3', '#7FE396'],
  };

  private gradient: boolean = false;
  private showLegend: boolean = true;
  private showLabels: boolean = true;
  private isDoughnut: boolean = false;

  private showXAxis = true;
  private showYAxis = true;
  private showXAxisLabel = true;
  private xAxisLabel = 'Sobres';
  private showYAxisLabel = true;
  private yAxisLabel = 'Cantidad';
  private barPadding = 100;
  //#endregion

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private estadisticaServicio: EstadisticaService) {
    this.fromDate = calendar.getNext(calendar.getToday(), 'd', -60) //.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    
    this.Listar();
  }

  //#region Get y Set Calendario
  public get HoveredDate(): NgbDate | null {
    return this.hoveredDate;
  }
  public set HoveredDate(value: NgbDate | null) {
    this.hoveredDate = value;
  }
  public get FromDate(): NgbDate | null {
    return this.fromDate;
  }
  public set FromDate(value: NgbDate | null) {
    this.fromDate = value;
  }
  public get ToDate(): NgbDate | null {
    return this.toDate;
  }
  public set ToDate(value: NgbDate | null) {
    this.toDate = value;
  }
  //#endregion

  //#region Get y Set Graficas
  public get Items(): ItemValor[] {
    return this.items;
  }
  public set Items(value: ItemValor[]) {
    this.items = value;
  }
  public get CustomColors(): ItemColor[] {
    return this.customColors;
  }
  public set CustomColors(value: ItemColor[]) {
    this.customColors = value;
  }
  public get View(): [number, number] {
    return this.view;
  }
  public set View(value: [number, number]) {
    this.view = value;
  }
  public get ColorScheme(): Color {
    return this.colorScheme;
  }
  public set ColorScheme(value: Color) {
    this.colorScheme = value;
  }
  public get Gradient(): boolean {
    return this.gradient;
  }
  public set Gradient(value: boolean) {
    this.gradient = value;
  }
  public get ShowLegend(): boolean {
    return this.showLegend;
  }
  public set ShowLegend(value: boolean) {
    this.showLegend = value;
  }
  public get ShowLabels(): boolean {
    return this.showLabels;
  }
  public set ShowLabels(value: boolean) {
    this.showLabels = value;
  }
  public get IsDoughnut(): boolean {
    return this.isDoughnut;
  }
  public set IsDoughnut(value: boolean) {
    this.isDoughnut = value;
  }
  public get ShowXAxis() {
    return this.showXAxis;
  }
  public set ShowXAxis(value) {
    this.showXAxis = value;
  }
  public get ShowYAxis() {
    return this.showYAxis;
  }
  public set ShowYAxis(value) {
    this.showYAxis = value;
  }
  public get ShowXAxisLabel() {
    return this.showXAxisLabel;
  }
  public set ShowXAxisLabel(value) {
    this.showXAxisLabel = value;
  }
  public get XAxisLabel() {
    return this.xAxisLabel;
  }
  public set XAxisLabel(value) {
    this.xAxisLabel = value;
  }
  public get ShowYAxisLabel() {
    return this.showYAxisLabel;
  }
  public set ShowYAxisLabel(value) {
    this.showYAxisLabel = value;
  }
  public get YAxisLabel() {
    return this.yAxisLabel;
  }
  public set YAxisLabel(value) {
    this.yAxisLabel = value;
  }
  public get BarPadding() {
    return this.barPadding;
  }
  public set BarPadding(value) {
    this.barPadding = value;
  }
  public get GraficaSeleccionada(): number {
    return this.graficaSeleccionada;
  }
  public set GraficaSeleccionada(value: number) {
    this.graficaSeleccionada = value;
  }
  //#endregion

  Listar()
  {
    let obtenerEstadisticasIn = new ObtenerEstadisticasIn();
    obtenerEstadisticasIn.EnumeradoGrafica = this.graficaSeleccionada;
    obtenerEstadisticasIn.FechaDesde = new Date(this.fromDate!.year,this.fromDate!.month - 1,this.fromDate!.day);
    obtenerEstadisticasIn.FechaHasta = new Date(this.toDate!.year,this.toDate!.month - 1,this.toDate!.day);
    this.estadisticaServicio.ObtenerEstadisticas(obtenerEstadisticasIn)
      .subscribe( lista => {
        if (lista.Datos != undefined) {
            lista.Datos.forEach( dato => {
              let itemValor:ItemValor = new ItemValor();
              let itemColor:ItemColor = new ItemColor();

              itemValor.Name = dato.Name;
              itemValor.Value = dato.Value;
              this.items.push(itemValor);

              itemColor.Name = dato.Name;
              itemColor.Value = '#'+ Math.floor(Math.random()*16777215).toString(16);
              this.customColors.push(itemColor);             
            })
            this.items = [...this.items];
          }
      }, err => {
    });
  }

  Limpiar()
  {
    this.items = [];
    this.customColors = [];
  }

  ngOnInit(): void {

  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  //#region CALENDARIO
    onDateSelection(date: NgbDate) {
      if (!this.fromDate && !this.toDate) {
        this.fromDate = date;
      } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
        this.toDate = date;
      } else {
        this.toDate = null;
        this.fromDate = date;
      }
      this.Limpiar();
      this.Listar();
    }
  
    isHovered(date: NgbDate) {
      return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) &&
          date.before(this.hoveredDate);
    }
  
    isInside(date: NgbDate) { return this.toDate && date.after(this.fromDate) && date.before(this.toDate); }
  
    isRange(date: NgbDate) {
      return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) ||
          this.isHovered(date);
    }
  
    validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
      const parsed = this.formatter.parse(input);
      return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
    }
  //#endregion

  SeleccionarGrafica(graficaSeleccionada:number)
  {
    switch(graficaSeleccionada)
    {
      case 1 : this.graficaSeleccionada = Graficas.ObtenerCantidadesPorEspecie;
        break;
      case 2 : this.graficaSeleccionada = Graficas.ObtenerDevueltosYAlmacenados;
        break;
    }
    this.Limpiar();
    this.Listar();
  }


}
