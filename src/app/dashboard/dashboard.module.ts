import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { UserResolver } from '../user/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  declarations: [DashboardComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
