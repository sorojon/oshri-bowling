import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'', component: DashboardComponent },
  { path:'page1', component: InitialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
