import * as fromNivel from './../actions/nivel.actions';
import { NivelClass } from '../../models';


export interface NivelState {
    niveles: NivelClass[],
    loaded: boolean,
    loading: boolean,
    errors: any
}

const estadoInicial: NivelState = {
    niveles: [],
    loaded: false,
    loading: false,
    errors: null
}


export function nivelesReducers(state = estadoInicial, action: fromNivel.ActionsNiveles): NivelState {
    switch (action.type) {
        case fromNivel.LISTAR_NIVELES:
            return {
                ...state,
                loading: true
            };

        case fromNivel.LISTAR_NIVELES_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                niveles: action.niveles
            };

        case fromNivel.LISTAR_NIVELES_FAIL:
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