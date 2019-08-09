import * as fromTipo from './../actions/tipo.actions';
import { TipoClass } from '../../models';


export interface TipoState {
    tipos: TipoClass[],
    loaded: boolean,
    loading: boolean,
    errors: any
}

const estadoInicial: TipoState = {
    tipos: [],
    loaded: false,
    loading: false,
    errors: null
}


export function tiposReducers(state = estadoInicial, action: fromTipo.ActionsTipos): TipoState {
    switch (action.type) {
        case fromTipo.LISTAR_TIPOS:
            return {
                ...state,
                loading: true
            };

        case fromTipo.LISTAR_TIPOS_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                tipos: action.tipos
            };

        case fromTipo.LISTAR_TIPOS_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                errors: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url,
                }
            };

        default:
            return state;
    }
}