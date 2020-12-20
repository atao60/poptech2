import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { bloglistRoutingComponents, BlogListRoutingModule } from './blog-list-routing.module';
import { BlogListItemModule } from '../../shared/components/blog-list-item/blog-list-item.module';

@NgModule({
  declarations: [...bloglistRoutingComponents],
  imports: [
    CommonModule,
    BlogListRoutingModule,
    BlogListItemModule
  ],
  exports: [...bloglistRoutingComponents]
})
export class BlogListModule { }

