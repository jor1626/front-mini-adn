import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as OthersModels  from './../../models';
import * as OthersActions from './../../store/actions';
import * as fromExistenciaArticulos from './store/existencia-articulo.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { HelperService } from '../../helper/helper.service';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-existencia-articulo',
  templateUrl: './existencia-articulo.component.html',
  styleUrls: ['./existencia-articulo.component.css']
})
export class ExistenciaArticuloComponent implements OnInit {
  formData: FormGroup;
  bodegasList: OthersModels.BodegaClass[];
  gruposList: OthersModels.GrupoClass[];
  existenciasList: OthersModels.ExistenciaClass[];
  tiposList: OthersModels.TipoClass[];
  formSubmit: boolean;
  now = new Date();

  //AutoComplete material

  filterBodegas: Observable<OthersModels.BodegaClass[]>;
  filterGrupoInicial: Observable<OthersModels.GrupoClass[]>;
  filterGrupoFinal: Observable<OthersModels.GrupoClass[]>;
  filterExistencia: Observable<OthersModels.ExistenciaClass[]>;
  filterTipo: Observable<OthersModels.TipoClass[]>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private chRef: ChangeDetectorRef,
    private helperService: HelperService
  ) {
    this.bodegasList = [];
    this.gruposList = [];
    this.existenciasList = [];
    this.tiposList = [];

    this.formSubmit = false;

  }

  ngOnInit() {

    //Form Reactive Data Atribbutes
    this.formData = this.fb.group({
      fechaCorteTxt: ['', Validators.required],
      grupoInicialTxt: [''],
      grupoFinalTxt: [''],
      existenciaTxt: [''],
      bodegasTxt: [''],
      tipoTxt: [''],
      userGenerator: ['JORDAN OROZCO R']
    });

    //Exec actions store
    this.store.dispatch(new OthersActions.ListarGruposActions());
    this.store.dispatch(new OthersActions.listarNivelesAction());
    this.store.dispatch(new OthersActions.listarTiposAction());
    this.store.dispatch(new OthersActions.ListarBodegasActions());

    //Load state
    this.store.select('existencia_articulo').subscribe(state => {
      this.formData.get('fechaCorteTxt').setValue(this.now);
      if(state.loaded){
        this.helperService.showNotification('success','Reporte generado correctamente!');
      }

      if(state.errors){
        this.helperService.showNotification('error','El reporte no se genero correctamente!');
      }
    });

    this.store.select('grupos').subscribe(state => {
      this.gruposList = state.grupos;
      this.filterGrupoInicial = this.formData.get('grupoInicialTxt').valueChanges.pipe(
        startWith(''),
        map(value => this._filtroGrupo(value))
      );

      this.filterGrupoFinal = this.formData.get('grupoFinalTxt').valueChanges.pipe(
        startWith(''),
        map(value => this._filtroGrupo(value))
      );
    });

    this.store.select('bodegas').subscribe(state => {
      this.bodegasList = state.bodegas
      this.filterBodegas = this.formData.get('bodegasTxt').valueChanges.pipe(
        startWith(''),
        map(value => this._filterBodega(value))
      );
    });

    this.store.select('tipos').subscribe(state => {
      this.tiposList = state.tipos
      this.filterTipo = this.formData.get('tipoTxt').valueChanges.pipe(
        startWith(''),
        map(value => this._filterTipo(value))
      );
    });
  }

  async generar(){
    this.formSubmit = true;
    if(this.formData.invalid){
      this.helperService.showNotification('error','Validar los campos requeridos!');
      this.formSubmit = false;
      return
    }
    const data    = this.formData.value;
    const action  = new fromExistenciaArticulos.ExistenciaArticuloAction(data);
    await this.store.dispatch(action);
    this.formSubmit = false;
  }

  private _filtroGrupo(value: string): OthersModels.GrupoClass[] {
    const filterValue = value.toLowerCase();

    return this.gruposList.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  private _filterExitencia(value: string): OthersModels.ExistenciaClass[] {
    const filterValue = value.toLowerCase();

    return this.existenciasList.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  private _filterTipo(value: string): OthersModels.TipoClass[] {
    const filterValue = value.toLowerCase();

    return this.tiposList.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  private _filterBodega(value: string): OthersModels.BodegaClass[] {
    const filterValue = value.toLowerCase();

    return this.bodegasList.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

}
