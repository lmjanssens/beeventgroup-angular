import {UserAction} from './user-action.model';

export class User {
  public id: number;
  public username: string;
  public password: string;
  public actions: UserAction[];
}
