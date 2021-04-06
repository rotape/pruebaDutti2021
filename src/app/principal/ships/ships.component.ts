import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShipList } from 'src/app/Shared/models/shipsList.model';
import * as fromStore from '../../Shared/store';
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent implements OnInit {
  public dataList: any = [];
  public shipsList$: Observable<ShipList[]>;

  constructor(private store: Store<fromStore.SharedState>) {}

  ngOnInit(): void {
    this.loadShips();
  }

  loadShips() {
    this.store.dispatch(fromStore.LoadShipsAction());
    this.shipsList$ = this.store.pipe(select(fromStore.getShips));
  }
}
