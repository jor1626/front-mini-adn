
import { ActionReducerMap } from "@ngrx/store";

//Actions and reducers
import { BalanceGeneralState, BalanceGeneralReducer } from "./component/balance-general/store/balance-general.reducers";
import { EstadoResultadoState, EstadoResultadoReducer } from "./component/estado-resultado/store/estado-resultado.reducers";
import { BodegaState, bodegasReducer } from "./store/reducers/bodega.reducers";
import { NivelState, nivelesReducers } from "./store/reducers/nivel.reducers";
import { ValorState, valoresReducers } from "./store/reducers/valor.reducers";
import { CentroState, centrosReducer } from "./store/reducers/centro.reducers";
import { TipoState, tiposReducers } from "./store/reducers/tipo.reducers";

//Effects
import { BalanceGeneralEffects } from "./component/balance-general/store/balance-general.effects";
import { FilterEffectsService } from "./store/effects/other.effects";
import { EstadoResultadoEffects } from "./component/estado-resultado/store/estado-resultado.effects";
import { GrupoState, gruposReducer } from "./store/reducers/grupo.reducers";
import { ExistenciaArticuloReducer, ExistenciaArticuloState } from "./component/existencia-articulo/store/existencia-articulo.reducers";
import { ExistenciaArticuloEffects } from "./component/existencia-articulo/store/existencia-articulo.effects";

export interface AppState {
    balance_general: BalanceGeneralState,
    estado_resultado: EstadoResultadoState,
    existencia_articulo: ExistenciaArticuloState,
    bodegas: BodegaState;
    niveles: NivelState;
    valores: ValorState;
    centros: CentroState;
    tipos: TipoState;
    grupos: GrupoState;
};

export const appReducers: ActionReducerMap<AppState> = {
    balance_general: BalanceGeneralReducer,
    estado_resultado: EstadoResultadoReducer,
    existencia_articulo: ExistenciaArticuloReducer,
    bodegas: bodegasReducer,
    niveles: nivelesReducers,
    valores: valoresReducers,
    centros: centrosReducer,
    tipos: tiposReducers,
    grupos: gruposReducer
}

export const effectsArray: any[] = [BalanceGeneralEffects, EstadoResultadoEffects, ExistenciaArticuloEffects, FilterEffectsService];