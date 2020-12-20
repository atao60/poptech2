import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRoutingComponents, HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ...homeRoutingComponents],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
