import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/interfaces/post';
import { map, tap, catchError } from 'rxjs/operators';
import { ApiCallService } from '../api-call.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    public http: HttpClient,
    private apiCallService: ApiCallService
    ) { }

  public fetchPosts() {
    return this.http.get<Post[]>(
      this.apiCallService.url('posts')
    )
    .pipe(map(posts => posts));
  }
}
