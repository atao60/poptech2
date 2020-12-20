import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRoutingComponents, HomeRoutingModule } from './home-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [...homeRoutingComponents, NavigationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [NavigationComponent]
})
export class HomeModule { }
