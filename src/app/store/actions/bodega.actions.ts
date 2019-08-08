import { Action } from '@ngrx/store';
import { BodegaClass } from '../../models/bodega.model';

export const LISTAR_BODEGAS = '[BODEGAS] Listar';
export const LISTAR_BODEGAS_SUCCESS = '[BODEGAS] Listar Success';
export const LISTAR_BODEGAS_FAIL = '[BODEGAS] Listar Fail';

export class ListarBodegasActions implements Action {
    readonly type = LISTAR_BODEGAS;
}

export class ListarBodegasSuccessActions implements Action {
    readonly type = LISTAR_BODEGAS_SUCCESS;

    constructor(public bodegas: BodegaClass[]) { }
}

export class ListarBodegasFailActions implements Action {
    readonly type = LISTAR_BODEGAS_FAIL;

    constructor(public payload: any) { }
}

export type ActionsBodega = ListarBodegasActions | ListarBodegasSuccessActions | ListarBodegasFailActions;