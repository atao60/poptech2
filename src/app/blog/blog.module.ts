import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import { AllPostsBtnModule } from '../shared/components/all-posts-btn/all-posts-btn.module';
import { ThemeTogglerModule } from '../shared/components/theme-toggler/theme-toggler.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, AllPostsBtnModule, ThemeTogglerModule]
})
export class BlogModule {}
