import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { UserService } from '../services/user/user.service';
import { UserStateService } from './services/user-state.service';

@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<boolean> {
  constructor(private userService: UserService, private userState: UserStateService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // return this.userService.fetchUsers().pipe(
    //   map((users) => {
    //     this.userState.init(users)
    //     console.log(users);
    //   })
    // );
    return from(of([]))
    .pipe(switchMap(() =>
      this.userService.fetchUsers())  // call apis in the guard that are 100% required to the state at init time. ( to provide bare minimum data to the state )
    )
    .pipe(tap((users) => this.userState.init(users)))
    .pipe(map((users) => users.length > 0));
  }
}
