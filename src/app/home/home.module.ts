import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LayoutsComponent } from './layouts/layouts.component';


@NgModule({
  declarations: [HomeComponent, DashboardComponent, PagesComponent, AuthenticationComponent, LayoutsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  constructor() {
    console.log('home module loading');
  }
}
