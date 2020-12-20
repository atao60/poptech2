import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-all-posts-btn',
  template: `
    <a [routerLink]="['/']">
      All Posts
    </a>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllPostsBtnComponent {}
