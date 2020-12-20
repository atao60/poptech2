import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlogListItemComponent } from './blog-list-item.component';

@NgModule({
  declarations: [BlogListItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BlogListItemComponent]
})
export class BlogListItemModule { }
