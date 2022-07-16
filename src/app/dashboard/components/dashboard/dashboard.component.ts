import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { PostService } from 'src/app/services/post/post.service';
import { UserStateService } from 'src/app/user/services/user-state.service';
import { DashboardStateService } from '../../services/dashboard-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts!: Post[] | null;
  users!: User[] | null;

  constructor(private postService: PostService, private dashboardStateService: DashboardStateService, private userStateService: UserStateService) { }

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe((posts) => {
      this.dashboardStateService.init(posts);
      this.posts = posts;  // it should be done through listPosts() method below ( fix it )
    });

    this.users = this.userStateService.snapshot().users
  }

  // this return the user info by post
  userOfPost(post: Post): User|undefined {
    return this.users?.find((user: User) => user.id === post.userId);
  }

}
