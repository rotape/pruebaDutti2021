import { Ship, ShipModel } from './ships.model';

export interface ShipListModel {
  count: number;
  next: string;
  previous: null;
  results: ShipModel[];
}
export class ShipList implements ShipListModel {
  private _count: number;
  private _next: string;
  private _previous: null;
  private _results: ShipModel[];
  constructor(shipList: ShipListModel) {
    this.count = shipList.count;
    this.next = shipList.next;
    this.previous = shipList.previous;
    this.results = this.getShipResults(shipList.results);
  }
  public get count(): number {
    return this._count;
  }
  public set count(value) {
    this._count = value;
  }
  get next() {
    return this._next;
  }
  set next(value) {
    this._next = value;
  }
  get previous() {
    return this._previous;
  }
  set previous(value) {
    this._previous = value;
  }

  get results() {
    return this._results;
  }
  set results(value: ShipModel[]) {
    this._results = value;
  }

  getShipResults(results: ShipModel[]): Ship[] {
    let list: Ship[] = [];
    if (results && results.length > 0) {
      list = results.map((res: ShipModel) => new Ship(res));
    }
    return list;
  }
}
