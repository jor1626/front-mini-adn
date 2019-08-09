import { Action } from '@ngrx/store';
import { TipoClass } from '../../models';

export const LISTAR_TIPOS = '[TIPOS] Listar Tipos';
export const LISTAR_TIPOS_SUCCESS = '[TIPOS] Listar Tipos Success';
export const LISTAR_TIPOS_FAIL = '[TIPOS] Listar Tipos Fail';

export class listarTiposAction implements Action {
    readonly type = LISTAR_TIPOS;
}

export class listarTiposSuccessAction implements Action {
    readonly type = LISTAR_TIPOS_SUCCESS;

    constructor(public tipos: TipoClass[]) { }
}

export class listarTiposFailAction implements Action {
    readonly type = LISTAR_TIPOS_FAIL;

    constructor(public payload: any) { }
}

export type ActionsTipos = listarTiposAction | listarTiposSuccessAction | listarTiposFailAction;