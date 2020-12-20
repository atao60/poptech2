import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-list',
  template: `
    <div>
      <app-blog-list-item *ngFor="let post of posts$ | async" [route]="post"></app-blog-list-item>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent {
  posts$: Observable<ScullyRoute[]>;

  constructor(private readonly scullyRoutesService: ScullyRoutesService) {
    this.posts$ = this.scullyRoutesService.available$.pipe(
      map(routeList => routeList.filter(r => r.route.startsWith('/blog/') && r.title != null))
    );
  }
}
