export interface ShipModel {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
export class Ship implements ShipModel {
  private _name: string;
  private _model: string;
  private _manufacturer: string;
  private _cost_in_credits: string;
  private _length: string;
  private _max_atmosphering_speed: string;
  private _crew: string;
  private _passengers: string;
  private _cargo_capacity: string;
  private _consumables: string;
  private _hyperdrive_rating: string;
  private _MGLT: string;
  private _starship_class: string;
  private _pilots: string[];
  private _films: string[];
  private _created: string;
  private _edited: string;
  private _url: string;

  constructor(ship: ShipModel) {
    this.name = ship.name;
    this.model = ship.model;
    this.manufacturer = ship.manufacturer;
    this.cost_in_credits = ship.cost_in_credits;
    this.length = ship.length;
    this.max_atmosphering_speed = ship.max_atmosphering_speed;
    this.crew = ship.crew;
    this.passengers = ship.passengers;
    this.cargo_capacity = ship.cargo_capacity;
    this.consumables = ship.consumables;
    this.hyperdrive_rating = ship.hyperdrive_rating;
    this.MGLT = ship.MGLT;
    this.starship_class = ship.starship_class;
    this.pilots = ship.pilots;
    this.films = ship.films;
    this.created = ship.created;
    this.edited = ship.edited;
    this.url = ship.url;
  }
  public get name() {
    return this._name;
  }
  public set name(value) {
    this._name = value;
  }
  public get model() {
    return this._model;
  }
  public set model(value) {
    this._model = value;
  }
  public get manufacturer() {
    return this._manufacturer;
  }
  public set manufacturer(value) {
    this._manufacturer = value;
  }
  public get cost_in_credits() {
    return this._cost_in_credits;
  }
  public set cost_in_credits(value) {
    this._cost_in_credits = value;
  }
  public get length() {
    return this._length;
  }
  public set length(value) {
    this._length = value;
  }
  public get max_atmosphering_speed() {
    return this._max_atmosphering_speed;
  }
  public set max_atmosphering_speed(value) {
    this._max_atmosphering_speed = value;
  }
  public get crew() {
    return this._crew;
  }
  public set crew(value) {
    this._crew = value;
  }
  public get passengers() {
    return this._passengers;
  }
  public set passengers(value) {
    this._passengers = value;
  }
  public get cargo_capacity() {
    return this._cargo_capacity;
  }
  public set cargo_capacity(value) {
    this._cargo_capacity = value;
  }
  public get consumables() {
    return this._consumables;
  }
  public set consumables(value) {
    this._consumables = value;
  }
  public get hyperdrive_rating() {
    return this._hyperdrive_rating;
  }
  public set hyperdrive_rating(value) {
    this._hyperdrive_rating = value;
  }
  public get MGLT() {
    return this._MGLT;
  }
  public set MGLT(value) {
    this._MGLT = value;
  }
  public get starship_class() {
    return this._starship_class;
  }
  public set starship_class(value) {
    this._starship_class = value;
  }
  public get pilots() {
    return this._pilots;
  }
  public set pilots(value) {
    this._pilots = value;
  }
  public get films() {
    return this._films;
  }
  public set films(value) {
    this._films = value;
  }
  public get created() {
    return this._created;
  }
  public set created(value) {
    this._created = value;
  }
  public get edited() {
    return this._edited;
  }
  public set edited(value) {
    this._edited = value;
  }
  public get url() {
    return this._url;
  }
  public set url(value) {
    this._url = value;
  }
}
