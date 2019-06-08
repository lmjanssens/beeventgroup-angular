import {User} from './user.model';

export class UserAction {
  public id: number;
  public user: User;
  public action: string;
  public timestamp: string;


  constructor(id: number, user: User, action: string, timestamp: string) {
    this.id = id;
    this.user = user;
    this.action = action;
    this.timestamp = timestamp;
  }
}
