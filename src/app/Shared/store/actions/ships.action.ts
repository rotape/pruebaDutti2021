import { createAction, props } from '@ngrx/store';
import { ShipList } from '../../models/shipsList.model';

export const LoadShipsAction = createAction('[Shared] Load ships');
export const LoadShipsSuccess = createAction(
  '[Shared] Load Ships success',
  props<{ shipList: ShipList }>()
);

export const LoadNextShipsAction = createAction(
  '[Shared] Load next ships',
  props<{ url: string }>()
);

export const LoadNextShipsSuccess = createAction(
  '[Shared] Load Ships success',
  props<{ shipList: ShipList }>()
);
