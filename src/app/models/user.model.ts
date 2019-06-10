import {UserAction} from './user-action.model';

export class User {
  
  constructor(public id?: number,
              public username?: string,
              public password?: string,
              public actions?: UserAction[]) {}

  public getUsername(): string { return this.username; }
  public setUsername(username: string) { this.username = username; }
  public getPassword(): string { return this.password; }
  public setPassword(password: string) { this.password = password; }

}
