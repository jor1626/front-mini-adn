import { BodegaClass } from './../../models/bodega.model';
import * as fromBodegas from "./../actions/bodega.actions";


export interface BodegaState {
    bodegas: BodegaClass[],
    loaded: boolean,
    loading: boolean,
    errors: any
}

const estadoInicial: BodegaState = {
    bodegas: [],
    loaded: false,
    loading: false,
    errors: null
}

export function bodegasReducer(state = estadoInicial, Actions: fromBodegas.ActionsBodega): BodegaState {
    switch (Actions.type) {
        case fromBodegas.LISTAR_BODEGAS:

            return {
                ...state,
                loading: true
            };

        case fromBodegas.LISTAR_BODEGAS_SUCCESS:

            return {
                ...state,
                loading: false,
                loaded: true,
                bodegas: Actions.bodegas
            };

        case fromBodegas.LISTAR_BODEGAS_FAIL:

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