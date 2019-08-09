
import * as fromExistenciaArticulo from './existencia-articulo.actions';
import { ExistenciaArticuloClass } from "../model/existencia-articulo.model";

export interface ExistenciaArticuloState {
    data: any,
    loading: boolean,
    loaded: boolean,
    errors: any
}

const initialState: ExistenciaArticuloState = {
    data: {},
    loading: false,
    loaded: false,
    errors: null
}

export function ExistenciaArticuloReducer(state = initialState, action: fromExistenciaArticulo.ExistenciaArticuloActions): ExistenciaArticuloState {
    switch (action.type) {
        case fromExistenciaArticulo.EXISTENCIA_ARTICULO:
            return {
                ...state,
                loading: true
            };
        case fromExistenciaArticulo.EXISTENCIA_ARTICULO_SUCCESS:
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