import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog-list-item',
  template: `
    <div>
      <span>
        {{ route.date | date: 'mediumDate' }}
      </span>
      <a *ngIf="route.tags?.length"
         [routerLink]="['/tag', route.tags[0].toLowerCase()]" >
        {{ route.tags[0] }}
      </a>
    </div>
    <div>
      <a [routerLink]="[route.route]" >
        {{ route.title }}
      </a>
      <p>
        {{ route.description }}
      </p>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListItemComponent { 
  @Input() route: ScullyRoute = { route: '' };
}
