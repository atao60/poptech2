import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list.component';

export const bloglistRoutingComponents = [BlogListComponent];

const routes: Routes = [
  { path: '', component: BlogListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogListRoutingModule { }
