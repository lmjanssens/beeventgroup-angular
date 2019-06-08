import {UserAction} from './user-action.model';

export class User {
  public id: number;
  public username: string;
  public password: string;
  public actions: UserAction[];


  constructor(id: number, username: string, password: string, actions: UserAction[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.actions = actions;
  }
}
