import * as fromValor from './../actions/valor.actions';
import { ValorClass } from '../../models';

export interface ValorState {
    valores: ValorClass[],
    loaded: boolean,
    loading: boolean,
    errors: any
}

const estadoInicial: ValorState = {
    valores: [],
    loaded: false,
    loading: false,
    errors: null
}


export function valoresReducers(state = estadoInicial, action: fromValor.ActionsValores): ValorState {
    switch (action.type) {
        case fromValor.LISTAR_VALORES:
            return {
                ...state,
                loading: true
            };

        case fromValor.LISTAR_VALORES_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                valores: action.valores
            };

        case fromValor.LISTAR_VALORES_FAIL:
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