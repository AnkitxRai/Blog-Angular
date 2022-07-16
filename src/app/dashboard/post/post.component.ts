import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { UserStateService } from 'src/app/user/services/user-state.service';

@Component({
  selector: 'app-post[post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  public post!: Post;

  @Input()
  public user!: User|undefined;



  constructor() { }

  ngOnInit(): void {
    // console.log(this.userStateService.snapshot().users);
  }

}
