export interface UserModel {
  id: number;
  name?: string;
  username?: string;
  email?: string;
}

export class User implements UserModel {
  private _id: number;
  private _name: string;
  private _username: string;
  private _email: string;

  constructor(user: UserModel) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
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

  public json(): UserModel {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
    } as UserModel;
  }
}
