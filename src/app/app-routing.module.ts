import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';

const routes: Routes = [
  { path:'', component: GameDashboardComponent },
  { path:'page1', component: InitialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
