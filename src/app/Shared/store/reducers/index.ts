import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromShips from '../reducers/ships.reducer';

export interface SharedState {
  ships: fromShips.State;
}

export const SharedReducer: ActionReducerMap<SharedState> = {
  ships: fromShips.reducer,
};

export const getStateShared = createFeatureSelector<SharedState>('shared');
