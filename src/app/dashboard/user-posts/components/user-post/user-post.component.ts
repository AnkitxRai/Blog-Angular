import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardStateService } from 'src/app/dashboard/services/dashboard-state.service';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { UserStateService } from 'src/app/user/services/user-state.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  posts: Post[] | undefined = [];

  constructor(private route: ActivatedRoute, private dashboardStateService: DashboardStateService, private userStateService: UserStateService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    if(!!userId){
      this.postByUser(parseInt(userId));
    }
  }

  postByUser(userId: number) {
    this.posts = this.dashboardStateService.snapshot().posts?.filter(post => {
       return post.userId == userId
    });
  }

  // this return the user info by post
  userOfPost(post: Post): User|undefined {
    return this.userStateService.snapshot().users?.find((user: User) => user.id === post.userId);
  }

}
