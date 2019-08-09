import { Action } from '@ngrx/store';
import { GrupoClass } from '../../models';

export const LISTAR_GRUPOS = '[GRUPOS] Listar GRUPOS';
export const LISTAR_GRUPOS_SUCCESS = '[GRUPOS] Listar GRUPOS Success';
export const LISTAR_GRUPOS_FAIL = '[GRUPOS] Listar GRUPOS Fail';

export class ListarGruposActions implements Action {
    readonly type = LISTAR_GRUPOS;
}

export class ListarGruposSuccessActions implements Action {
    readonly type = LISTAR_GRUPOS_SUCCESS;

    constructor(public grupos: GrupoClass[]) { }
}

export class ListarGruposFailActions implements Action {
    readonly type = LISTAR_GRUPOS_FAIL;

    constructor(public payload: any) { }
}

export type ActionsGrupo = ListarGruposActions | ListarGruposSuccessActions | ListarGruposFailActions;