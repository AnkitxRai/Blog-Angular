import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/interfaces/post';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }

  public fetchPosts() {
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    )
    .pipe(map(posts => posts));
  }
}
