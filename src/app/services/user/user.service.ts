import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { map, tap, catchError } from 'rxjs/operators';
import { ApiCallService } from '../api-call.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient,
    private apiCallService: ApiCallService
    ) { }

  public fetchUsers() {
    return this.http.get<User[]>(
      this.apiCallService.url('users')
    )
    .pipe(map(users => users));
  }
}
