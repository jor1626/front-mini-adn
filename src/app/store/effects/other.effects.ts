import { Injectable } from '@angular/core';
import * as othersActions from "./../actions/";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap,  } from 'rxjs/operators';
import { pipe, of } from 'rxjs';
import { OthersService } from './../../services/others.service';

@Injectable()
export class FilterEffectsService {

    constructor(
        private actions$: Actions,
        private filtreService: OthersService
    ) { }


    @Effect()
    cargarBodegas$ = this.actions$.pipe(
        ofType(othersActions.LISTAR_BODEGAS),
        switchMap(() => {
            return this.filtreService.getBodegas().pipe(
                map(bodegas => new othersActions.ListarBodegasSuccessActions(bodegas)),
                catchError(error => of(new othersActions.ListarBodegasFailActions(error)))
            )
        })
    );


    @Effect()
    cargarNiveles$ = this.actions$.pipe(
        ofType(othersActions.LISTAR_NIVELES),
        switchMap(() => {
            return this.filtreService.getNiveles().pipe(
                map(nivel => new othersActions.listarNivelesSuccessAction(nivel)),
                catchError(error => of(new othersActions.listarNivelesFailAction(error)))
            )
        })
    );

    @Effect()
    cargarValores$ = this.actions$.pipe(
        ofType(othersActions.LISTAR_VALORES),
        switchMap(() => {
            return this.filtreService.getValores().pipe(
                map(nivel => new othersActions.listarValoresSuccessAction(nivel)),
                catchError(error => of(new othersActions.listarValoresFailAction(error)))
            )
        })
    );

    @Effect()
    cargarCentros$ = this.actions$.pipe(
        ofType(othersActions.LISTAR_CENTROS),
        switchMap(() => {
            return this.filtreService.getCentros().pipe(
                map(nivel => new othersActions.ListarCentrosSuccessActions(nivel)),
                catchError(error => of(new othersActions.ListarCentrosFailActions(error)))
            )
        })
    );

    @Effect()
    cargarTipos$ = this.actions$.pipe(
        ofType(othersActions.LISTAR_TIPOS),
        switchMap(() => {
            return this.filtreService.getTipos().pipe(
                map(tipos => new othersActions.listarTiposSuccessAction(tipos)),
                catchError(error => of(new othersActions.listarTiposFailAction(error)))
            )
        })
    );


    @Effect()
    cargarGrupos$ = this.actions$.pipe(
        ofType(othersActions.LISTAR_GRUPOS),
        switchMap(() => {
            return this.filtreService.getGrupos().pipe(
                map(tipos => new othersActions.ListarGruposSuccessActions(tipos)),
                catchError(error => of(new othersActions.ListarGruposFailActions(error)))
            )
        })
    );
}