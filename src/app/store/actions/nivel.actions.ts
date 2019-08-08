import { Action } from '@ngrx/store';
import { NivelClass } from '../../models';

export const LISTAR_NIVELES = '[NIVELES] Listar Niveles';
export const LISTAR_NIVELES_SUCCESS = '[NIVELES] Listar Niveles Success';
export const LISTAR_NIVELES_FAIL = '[NIVELES] Listar Niveles Fail';

export class listarNivelesAction implements Action {
    readonly type = LISTAR_NIVELES;
}

export class listarNivelesSuccessAction implements Action {
    readonly type = LISTAR_NIVELES_SUCCESS;

    constructor(public niveles: NivelClass[]) { }
}

export class listarNivelesFailAction implements Action {
    readonly type = LISTAR_NIVELES_FAIL;

    constructor(public payload: any) { }
}

export type ActionsNiveles = listarNivelesAction | listarNivelesSuccessAction | listarNivelesFailAction;