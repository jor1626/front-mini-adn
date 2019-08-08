import { Injectable } from "@angular/core";
import { Effect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import * as fromBalanceGeneral from './balance-general.actions'
import { of } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import { BalancGeneralService } from "../service/balance-general.service";

@Injectable()
export class BalanceGeneralEffects {

    constructor(
        private actions$: Actions,
        private BalanceGeneralService: BalancGeneralService
    ){}


    @Effect()
    reporteEstadoResultado$ = this.actions$.pipe(
        ofType(fromBalanceGeneral.GENERAR_REPORTE),
        switchMap((action: any) => {
            return this.BalanceGeneralService.reporte(action.data).pipe(
                map(data => new fromBalanceGeneral.BalanceGeneralActionSuccess(data)),
                catchError(error => of(new fromBalanceGeneral.BalanceGeneralActionFail(error)))
            )
        })
    );
}