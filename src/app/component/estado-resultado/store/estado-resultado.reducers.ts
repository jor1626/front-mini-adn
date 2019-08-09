
import * as fromEstadoResultado from './estado-resultado.actions';
import { EstadoResultadoClass } from "../model/estado-resultado.model";

export interface EstadoResultadoState {
    data: any,
    loading: boolean,
    loaded: boolean,
    errors: any
}

const initialState: EstadoResultadoState = {
    data: {},
    loading: false,
    loaded: false,
    errors: null
}

export function EstadoResultadoReducer(state = initialState, action: fromEstadoResultado.EstadoResultadoActions): EstadoResultadoState {
    switch (action.type) {
        case fromEstadoResultado.ESTADO_RESULTADO:
            return {
                ...state,
                loading: true
            };
        case fromEstadoResultado.ESTADO_RESULTADO_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                data: action.data
            }
    
        default:
            return state;
    }
}