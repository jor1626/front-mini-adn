import { Injectable } from "@angular/core";
import { Effect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import * as fromExistenciaArticulo from './existencia-articulo.actions'
import { of } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import { ExistenciaArticuloService } from "../service/existencia-articulo.service";

@Injectable()
export class ExistenciaArticuloEffects {

    constructor(
        private actions$: Actions,
        private existenciaArticuloService: ExistenciaArticuloService
    ){}


    @Effect()
    reporteEstadoResultado$ = this.actions$.pipe(
        ofType(fromExistenciaArticulo.EXISTENCIA_ARTICULO),
        switchMap((action: any) => {
            return this.existenciaArticuloService.reporte(action.data).pipe(
                map(data => new fromExistenciaArticulo.ExistenciaArticuloActionSuccess(data)),
                catchError(error => of(new fromExistenciaArticulo.ExistenciaArticuloActionFail(error)))
            )
        })
    );
}