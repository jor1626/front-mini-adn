
import * as fromBalanceGeneral from "./balance-general.actions";
import { BalanceGeneralClass } from "../model/balance-general.model";

export interface BalanceGeneralState {
    data: BalanceGeneralClass,
    loading: boolean,
    loaded: boolean,
    errors: any
}

const initialState: BalanceGeneralState = {
    data: {},
    loading: false,
    loaded: false,
    errors: null
}

export function BalanceGeneralReducer(state = initialState, action: fromBalanceGeneral.BalanceGeneralActions): BalanceGeneralState {
    switch (action.type) {
        case fromBalanceGeneral.GENERAR_REPORTE:
            return {
                ...state,
                loading: true
            };
        case fromBalanceGeneral.GENERAR_REPORTE_SUCCESS:
            return {
                ...state,
                loaded: false,
                loading: true,
                data: action.data
            }
    
        default:
            return state;
    }
}