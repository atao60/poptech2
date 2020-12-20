import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRoutingComponents, HomeRoutingModule } from './home-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ThemeTogglerModule } from '../shared/components/theme-toggler/theme-toggler.module';

@NgModule({
  declarations: [...homeRoutingComponents, NavigationComponent],
  imports: [
    CommonModule,
    ThemeTogglerModule,
    HomeRoutingModule
  ],
  exports: [NavigationComponent]
})
export class HomeModule { }
