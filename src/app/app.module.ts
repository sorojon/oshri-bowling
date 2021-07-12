import { BrowserModule } from '@angular/platform-browser';
import { Input, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';
import { FrameComponent } from './dashboard/frame/frame.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './dashboard/user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    FrameComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
