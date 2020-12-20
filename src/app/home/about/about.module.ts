import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { aboutRoutingComponents, AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [...aboutRoutingComponents],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [...aboutRoutingComponents]
})
export class AboutModule { }
