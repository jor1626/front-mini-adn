import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as OthersModels  from '../../models';
import * as OthersActions from '../../store/actions';
import * as fromBalanceGeneral from './store/balance-general.actions';
import { NotifierService } from 'angular-notifier';
import { HelperService } from '../../helper/helper.service';

@Component({
  selector: 'app-balance-general',
  templateUrl: './balance-general.component.html',
  styleUrls: ['./balance-general.component.css']
})
export class BalanceGeneralComponent implements OnInit {

  formData: FormGroup;
  nivelesList: OthersModels.NivelClass[];
  valoresList: OthersModels.ValorClass[];
  centrosList: OthersModels.CentroClass[];


  //AutoComplete material

  filterCentrosInicial: Observable<OthersModels.CentroClass[]>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private helperService: HelperService
  ) {
    this.nivelesList = [];
    this.valoresList = [];
    this.centrosList = [];
  }

  ngOnInit() {
    this.formData = this.fb.group({
      nivelList: ['', Validators.required],
      fechaCorteTxt: [new Date(), Validators.required],
      valorExpresadoList: ['', Validators.required],
      centroCostosList: ['', Validators.required]
    });

    //Exec actions store
    this.store.dispatch(new OthersActions.listarNivelesAction());
    this.store.dispatch(new OthersActions.listarValoresAction());
    this.store.dispatch(new OthersActions.ListarCentrosActions());


    //Load state
    this.store.select('balance_general').subscribe(data => {
      console.log(data);
      
      if(data.loaded){
        this.helperService.showNotification('info','Pdf Generado Correctamente!');
      }
      if(data.errors){
        this.helperService.showNotification('error','No se puedo generar el pdf!');
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

  _filtroCentro(data: string): OthersModels.CentroClass[] {
    const filterValue = data.toLowerCase();

    return this.centrosList.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  async generar(){
    
    if(this.formData.invalid){
      this.helperService.showNotification('error','Validar los campos requeridos!');
      return
    }

    const data = this.formData.value;
    await this.store.dispatch(new fromBalanceGeneral.BalanceGeneralAction(data));
  }

}
