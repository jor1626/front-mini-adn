import { Action } from "@ngrx/store";
import { ExistenciaArticuloClass } from "../model/existencia-articulo.model";

export const EXISTENCIA_ARTICULO = "[EXISTENCIA_ARTICULO] Generar Reporte";
export const EXISTENCIA_ARTICULO_SUCCESS = "[EXISTENCIA_ARTICULO_SUCCESS] Generar Reporte Success";
export const EXISTENCIA_ARTICULO_FAIL = "[EXISTENCIA_ARTICULO_FAIL] Generar Reporte Fail";

export class ExistenciaArticuloAction implements Action {
    readonly type = EXISTENCIA_ARTICULO;
    constructor(public data: ExistenciaArticuloClass){}
}

export class ExistenciaArticuloActionSuccess implements Action {
    readonly type = EXISTENCIA_ARTICULO_SUCCESS;
    constructor(public data: any){}
}

export class ExistenciaArticuloActionFail implements Action {
    readonly type = EXISTENCIA_ARTICULO_FAIL;
    constructor(public data: any){}
}

export type ExistenciaArticuloActions = ExistenciaArticuloAction | ExistenciaArticuloActionSuccess | ExistenciaArticuloActionFail;