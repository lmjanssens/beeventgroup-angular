import {UserAction} from './user-action.model';

export class User {
  public user_id: number;
  public username: string;
  public password: string;
  public actions: UserAction[];


  constructor(user_id: number, username: string, password: string, actions: UserAction[]) {
    this.user_id = user_id;
    this.username = username;
    this.password = password;
    this.actions = actions;
  }
}
