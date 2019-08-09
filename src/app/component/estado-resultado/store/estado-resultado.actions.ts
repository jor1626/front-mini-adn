import { Action } from "@ngrx/store";
import { EstadoResultadoClass } from "../model/estado-resultado.model";

export const ESTADO_RESULTADO = "[ESTADO_RESULTADO] Generar Reporte";
export const ESTADO_RESULTADO_SUCCESS = "[ESTADO_RESULTADO_SUCCESS] Generar Reporte Success";
export const ESTADO_RESULTADO_FAIL = "[ESTADO_RESULTADO_FAIL] Generar Reporte Fail";

export class EstadoResultadoAction implements Action {
    readonly type = ESTADO_RESULTADO;
    constructor(public data: EstadoResultadoClass){}
}

export class EstadoResultadoActionSuccess implements Action {
    readonly type = ESTADO_RESULTADO_SUCCESS;
    constructor(public data: any){}
}

export class EstadoResultadoActionFail implements Action {
    readonly type = ESTADO_RESULTADO_FAIL;
    constructor(public data: any){}
}

export type EstadoResultadoActions = EstadoResultadoAction | EstadoResultadoActionSuccess | EstadoResultadoActionFail;