import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ShipsService } from '../../services/ships.service';
import * as shipsActions from '../actions/ships.action';

@Injectable()
export class ShipsEffects {
  constructor(private actions$: Actions, private shipsService: ShipsService) {}
  loadShips$ = createEffect(() =>
    this.actions$.pipe(
      ofType(shipsActions.LoadShipsAction),
      switchMap(() =>
        this.shipsService.getShips().pipe(
          map((shipList) => {
            return shipsActions.LoadShipsSuccess({ shipList });
          }),
          catchError(() => of({ type: '[Shared] Loading ships Error' }))
        )
      )
    )
  );
}
