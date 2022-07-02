import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  public fetchUsers() {
    return this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    )
    .pipe(map(users => users));
  }
}
