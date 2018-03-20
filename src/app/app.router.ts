import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { DetailsComponent } from './components/details/details.component'

export const router: Routes = [
  {path: '', redirectTo : 'login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details', component: DetailsComponent},
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
