import { CentroClass } from './../../models/centro.model';
import * as fromCentros from "./../actions/centro.actions";


export interface CentroState {
    centros: CentroClass[],
    loaded: boolean,
    loading: boolean,
    errors: any
}

const estadoInicial: CentroState = {
    centros: [],
    loaded: false,
    loading: false,
    errors: null
}

export function centrosReducer(state = estadoInicial, Actions: fromCentros.ActionsCentro): CentroState {
    switch (Actions.type) {
        case fromCentros.LISTAR_CENTROS:

            return {
                ...state,
                loading: true
            };

        case fromCentros.LISTAR_CENTROS_SUCCESS:

            return {
                ...state,
                loading: false,
                loaded: true,
                centros: Actions.centros
            };

        case fromCentros.LISTAR_CENTROS_FAIL:

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