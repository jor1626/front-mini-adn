import { Component, OnInit, ViewChildren, ChangeDetectorRef } from '@angular/core';
import * as OthersModels  from '../../models';
import * as OthersActions from '../../store/actions';
import { Observable, Subject } from 'rxjs';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { DataSpanidhDatatable } from '../../app.constants';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-estado-resultado',
  templateUrl: './estado-resultado.component.html',
  styleUrls: ['./estado-resultado.component.css']
})
export class EstadoResultadoComponent implements OnInit {
  @ViewChildren(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtInstance: DataTables.Api;

  formData: FormGroup;
  nivelesList: OthersModels.NivelClass[];
  valoresList: OthersModels.ValorClass[];
  centrosList: OthersModels.CentroClass[];
  perdidasGananciasList: any[];
  public now = new Date();
  fechaI = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
  fechaF = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() + 30);
  chartOption1: any;
  chartOption2: any;
  chartOption3: any;
  detalle: boolean;
  resumen: boolean;

  //AutoComplete material

  filterCentrosInicial: Observable<OthersModels.CentroClass[]>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private chRef: ChangeDetectorRef
  ) {
    this.nivelesList = [];
    this.valoresList = [];
    this.centrosList = [];
    this.perdidasGananciasList = [];

    this.chartOption1 = {
      title: {
          text: 'Control de gastos'
      },
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend:{
        orient: 'vertical',
        bottom: 'bottom',
        data: ['Utilidad 2018', 'Utilidad 2019']
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
          name: 'Utilidad 2018',
          type: 'line',
          data: [0,-1,2,2,-1],
          color: 'skyblue'
      },{
          name: 'Utilidad 2019',
          type: 'line',
          data: [0,1,2,3,4,5],
          color: 'darkblue'
      }]
    };

    this.chartOption2 = {
      title: {
        text: 'Control de gastos',
      },
      tooltip: {
          trigger: 'axis',
          axisPointer : {            
              type : 'shadow'     
          }
      },
      legend: {
          itemGap: 0,
          itemWidth : 10,
          orient: 'horizontal',
          bottom: 'bottom',
          data: ['Ingresos operacionaes', 'Costos de ventas'],
      },
      xAxis: {
          type: 'category',
          data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
          axisTick: {
              alignWithLabel: true
          }
      },
      yAxis: {
          type: 'value'
      },
      series: [
          {
              color: ['darkblue'],
              name: 'Ingresos operacionaes',
              type: 'bar',
              barWidth: '10%',
              data: [0,0,0,0,0,200],
              
          },
          {
              color: ['skyblue'],
              name: 'Costos de ventas',
              type: 'bar',
              barWidth: '10%',
              data: [0,100,0,0,0,0],
              
          }
      ]
    };

    this.chartOption3 = {
      title: {
          text: 'Ingresos vs Egresos',
          x: 'center'
      },
      legend: {
          itemGap: 0,
          itemWidth : 15,
          orient: 'horizontal',
          bottom: 'bottom',
          data: ['No operacionales 2018', 'Administrativos 2018', 'Venta 2018']
      },
      tooltip: {},
      dataset: {
          dimensions: ['month', 'No operacionales 2018', 'Administrativos 2018', 'Venta 2018'],
          source: [
              {month: 'Ene', 'No operacionales 2018': 2.3, 'Administrativos 2018': 1.8, 'Venta 2018': 0.7},
              {month: 'Feb', 'No operacionales 2018': 1.1, 'Administrativos 2018': 3.4, 'Venta 2018': 0.1},
              {month: 'Mar', 'No operacionales 2018': 2.4, 'Administrativos 2018': 1.2, 'Venta 2018': 2.5},
              {month: 'Abr', 'No operacionales 2018': 0.4, 'Administrativos 2018': 1.9, 'Venta 2018': 2.1},
              {month: 'May', 'No operacionales 2018': 0.4, 'Administrativos 2018': 0.9, 'Venta 2018': 1.1},
              {month: 'Jun', 'No operacionales 2018': 1.4, 'Administrativos 2018': 0.9, 'Venta 2018': 4.1}
          ]
      },
      xAxis: {type: 'category'},
      yAxis: {
          type: 'value'
      },
      series: [
          {type: 'bar', color: ['darkblue'], barWidth: '10%'},
          {type: 'bar',  color: ['skyblue'], barWidth: '10%'},
          {type: 'bar', color: ['red'], barWidth: '10%'  }
      ]
    };

    this.detalle = true;
    this.resumen = false;

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: DataSpanidhDatatable
    };

    //Form Reactive Data Atribbutes
    this.formData = this.fb.group({
      nivelList: ['', Validators.required],
      fechaCorteInicialTxt: [this.fechaI, Validators.required], 
      fechaCorteFinalTxt: [this.fechaF, Validators.required],
      valorExpresadoList: ['', Validators.required],
      centroCostosList: ['', Validators.required],
      filtrocentroCostoTxt: [''],
      userGenerator: ['JORDAN OROZCO R']
    });

    //Exec actions store
    this.store.dispatch(new OthersActions.listarNivelesAction());
    this.store.dispatch(new OthersActions.listarValoresAction());
    this.store.dispatch(new OthersActions.ListarCentrosActions());
    // this.store.dispatch(new fromPerdidasGanancias.PerdidasGananciasAction());

    //Load state
    this.store.select('niveles').subscribe(state => this.nivelesList = state.niveles);
    this.store.select('valores').subscribe(state => this.valoresList = state.valores);
    this.store.select('centros').subscribe(state => {
      this.centrosList = state.centros;
      this.filterCentrosInicial = this.formData.get('centroCostosList').valueChanges.pipe(
        startWith(''),
        map(value => this._filtroCentro(value))
      );
    });
    this.store.select('perdidasGanancias').subscribe(state => this.perdidasGananciasList = state.data);
    this.rerender();
    
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.chRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  _filtroCentro(data: string): OthersModels.CentroClass[] {
    const filterValue = data.toLowerCase();

    return this.centrosList.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  generar(){
    // const data    = this.formData.value;
    // const action  = new fromReports.GenerarReporteAction(data);
    // this.store.dispatch(action);
  }

  visiblePanel1(){
    this.detalle = true;
    this.resumen = false;
  }

  visiblePanel2(){
    this.detalle = false;
    this.resumen = true;
  }

}
