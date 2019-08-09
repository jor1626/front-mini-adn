import { Injectable } from "@angular/core";
import { Effect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import * as fromEstadoResultado from './estado-resultado.actions'
import { of } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import { EstadoResultadoService } from "../service/estado-resultado.service";

@Injectable()
export class EstadoResultadoEffects {

    constructor(
        private actions$: Actions,
        private EstadoResultadoService: EstadoResultadoService
    ){}


    @Effect()
    reporteEstadoResultado$ = this.actions$.pipe(
        ofType(fromEstadoResultado.ESTADO_RESULTADO),
        switchMap((action: any) => {
            return this.EstadoResultadoService.reporte(action.data).pipe(
                map(data => new fromEstadoResultado.EstadoResultadoActionSuccess(data)),
                catchError(error => of(new fromEstadoResultado.EstadoResultadoActionFail(error)))
            )
        })
    );
}