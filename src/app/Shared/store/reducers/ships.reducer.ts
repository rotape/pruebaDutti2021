import { createReducer, on } from '@ngrx/store';
import { ShipList } from '../../models/shipsList.model';
import * as fromShips from '../actions/ships.action';

export interface State {
  shipList: ShipList[];
}

const initialState: State = {
  shipList: [],
};

export const reducer = createReducer(
  initialState,
  on(fromShips.LoadShipsSuccess, (state, { shipList }) => {
    return { ...state, shipList };
  })
);
