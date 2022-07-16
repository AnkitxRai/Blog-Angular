import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from 'src/app/interfaces/post';

export interface DashboardState {
  posts: Post[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardStateService {

  /**
   * State value
   */
    protected dashboardState: BehaviorSubject<DashboardState | null> = new BehaviorSubject<DashboardState | null>(null);

  constructor() { }


  public init(posts: Post[]) {
    this.dashboardState.next({
      posts: posts,
    });
  }

  public setPosts(posts: Post[]) {
    const state = this.snapshot();
    state.posts = posts;
    this.dashboardState.next(state);
  }

  public snapshot() {
    const value = this.dashboardState.value;
    if (!value){
      throw new Error('state is not init yet!')
    }
    return value;
  }

}
