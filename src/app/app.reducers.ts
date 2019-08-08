
import { ActionReducerMap } from "@ngrx/store";

//Actions and reducers
import { BalanceGeneralState, BalanceGeneralReducer } from "./component/balance-general/store/balance-general.reducers";
import { BodegaState, bodegasReducer } from "./store/reducers/bodega.reducers";
import { NivelState, nivelesReducers } from "./store/reducers/nivel.reducers";
import { ValorState, valoresReducers } from "./store/reducers/valor.reducers";
import { CentroState, centrosReducer } from "./store/reducers/centro.reducers";

//Effects
import { BalanceGeneralEffects } from "./component/balance-general/store/balance-general.effects";
import { FilterEffectsService } from "./store/effects/other.effects";


export interface AppState {
    balance_general: BalanceGeneralState,
    bodegas: BodegaState;
    niveles: NivelState;
    valores: ValorState;
    centros: CentroState;
};

export const appReducers: ActionReducerMap<AppState> = {
    balance_general: BalanceGeneralReducer,
    bodegas: bodegasReducer,
    niveles: nivelesReducers,
    valores: valoresReducers,
    centros: centrosReducer
}

export const effectsArray: any[] = [BalanceGeneralEffects, FilterEffectsService]