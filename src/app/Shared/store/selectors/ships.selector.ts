import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';

export const getShipsState = createSelector(
  fromFeature.getStateShared,
  (state: fromFeature.SharedState) => state.ships
);

export const getShips = createSelector(
  getShipsState,
  (state) => state.shipList
);
