import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
