import { Action } from "@ngrx/store";
import { BalanceGeneralClass } from "../model/balance-general.model";

export const GENERAR_REPORTE = "[GENERAR_REPORTE] Generar Reporte";
export const GENERAR_REPORTE_SUCCESS = "[GENERAR_REPORTE_SUCCESS] Generar Reporte Success";
export const GENERAR_REPORTE_FAIL = "[GENERAR_REPORTE_FAIL] Generar Reporte Fail";

export class BalanceGeneralAction implements Action {
    readonly type = GENERAR_REPORTE;
    constructor(public data: BalanceGeneralClass){}
}

export class BalanceGeneralActionSuccess implements Action {
    readonly type = GENERAR_REPORTE_SUCCESS;
    constructor(public data: BalanceGeneralClass){}
}

export class BalanceGeneralActionFail implements Action {
    readonly type = GENERAR_REPORTE_FAIL;
    constructor(public data: any){}
}

export type BalanceGeneralActions = BalanceGeneralAction | BalanceGeneralActionSuccess | BalanceGeneralActionFail;