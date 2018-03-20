import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.router';
import { Util } from './providers/util';
import { HttpService } from './providers/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Util, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
