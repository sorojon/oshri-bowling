import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { FrameComponent } from './game-dashboard/frame/frame.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    GameDashboardComponent,
    FrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
