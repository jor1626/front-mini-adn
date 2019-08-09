import { GrupoClass } from './../../models/grupo.model';
import * as fromGrupos from "./../actions/grupo.actions";


export interface GrupoState {
    grupos: GrupoClass[],
    loaded: boolean,
    loading: boolean,
    errors: any
}

const estadoInicial: GrupoState = {
    grupos: [],
    loaded: false,
    loading: false,
    errors: null
}

export function gruposReducer(state = estadoInicial, Actions: fromGrupos.ActionsGrupo): GrupoState {
    switch (Actions.type) {
        case fromGrupos.LISTAR_GRUPOS:

            return {
                ...state,
                loading: true
            };

        case fromGrupos.LISTAR_GRUPOS_SUCCESS:

            return {
                ...state,
                loading: false,
                loaded: true,
                grupos: Actions.grupos
            };

        case fromGrupos.LISTAR_GRUPOS_FAIL:

            return {
                ...state,
                loading: false,
                loaded: false,
                errors: {
                    status: Actions.payload.status,
                    message: Actions.payload.message,
                    url: Actions.payload.url
                }
            }

        default:
            return state;
    }
}