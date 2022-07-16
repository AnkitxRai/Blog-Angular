import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

export interface UserState {
  users: User[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  /**
   * State value
   */
  protected userState: BehaviorSubject<UserState | null> = new BehaviorSubject<UserState | null>(null);

  constructor() { }

  public init(users: User[]) {
    this.userState.next({
      users: users,
    });
  }

  public setUsers(users: User[]): void {
    const state = this.snapshot();
    state.users = users;
    this.userState.next(state);
  }

  public snapshot(): UserState {
    const value = this.userState.value;
    if (!value){
      throw new Error('state is not init yet!')
    }
    return value;
  }


}

