import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  template: `
    <ul>
      <li *ngFor="let post of posts$ | async">
        <a [routerLink]="[post.route]">{{ post.title }}</a>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  posts$?: Observable<ScullyRoute[]>;

  constructor(private readonly scullyRoutesService: ScullyRoutesService) {
    this.posts$ = this.scullyRoutesService.available$.pipe(
      map(routeList => {
        return routeList.filter(route => route.route.startsWith('/blog/'));
      })
    );
  }

  ngOnInit(): void {
  }

}
