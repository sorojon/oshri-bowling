import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './dashboard/user/user.component';

const routes: Routes = [
  { path:'', component: UserComponent },
  { path:'Game', component: UserComponent },
  { path:'Game/:player', component: DashboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
