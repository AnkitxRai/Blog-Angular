import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users: User[] | null = [];

  constructor(private userService: UserService, private userState: UserStateService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  public listUsers(){
    this.users = this.userState.snapshot().users;
  }

}
