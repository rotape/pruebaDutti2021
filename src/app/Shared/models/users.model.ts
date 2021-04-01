export interface UserModel {
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
}

export class User implements UserModel {
  private _first_name: string;
  private _last_name: string;
  private _username: string;
  private _email: string;

  constructor(user: UserModel) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.username = user.username;
    this.email = user.email;
  }

  public get first_name(): string {
    return this._first_name;
  }
  public set first_name(value: string) {
    this._first_name = value;
  }

  public get last_name(): string {
    return this._last_name;
  }
  public set last_name(value: string) {
    this._last_name = value;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
}
