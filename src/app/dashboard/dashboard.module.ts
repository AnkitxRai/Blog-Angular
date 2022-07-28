import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { UserResolver } from '../user/user.resolver';
import { UserPostComponent } from './user-posts/components/user-post/user-post.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      user: UserResolver
    }
  },
  {
    path: ':userId/posts',
    component: UserPostComponent
  }
];

@NgModule({
  declarations: [DashboardComponent, PostComponent, UserPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
