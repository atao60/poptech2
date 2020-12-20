import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a [routerLink]="['/']"
         routerLinkActive
      >Blog</a>
      <a [routerLink]="['/about']"
         routerLinkActive
      >Welcome</a>
    </nav>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
