import { Component, OnInit, ViewChildren, ChangeDetectorRef } from '@angular/core';
import * as OthersModels  from '../../models';
import * as OthersActions from '../../store/actions';
import { Observable, Subject } from 'rxjs';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import * as fromEstadoResultados from './store/estado-resultado.actions';
import { HelperService } from '../../helper/helper.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-estado-resultado',
  templateUrl: './estado-resultado.component.html',
  styleUrls: ['./estado-resultado.component.css']
})
export class EstadoResultadoComponent implements OnInit {
  source: LocalDataSource;
  settings: any;

  formData: FormGroup;
  nivelesList: OthersModels.NivelClass[];
  valoresList: OthersModels.ValorClass[];
  centrosList: OthersModels.CentroClass[];
  detalleGananciaPerdidas: any[];
  resumenGananciaPerdidas: any[];
  chartOption1: any;
  chartOption2: any;
  chartOption3: any;
  panelInfo: boolean;
  panelDetalle: boolean;
  panelResumen: boolean;
  formSubmit: boolean;
  now = new Date();
  fechaIni = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
  fechaFin = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() + 30);

  //AutoComplete material

  filterCentrosInicial: Observable<OthersModels.CentroClass[]>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private chRef: ChangeDetectorRef,
    private helperService: HelperService
  ) {
    this.nivelesList = [];
    this.valoresList = [];
    this.centrosList = [];
    this.detalleGananciaPerdidas = [];
    this.resumenGananciaPerdidas = [];

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
        text: 'Control de costos',
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

    this.settings = {
      actions: false,
      columns: {
        cod_cuenta: {
          title: 'Codigo',
          filter: false
        },
        nom_cuenta: {
          title: 'Nombre de la cuenta',
          filter: false
        },
        saldo: {
          title: 'Saldo',
          filter: false
        }
      },
      attr: {
        class: 'table table-bordered table-condensed table-striped compact no-footer'
      }
    };

    this.panelInfo = false;
    this.panelDetalle = true;
    this.panelResumen = false;
    this.formSubmit = false;

  }

  ngOnInit() {

    //Form Reactive Data Atribbutes
    this.formData = this.fb.group({
      nivelList: [''],
      fechaCorteInicialTxt: ['', Validators.required], 
      fechaCorteFinalTxt: ['', Validators.required],
      valorExpresadoList: [''],
      centroCostosList: [''],
      filtrocentroCostoTxt: [''],
      userGenerator: ['JORDAN OROZCO R']
    });

    //Exec actions store
    this.store.dispatch(new OthersActions.listarNivelesAction());
    this.store.dispatch(new OthersActions.listarValoresAction());
    this.store.dispatch(new OthersActions.ListarCentrosActions());

    //Load state
    this.store.select('estado_resultado').subscribe(state => {
      this.formData.get('fechaCorteInicialTxt').setValue(this.fechaIni);
      this.formData.get('fechaCorteFinalTxt').setValue(this.fechaFin);
      if(state.loaded){
        this.panelInfo = true;
        this.detalleGananciaPerdidas = state.data.informe.reporte;
        this.source = new LocalDataSource(state.data.informe.reporte);
        this.helperService.showNotification('success','Reporte generado correctamente!');
      }

      if(state.errors){
        this.panelInfo = false;
        this.helperService.showNotification('error','El reporte no se genero correctamente!');
      }
    });
    this.store.select('niveles').subscribe(state => this.nivelesList = state.niveles);
    this.store.select('valores').subscribe(state => this.valoresList = state.valores);
    this.store.select('centros').subscribe(state => {
      this.centrosList = state.centros;
      this.filterCentrosInicial = this.formData.get('centroCostosList').valueChanges.pipe(
        startWith(''),
        map(value => this._filtroCentro(value))
      );
    });
  }

  ngAfterViewInit(): void {
    this.chRef.detectChanges();
  }

  ngOnDestroy(): void {
  }

  _filtroCentro(data: string): OthersModels.CentroClass[] {
    const filterValue = data.toLowerCase();

    return this.centrosList.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  async generar(){
    this.formSubmit = true;
    if(this.formData.invalid){
      this.helperService.showNotification('error','Validar los campos requeridos!');
      this.formSubmit = false;
      return
    }
    const data    = this.formData.value;
    const action  = new fromEstadoResultados.EstadoResultadoAction(data);
    await this.store.dispatch(action);
    this.formSubmit = false;
  }

  visiblePanelInfo(){

  }

  visiblePanel1(){
    this.panelDetalle = true;
    this.panelResumen = false;
  }

  visiblePanel2(){
    this.panelDetalle = false;
    this.panelResumen = true;
  }

}
