import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog-list-item',
  template: `
    <div class="flex justify-between items-center">
      <span class="font-light text-gray-medium">
        {{ route.date | date: 'mediumDate' }}
      </span>
      <a class="px-2 py-1 text-sm text-secondary font-bold rounded hover:text-white hover:bg-secondary transition-colors duration-200 ease-in-out cursor-pointer"
         *ngIf="route.tags?.length"
         [routerLink]="['/tag', route.tags[0].toLowerCase()]" >
        {{ route.tags[0] }}
      </a>
    </div>
    <div class="mt-2">
      <a class="text-2xl font-bold hover:text-gray-medium transition-colors duration-200 ease-in-out"
         [routerLink]="[route.route]" >
        {{ route.title }}
      </a>
      <p class="mt-2 font-thin text-gray-dark">
        {{ route.description }}
      </p>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'py-4',
  }
})
export class BlogListItemComponent { 
  @Input() route: ScullyRoute = { route: '' };
}
