import { Action } from '@ngrx/store';
import { CentroClass } from '../../models';

export const LISTAR_CENTROS = '[CENTROS] Listar Centros';
export const LISTAR_CENTROS_SUCCESS = '[CENTROS] Listar Centros Success';
export const LISTAR_CENTROS_FAIL = '[CENTROS] Listar Centros Fail';

export class ListarCentrosActions implements Action {
    readonly type = LISTAR_CENTROS;
}

export class ListarCentrosSuccessActions implements Action {
    readonly type = LISTAR_CENTROS_SUCCESS;

    constructor(public centros: CentroClass[]) { }
}

export class ListarCentrosFailActions implements Action {
    readonly type = LISTAR_CENTROS_FAIL;

    constructor(public payload: any) { }
}

export type ActionsCentro = ListarCentrosActions | ListarCentrosSuccessActions | ListarCentrosFailActions;