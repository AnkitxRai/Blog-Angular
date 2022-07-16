import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { map, tap, catchError } from 'rxjs/operators';
import { ApiCallService } from '../api-call.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient,
    private apiCallService: ApiCallService
    ) { }

  public fetchUsers(): Observable<User[]>{
    return this.http.get<User[]>(
      this.apiCallService.url('users')
    )
  }
}
