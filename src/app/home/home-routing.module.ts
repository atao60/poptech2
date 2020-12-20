import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const homeRoutingComponents = [HomeComponent];

const routes: Routes = [
  { path: '', component: HomeComponent, 
    children: [
      {
        path: '',
        loadChildren: () => import('./blog-list/blog-list.module').then(m => m.BlogListModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
